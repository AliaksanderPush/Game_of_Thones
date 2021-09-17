import React from 'react';
import './Header.css'
import {Link, NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <div className="Header">
            <h3>
               <Link to ="/">
                Game of Thrones DB
               </Link>
            </h3>
                <ul>
                    <li><NavLink to = "/" exact >Home</NavLink></li>
                    <li><NavLink to = "/characters/" >Characters</NavLink></li>
                    <li><NavLink to = "/books/" >Books</NavLink></li>
                    <li><NavLink to = "/houses/">Houses</NavLink></li>     
                </ul>
        </div>
    );
};

export default Header;