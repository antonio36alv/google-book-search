import React, { Component } from "react"
import "./style.css"
import SearchResult from "../../components/SearchResult"
 
class SearchPage extends Component {

    state = {
        movieResults: [{}]
    }

    render = () => 
        <main>
                    {this.state.movieResults.length > 0 ? this.state.movieResults.map( movie => <SearchResult title={movie.title} authors={movie.authors} description={movie.description} imageLink={movie.imageLink} infoLink={movie.infoLink} />) : <h2>Search!</h2>}
                </main>
    
}

export default SearchPage