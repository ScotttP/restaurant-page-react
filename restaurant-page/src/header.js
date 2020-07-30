import React from 'react';
import Data from './data'
import Content from './content'
import AboutUs from './about';


function Header () {
    const headers = Data.headers
    const headerItems = headers.map((header) =>
        <li id={header} key={header.toString()} onClick = {(e) => handlers(e)}>
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

function handlers (e) {
    if (e.target.id === 'About'){
        console.log('About Section')
    }
}


export default Header