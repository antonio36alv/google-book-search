import React from "react"
import { HashRouter, Link } from "react-router-dom"
import "./style.css" 
 
export default function NavBar() {
 
 return <nav>
            <ul>
                <HashRouter basename="/">
                <Link to="/search"><li>Search</li></Link>
                <Link to="/saved"><li>Saved</li></Link>
                </HashRouter>
            </ul>
        </nav>
}