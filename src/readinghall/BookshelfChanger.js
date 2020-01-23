import React from "react";
import PropTypes from "prop-types";

const BookshelfChanger = ({moveToShelf}) =>
    <div className="book-shelf-changer">
        <select onChange={moveToShelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>;


BookshelfChanger.propTypes = {
    moveToShelf: PropTypes.func.isRequired,
};

export default BookshelfChanger;
