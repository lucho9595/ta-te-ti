import React from "react";
import "./Square.css";
import classNames from "classnames";

const Square = ({ value, onClick, turn, winner }) => {

    const handleClick = () => {
        (turn !== null && value == null) && onClick();
    }

    const squareClass = classNames({
        square: true,
        [`square--${value}`]: value !== null,
        winner: winner
    })

    return (
        <div className={squareClass} onClick={() => handleClick()}>

        </div>
    )
};

export default Square;