import React from "react";
import BookView from "./BookView";
import PropTypes from "prop-types";

let lookupTable ={};
lookupTable.currentlyReading="Currently Reading";
lookupTable.wantToRead="Want to Read";
lookupTable.read="Already Read";
lookupTable.none="No Bookshelf";


const Bookshelf = props => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{lookupTable[props.shelfKey]}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book =>
                        <li key={book.id}>
                            <BookView book={book}/>
                        </li>)}
                </ol>
            </div>
        </div>
    )
};

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfKey: PropTypes.string.isRequired
};

export default Bookshelf;
