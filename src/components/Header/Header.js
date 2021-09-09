import React from 'react';
import './Header.css'



const Header = () => {
    return (
        <div className="Header">
            <h3>
                <a href="#">
                Game of Thrones DB
                </a>
            </h3>
            <ul>
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;