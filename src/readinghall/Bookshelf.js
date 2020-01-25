import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import { prettyShelfNames } from "../App";


const Bookshelf = props => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{prettyShelfNames[props.shelfKey]}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book =>
                        <li key={book.id}>
                            <Book book={book} moveToShelf={props.moveToShelf} />
                        </li>)}
                </ol>
            </div>

        </div>

    )
};

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfKey: PropTypes.string.isRequired,
    moveToShelf: PropTypes.func.isRequired
};

export default Bookshelf;
