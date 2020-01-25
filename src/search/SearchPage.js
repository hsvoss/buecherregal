import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import BookView from "../readinghall/BookView";

{/*               NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
}

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
                        searchedBooks: response,
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
                        <input onChange={event => this.setState({ query: event.target.value.trim() })}
                            type="text"
                            placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.map(book =>
                            <li key={book.id}>
                                <BookView book={book} />
                            </li>)}
                    </ol>
                </div>
            </div>
        );
    }

}

export default SearchPage;
