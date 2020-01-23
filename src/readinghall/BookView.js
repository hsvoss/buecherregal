import React from "react";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";

const BookView = props => (
    <div className="book">
        {console.log(props.book)}
        <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${props.book.imageLinks.thumbnail})`
            }}/>
            <BookshelfChanger moveToShelf={(event) => console.log(event.target.value)}/>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors[0]}</div>
    </div>
);

BookView.propTypes = {
    book: PropTypes.object,
};


export default BookView;
