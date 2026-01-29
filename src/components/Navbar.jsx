import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="logo">
        Srihan Pampana
      </NavLink>

      <ul>
        {[
          ["/", "Home"],
          ["/about", "About"],
          ["/projects", "Projects"],
          ["/experience", "Experience"],
          ["/contact", "Contact"],
        ].map(([to, label]) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}