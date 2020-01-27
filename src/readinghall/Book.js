import React from "react";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";

const findBackGroundImageUrl = book => {
    if (book.imageLinks && book.imageLinks.thumbnail) {
        return (book.imageLinks.thumbnail);
    } else {
        return "";
    }
};

const Book = props => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                backgroundImage: `url(${findBackGroundImageUrl(props.book)})`
            }}/>
            <BookshelfChanger moveToShelf={(event) => props.moveToShelf(event.target.value, props.book)}
                              currentShelf={props.book.shelf || 'none'}/>
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
