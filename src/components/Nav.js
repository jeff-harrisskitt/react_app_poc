import { NavLink } from "react-router-dom";

function Nav() {
    return (
      <nav>
        <ul className="nav-menu-list">
            <li className="nav-menu-item">
                <NavLink to="/">HOME</NavLink>                
            </li>
            <li className="nav-menu-item">
                <NavLink to="/what">WHAT IS REACT</NavLink>                
            </li>
            <li className="nav-menu-item">                
                <NavLink to="/why">WHY USE REACT</NavLink>
            </li>
            <li className="nav-menu-item">                
                <NavLink to="/example">OUR EXAMPLES</NavLink>
            </li>
            <li className="nav-menu-item">                
                <NavLink to="/contact">CONTACT US</NavLink>
            </li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;