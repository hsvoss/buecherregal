import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from "./search/SearchPage";
import Header from "./readinghall/Header";
import {Link, Route} from "react-router-dom";
import Bookshelf from "./readinghall/Bookshelf";


export const prettyShelfNames = {};
prettyShelfNames.currentlyReading = "Currently Reading";
prettyShelfNames.wantToRead = "Want to Read";
prettyShelfNames.read = "Already Read";
prettyShelfNames.none = "No Bookshelf";

class BooksApp extends React.Component {
    state = {
        books: [],
    };


    componentDidMount() {
        BooksAPI.getAll().then(response => this.setState({
            books: response,
        }))
    }

    moveToShelf = (shelfKey, book) => {
        console.log("shelfKey", shelfKey)
        console.log("book", book)
        BooksAPI.update(book, shelfKey).then(response => console.log("response", response))

        this.setState(currentState => {
            book.shelf = shelfKey
            return ({
                    books: currentState.books.filter(book => book.shelf !== 'none'),
                }
            )
        })

    };

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() =>
                    <>
                        <Header/>
                        <div className="list-books-content">
                            {Object.keys(prettyShelfNames)
                                .map(shelfKey => ({
                                    shelfKey: shelfKey,
                                    books: this.state.books.filter(books => books.shelf === shelfKey)
                                }))
                                .map(booksWrapper => booksWrapper.books.length > 0 &&
                                    <Bookshelf key={booksWrapper.shelfKey} shelfKey={booksWrapper.shelfKey}
                                               books={booksWrapper.books} moveToShelf={this.moveToShelf}/>)}
                        </div>
                        <Link to='/search' className='open-search'>Add a book</Link>
                    </>
                }/>
                <Route path='/search' render={() => <SearchPage currentLibrary={this.state.books} moveToShelf={this.moveToShelf}/>}/>
            </div>
        )
    }
}

export default BooksApp
