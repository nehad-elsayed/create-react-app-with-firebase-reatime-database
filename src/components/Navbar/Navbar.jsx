import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Firebase App</h2>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <Link to="/read" onClick={() => setOpen(false)}>
            ReadData
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>
            WriteNewData
          </Link>
        </li>
      </ul>
    </nav>
  );
}
