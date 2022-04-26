import React from "react";
import { Link } from "react-router-dom";
import { setIds } from "../../utils/generateIds";
import "./NavBar.css";

export default function NavBar({ links }) {
  return (
    <div className="navbar-container">
      {setIds(links).map((l) => (
        <Link key={l._id} to={l.path} className="link">
          {l.label}
        </Link>
      ))}
    </div>
  );
}
