import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from "./SearchPage";
import Header from "./readinghall/Header";
import {Link, Route} from "react-router-dom";
import Bookshelf from "./readinghall/Bookshelf";

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    /**
     * Allows to group an Array by a top-level-property
     * @param array Array to be grouped
     * @param property array.property
     * @returns {{}}
     */
    groupBy = (array, property) => { // Can't believe that there is only filter, map and reduce in the streaming-API...
        let hash = {};
        for (let i = 0; i < array.length; i++) {
            if (!hash[array[i][property]]) hash[array[i][property]] = [];
            hash[array[i][property]].push(array[i]);
        }
        return hash;
    };

    componentDidMount() {
        BooksAPI.getAll().then(value => this.setState({
            books: value,
        }))
    }

    render() {

        return (
            <div className="app">
                <Route exact path='/' render={() =>
                    <>
                        <Header/>
                        <div className="list-books-content">
                            {Object.entries(this.groupBy(this.state.books, 'shelf'))
                                .map((value) => <Bookshelf key={value[0]} shelfKey={value[0]} books={value[1]}/> )}
                        </div>
                        <Link to='/search' className='open-search'>Add a book</Link>
                    </>
                }/>
                <Route path='/search' render={() => <SearchPage/>}/>
            </div>
        )
    }
}

export default BooksApp
