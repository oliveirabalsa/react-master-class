import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navigation: React.FC = () => {
  return (
    <nav >
      <div className="gap-4">
        <Link to="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-300 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
