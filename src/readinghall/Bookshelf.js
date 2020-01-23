import React from "react";
import BookView from "./BookView";
import PropTypes from "prop-types";


const Bookshelf = props => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfKey}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book =>
                        <li key={book.id}>
                            <BookView  book={book}/>
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
