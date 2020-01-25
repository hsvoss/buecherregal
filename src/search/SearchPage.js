import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../readinghall/Book";
import PropTypes from "prop-types";


const mergeSerchedBooksWithShelves = (response, currentLibrary) => {
    // omg js is lacking so much of collections
    // currentLibrary.map(myBook => response.filter)
    // response.filter(theirBook => theirBook.id);

    // burn js - burn it with fire!!
    response.map(theirBook => {
        currentLibrary.map(myBook => {
            if (theirBook.id === myBook.id) {
                theirBook.shelf = myBook.shelf
            }
            return theirBook;
        });
        return theirBook;
    });

    return response;
};


class SearchPage extends Component {
    state = {
        searchedBooks: [],
        query: '',
    };


    componentDidUpdate(prevProps, prevState, snapshot) {  //TODO: find a better way to catch all 3 Failure-Cases
        if (this.state.query === '' && this.state.query !== prevState.query) {
            this.setState({
                searchedBooks: [],
            })
        } else if (this.state.query !== prevState.query) {
            BooksAPI.search(this.state.query).then(response => {
                if (!response.error) {
                    this.setState({
                        searchedBooks: mergeSerchedBooksWithShelves(response, this.props.currentLibrary),
                    })
                } else {
                    this.setState({
                        searchedBooks: [],
                    })
                }

            }).catch(e => console.warn(e))
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className='close-search'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={event => this.setState({query: event.target.value.trim()})}
                               type="text"
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.map(book =>
                            <li key={book.id}>
                                <Book book={book} moveToShelf={this.props.moveToShelf}/>
                            </li>)}
                    </ol>
                </div>
            </div>
        );
    }

}

SearchPage.propTypes = {
    moveToShelf: PropTypes.func.isRequired,
    currentLibrary: PropTypes.array.isRequired
};

export default SearchPage;
