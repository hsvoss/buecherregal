import React from "react";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";


const BookView = props => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${props.book.imageLinks.thumbnail ? props.book.imageLinks.thumbnail: ""})`
            }}/>
            <BookshelfChanger moveToShelf={(event) => props.moveToShelf(event.target.value, props.book)}/>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors ? props.book.authors[0] : "No Author"}</div>
    </div>
);

BookView.propTypes = {
    book: PropTypes.object.isRequired,
    moveToShelf: PropTypes.func.isRequired
};


export default BookView;
