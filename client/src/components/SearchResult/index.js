import React from "react"
import "./style.css" 



export default function SearchResult(props) {

    return <div key={props.id} id={props.id} className="result">
        <div className="top-half-div">
            <div className="author-title-div">
                <p>{props.title}</p>
                {/* {this.key=props.id} */}
        {/* @HACER format properly-
            if more than one author add & in the middle of each*/}
                <p>Written by:{props.authors}</p>
            </div>
            <div className="btn-div">
                <button><a href={props.infoLink}>View</a></button>
                <button onClick={() => props.handleSave(props.id)}>Save</button>
            </div>
        </div>
        <div className="bottom-half-div">
            <img className="idk" alt={props.title} src={props.imageLink}/>
            <div className="description-div">
                <p>{props.description}</p></div>
            </div>
    </div>
}
/*
key={movie.id} 
id={movie.id} 

xxxxxxxxxxxxxxxxxxxxxxxxxxx
title={movie.title} 
infoLink={movie.infoLink} 
authors={movie.authors} 
imageLink={movie.imageLink} 
description={movie.description} 
*/