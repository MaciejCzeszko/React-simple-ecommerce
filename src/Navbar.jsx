import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
