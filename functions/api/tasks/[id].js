// Cloudflare Functions - Get single task
export async function onRequestGet(context) {
  const { params, env } = context;
  const taskId = params.id;

  try {
    const { results } = await env.DB.prepare(
      'SELECT * FROM tasks WHERE id = ?'
    ).bind(taskId).all();

    if (results.length === 0) {
      return new Response(JSON.stringify({ message: 'Task not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    return new Response(JSON.stringify(results[0]), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

// Update task
export async function onRequestPut(context) {
  const { request, params, env } = context;
  const taskId = params.id;

  try {
    const updates = await request.json();

    // Get existing task
    const { results } = await env.DB.prepare(
      'SELECT * FROM tasks WHERE id = ?'
    ).bind(taskId).all();

    if (results.length === 0) {
      return new Response(JSON.stringify({ message: 'Task not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const task = results[0];
    const title = updates.title !== undefined ? updates.title : task.title;
    const description = updates.description !== undefined ? updates.description : task.description;
    const completed = updates.completed !== undefined ? updates.completed : task.completed;

    await env.DB.prepare(
      'UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?'
    ).bind(title, description, completed, taskId).run();

    const { results: updatedResults } = await env.DB.prepare(
      'SELECT * FROM tasks WHERE id = ?'
    ).bind(taskId).all();

    return new Response(JSON.stringify(updatedResults[0]), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

// Delete task
export async function onRequestDelete(context) {
  const { params, env } = context;
  const taskId = params.id;

  try {
    // Check if task exists
    const { results } = await env.DB.prepare(
      'SELECT * FROM tasks WHERE id = ?'
    ).bind(taskId).all();

    if (results.length === 0) {
      return new Response(JSON.stringify({ message: 'Task not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    await env.DB.prepare(
      'DELETE FROM tasks WHERE id = ?'
    ).bind(taskId).run();

    return new Response(JSON.stringify({ message: 'Task deleted successfully' }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
