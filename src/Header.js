import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <header>
      <div>
         <h3>My First Portfolio</h3> 
      </div>

      <nav>
          <ul>
              <li>
                  <Link to="/">HOME</Link>
              </li>
              <li>
                  <Link to="/blog">BLOG</Link>
              </li>
              <li>
                  <a href="/sns">SNS</a>
              </li>
          </ul>
      </nav>
  </header>
  );
};

export default Header;
