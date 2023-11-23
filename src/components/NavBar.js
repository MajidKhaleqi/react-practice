import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <div class="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">SHop</NavLink>
        <NavLink to="/todos">ToDos</NavLink>
      </div>
    </div>
  );
}
