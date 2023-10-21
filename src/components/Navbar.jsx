import { Link } from "react-router-dom";
import "./Navbar.css";
import { Searchbar } from "./Searchbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Navbar = () => {
  const { color } = useContext(ThemeContext);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          <h1>Create recipe</h1>
        </Link>
      </nav>
    </div>
  );
};
