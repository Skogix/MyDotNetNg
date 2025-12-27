// Cloudflare Functions - Get single task

/**
 * Validates that a task ID is a positive integer
 * @param {string} taskId - The task ID to validate
 * @returns {boolean} True if the task ID is a positive integer, false otherwise
 */
function validateTaskId(taskId) {
  return /^[1-9]\d*$/.test(taskId);
}

/**
 * Creates a standardized error response
 * @param {string} message - The error message
 * @param {number} status - The HTTP status code (default: 400)
 * @returns {Response} A Response object with the error
 */
function createErrorResponse(message, status = 400) {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function onRequestGet(context) {
  const { params, env } = context;
  const taskId = params.id;

  // Validate task ID is a positive integer
  if (!/^\d+$/.test(taskId) || parseInt(taskId, 10) <= 0) {
    return new Response(JSON.stringify({ message: 'Invalid task ID' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    const { results } = await env.DB.prepare(
      'SELECT * FROM tasks WHERE id = ?'
    ).bind(taskId).all();

    if (results.length === 0) {
      return createErrorResponse('Task not found', 404);
    }

    return new Response(JSON.stringify(results[0]), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return createErrorResponse(error.message, 500);
  }
}

// Update task
export async function onRequestPut(context) {
  const { request, params, env } = context;
  const taskId = params.id;

  // Validate task ID is a positive integer
  if (!/^\d+$/.test(taskId) || parseInt(taskId, 10) <= 0) {
    return new Response(JSON.stringify({ message: 'Invalid task ID' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    const updates = await request.json();

    // Get existing task
    const { results } = await env.DB.prepare(
      'SELECT * FROM tasks WHERE id = ?'
    ).bind(taskId).all();

    if (results.length === 0) {
      return createErrorResponse('Task not found', 404);
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
    return createErrorResponse(error.message, 400);
  }
}

// Delete task
export async function onRequestDelete(context) {
  const { params, env } = context;
  const taskId = params.id;

  // Validate task ID is a positive integer
  if (!/^\d+$/.test(taskId) || parseInt(taskId, 10) <= 0) {
    return new Response(JSON.stringify({ message: 'Invalid task ID' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  try {
    // Check if task exists
    const { results } = await env.DB.prepare(
      'SELECT * FROM tasks WHERE id = ?'
    ).bind(taskId).all();

    if (results.length === 0) {
      return createErrorResponse('Task not found', 404);
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
    return createErrorResponse(error.message, 500);
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
