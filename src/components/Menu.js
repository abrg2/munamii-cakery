import "./Menu.css";

import { NavLink, Link } from 'react-router';

export default function Header() {
  return (
    <div className="Menu">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}