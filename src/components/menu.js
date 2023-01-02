import  './menu.css'
import { Link } from "react-router-dom";

function Menu() {
   

    return(
        <div>
            <nav>
                <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>   
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li> 
                </ul>    
            </nav>
        </div>
    );
}

export default Menu;

// props
// destructuring
// array or list method map
// conditional rendering  // short and conditional rendering


