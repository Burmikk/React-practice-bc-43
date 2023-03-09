import { NavLink } from 'react-router-dom';
export const Auth = () => {
  return (
    <div>
      <NavLink to="/signup">Signup</NavLink> |
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
