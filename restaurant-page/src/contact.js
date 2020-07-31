import React from 'react';

export default class Contact extends React.Component {

    render () {
        return (
            <div className="formDiv">
                <form className="contactForm">
                    <h1 id="contactHeader">Contact Us!</h1>
                    <label id="nameLabel">Name :</label>
                    <input id="nameInput" type="text"></input>
                    <label id="emailLabel">Email :</label>
                    <input id="emailInput" type="email"></input>
                    <label id="textLabel">What Would You Like to Say?</label>
                    <textarea id="textInput" type="text"></textarea>
                    <button id="submitButton">Submit</button>
                </form>
            </div>
            
        )
    }
       
}