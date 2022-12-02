import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to='/products'>Products</Link>
      &nbsp; | &nbsp;
      <Link to='/orders'>Order History</Link>
      &nbsp; | &nbsp;
      <Link to='/cart'>Shopping Cart</Link>
      &nbsp; | &nbsp;
      {user.name}
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}