import React from "react";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";


const Book = props => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${(props.book.imageLinks && props.book.imageLinks.thumbnail) ? props.book.imageLinks.thumbnail: ""})`
            }}/>
            <BookshelfChanger moveToShelf={(event) => props.moveToShelf(event.target.value, props.book)} currentShelf={props.book.shelf|| 'none'}/>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors ? props.book.authors[0] : "No Author"}</div>
    </div>
);

Book.propTypes = {
    book: PropTypes.object.isRequired,
    moveToShelf: PropTypes.func.isRequired
};


export default Book;
