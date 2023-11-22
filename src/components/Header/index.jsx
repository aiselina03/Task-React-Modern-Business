import "./style.css"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div>
        <div className="header">
            <div className="headerName">
                <h4>Start Bootstrap</h4>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Blog<FontAwesomeIcon icon={faSortDown} className="icon"/></a></li>
                    <li><a href="">Portfolio<FontAwesomeIcon icon={faSortDown} className="icon"/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header