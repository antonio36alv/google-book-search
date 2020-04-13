import React from "react"
import "./style.css" 
 
export default function SearchBox(props) {

return <div id="search-box">
            <h3>Book Search</h3>
            <div>
            <input type="text" value={props.textValue} onChange={props.updateValue}></input>
            <button onClick={props.handleSearch}>Search</button>
            </div>
        </div>
}