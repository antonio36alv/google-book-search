import React, { Component } from "react"
import "./style.css"
import SearchBox from "../../components/SearchBox"
import SearchResult from "../../components/SearchResult"
import { getBooks, saveBook } from "../../util/api"
 
class Search extends Component {

    state = {
        bookResults: [],
        textValue: ""
    }

    updateValue = async e => {
        
        const value = await e.target.value
        this.setState({ textValue: value })
    }

    handleSave = async id => {
        console.log(id)
        //save the book
        saveBook(this.state.bookResults.filter(e => (e.id === id)))

    }

    handleSearch = async () => {
        let jawn = []

        await getBooks(this.state.textValue).then(data => jawn = data).catch(err => console.log(err))

        this.setState({ bookResults: jawn})

    }
    
    render = () => {
        
        return <>
        <SearchBox value={this.state.textValue} updateValue={this.updateValue} handleSearch={this.handleSearch} />
            <main>
                <div>
                {this.state.bookResults.length > 0 ? this.state.bookResults.map( book => <SearchResult key={book.id} id={book.id} title={book.title} authors={book.authors} description={book.description} imageLink={book.imageLink} infoLink={book.infoLink} handleSave={this.handleSave}/>) : <h2>Search!</h2>}
                </div>
            </main>
        </>
    }
}

export default Search