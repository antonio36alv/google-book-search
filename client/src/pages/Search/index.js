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

<<<<<<< HEAD
    handleSave = async id => {
        console.log(id)
        
        saveBook(this.state.bookResults.filter(e => (e.id === id)))

        // 
        // const { items } = data.data
        
        //     for (let item of items) bookResults.push({
            //         id: item.id,
            //         title: item.volumeInfo.title,
            //         authors: item.volumeInfo.authors,
            //         description: item.volumeInfo.description,
            //         imageLink: item.volumeInfo.imageLinks.thumbnail,
            //         infoLink: item.volumeInfo.infoLink
            //     })

    }

    handleSearch = async () => {
        
        getBooks(this.state.textValue).then(data => this.setState({bookResults: data })).catch(err => console.log(err))
    }
    // handleSearch = async () => {
        
    //     this.setState({ bookResults: await getBooks(this.state.textValue)})
    // }
=======
    handleSearch = async () => {
        
        this.setState({ bookResults: await getBooks(this.state.textValue)})
    }
>>>>>>> parent of 5ab87a0... properly using callback fucntions for axios call

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