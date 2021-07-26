import react from "react";
import { Link } from 'react-router-dom';
function Nav(){
  return(
       <nav>
         <h1 id="hea">Guru Website</h1>
          <ul>
          <Link to='/'>
            <li id="home">
                Home
            </li>
            </Link>
            <Link to='/about'>
            <li id="about">
                About
            </li>
            </Link>
            <Link to='/contact'>
            <li id="contact">
                contact
            </li>
            </Link>
          </ul>
       </nav>

  )

}
export default Nav;
