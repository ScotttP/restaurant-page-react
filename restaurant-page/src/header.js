import React from 'react';
import Data from './data'


class Header extends React.Component{

  render (){
    const headers = Data.headers
    const headerItems = headers.map((header) =>
        <li id={header} key={header.toString()} onClick = {() => this.props.handleClick(header)}>
            {header}
        </li>
    );
    return (
        <nav className="navBarContainer">
            <div className = "navBarLeft">
                <h1 id="restaurantNameNavBar" onClick = {() => this.props.handleClick()}>
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

}


export default Header