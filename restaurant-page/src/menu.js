import React from 'react';
import Data from './data'

export default class Menu extends React.Component {

    render () {
        const entrees = Data.entrees;
        const sides = Data.sides;
        const drinks = Data.drinks;

        const entreeItems = entrees.map((entree) =>
            <li id={entree} key={entree.toString()}>
                {entree}
            </li>
        );
        const sideItems = sides.map((side) =>
            <li id={side} key={side.toString()}>
                {side}
            </li>
        );
        const drinkItems = drinks.map((drink) =>
            <li id={drink} key={drink.toString()}>
                {drink}
            </li>
        );
        return (
            <div className="menu">
               <div class="entreeItems">
                    <h1 id="entreeHeader">Entreés</h1>
                    <ul class="entreeList">
                        {entreeItems}
                    </ul>
               </div>
               <div class="sideItems">
                    <h1 id="sideHeader">Sides</h1>
                    <ul class="sideList">
                        {sideItems}
                    </ul>
               </div>
               <div class="drinkItems">
                    <h1 id="drinkHeader">Drinks</h1>
                    <ul class="drinkList">
                        {drinkItems}
                    </ul>
               </div>
            </div>
            
        )
    }
       
}