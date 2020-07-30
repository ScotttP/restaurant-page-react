import React from 'react';
import Data from './data'


function Header () {
    const headers = Data.headers
    const headerItems = headers.map((header) =>
        <li id={header} key={header.toString()}>
            {header}
        </li>
  );
    return (
        <nav className="navBarContainer">
            <div className = "navBarLeft">
                <h1 id="restaurantNameNavBar">
                    Scott's Pub
                </h1>
            </div>
            <div className = "navBarRight">
                <ul className = "navBar">
                    {headerItems}
                </ul>
            </div>
        </nav>
       
        
    )
}

export default Header