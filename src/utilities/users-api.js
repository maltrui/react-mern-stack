// API modules are used to perform the AJAX
// communications between client (browser)
// and the server

const BASE_URL = '/api/users';

export async function signUp(userData) {
  // Fetch uses an options object as a second arg
  // to make requests other than basic GET requests,
  // include data, set headers, etc
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}

export async function login(credentials) {
  // Fetch uses an options object as a second arg
  // to make requests other than basic GET requests,
  // include data, set headers, etc
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Invalid Log In');
  }
}