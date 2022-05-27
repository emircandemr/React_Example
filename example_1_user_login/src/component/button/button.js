import React from "react";
import PropTypes from "prop-types";
import "./button.css"

const Button = ({text,onClick}) => {

    return (
        <button className="custom-button" onClick={onClick}>
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text : PropTypes.string.isRequired,
}

Button.defaultProps = {
    text : "Click Me",

}



export default Button