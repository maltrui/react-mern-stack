// Service modules are where we put our
// "business"/application logic
// For example, when we signup or log in, 
// we will need to save the token we received 
// from the server - is that type of code
// good to put in the React component?
// NO!

import * as usersAPI from './users-api';

export async function signUp(userData) {
  // Delegate the request to the users-api
  // which will ultimatelly return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  // baby step (TODO: return a user object)
  return token;
}