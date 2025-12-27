// Cloudflare Functions - Get all tasks
export async function onRequestGet(context) {
  const { env } = context;

  try {
    const { results } = await env.DB.prepare(
      'SELECT * FROM tasks ORDER BY created_at DESC'
    ).all();

    return new Response(JSON.stringify(results), {
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

// Create new task
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { title, description = '' } = await request.json();

    if (!title) {
      return new Response(JSON.stringify({ message: 'Title is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const result = await env.DB.prepare(
      'INSERT INTO tasks (title, description, completed, created_at) VALUES (?, ?, ?, ?)'
    ).bind(title, description, false, new Date().toISOString()).run();

    const { results } = await env.DB.prepare(
      'SELECT * FROM tasks WHERE id = ?'
    ).bind(result.meta.last_row_id).all();

    return new Response(JSON.stringify(results[0]), {
      status: 201,
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
