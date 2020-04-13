import React, { Component } from "react"
import "./style.css"
import SearchBox from "../../components/SearchBox"
import SearchResult from "../../components/SearchResult"
import { getBooks } from "../../util/api"
 
class Search extends Component {

    state = {
        bookResults: [],
        textValue: ""
    }

    updateValue = async e => {
        const value = await e.target.value
        // value !== "" ? this.setState({ textValue: value }) : this.setState({ textValue: this.state.textValue.substring(0, value.length)})
        this.setState({ textValue: value })
    }

    handleSearch = async () => {
        
        this.setState({ bookResults: await getBooks(this.state.textValue)})
    }

    // componentDidMount = async () => {
    //     this.setState({ textValue: "lord+of+the+flies"})
    //     await this.handleSearch()
    // }
    
    render = () => {
        
        return <>
        <SearchBox value={this.state.textValue} updateValue={this.updateValue} handleSearch={this.handleSearch} />
            <main>
                <div>
                {this.state.bookResults.length > 0 ? this.state.bookResults.map( book => <SearchResult key={book.id} id={book.id} title={book.title} authors={book.authors} description={book.description} imageLink={book.imageLink} infoLink={book.infoLink} />) : <h2>Search!</h2>}
                </div>
            </main>
        </>
    }
}

export default Search