import React from 'react';
import Data from './data'


function Footer () {
    const footers = Data.footers
    const footerItems = footers.map((footer) =>
        <li id={footer} key={footer.toString()}>
            {footer}
        </li>
        
  );
 
    return (
        <div className="footerContainer">
            <ul className="logos">
                {footerItems}
            </ul>
        </div>

    )
}

export default Footer