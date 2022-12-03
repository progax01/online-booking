import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/NavBar.css';

library.add(faBars, faXmark, faSearch);

export default function NavBar() {

  const [navStatus, setNavStatus] = useState(false);

  const changeHandler = () => (navStatus) ? setNavStatus(false) : setNavStatus(true);
  let navicon = (navStatus) ? faXmark : faBars;

  return (
    <>
      <nav> 
         
          <input type="checkbox" id="check" value={navStatus} onChange={changeHandler} />
          <label htmlFor="check" className="checkbtn">
            <FontAwesomeIcon icon={navicon} />
          </label>
        <div>
          <label className="logo">HomeAlike</label>
        </div>
        <div className="search-div">
          <FontAwesomeIcon icon={faSearch} id="search-icon" />
          <input type="text" id="search-box" />
        </div>
     
        <ul>
          <li><Link to="/homes">Homes</Link></li>
          <li><Link to="/loginhome">LogIn</Link></li>
          <li><Link to="/signuphome">SignUp</Link></li>
          <li><Link to="#">Contact</Link></li>
          <li><Link to="#">Feedback</Link></li>
        </ul>

      </nav>
    </>

  )
}
