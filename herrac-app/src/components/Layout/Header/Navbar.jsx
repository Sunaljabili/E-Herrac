import React from 'react';
import { Link ,NavLink} from "react-router-dom";
import LogoImg from "../../../assets/images/logo/logo.png"
import "./Navbar.css";

function Navbar() {

  const navLinkStyles=({isActive})=>{
    return {
      backgroundColor:isActive ? 'rgb(60 130 246)' : 'white',
      color:isActive ? 'white' :"black"

    }

  }
  return (
    <>
      <nav className="navbar">
        <div className="myContainer">
          <ul className='nav-menu'>
            <li className="nav-item">
              <Link to="/anaSəhifə" className='navbar-logo'>
                <img src={LogoImg} alt="" />
              </Link>
            </li>
           <li className="nav-item">
              <NavLink to="/anaSəhifə" style={navLinkStyles} className='nav-links'>AnaSəhifə
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink to="/elanlar" style={navLinkStyles} className='nav-links'>Elanlar
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink to="/hərrac" style={navLinkStyles} className='nav-links'>Hərrac
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/qanunvericilik"style={navLinkStyles}  className='nav-links'>Qanunvericilik
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ödəniş" style={navLinkStyles} className='nav-links'>Ödəniş
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/haqqımızda" style={navLinkStyles} className='nav-links'>Haqqımızda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/əlaqə" style={navLinkStyles} className='nav-links'>Əlaqə
              </NavLink>
            </li>
          </ul>
        </div>


      </nav>

    </>
  )
}

export default Navbar;
