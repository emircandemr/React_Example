import React from "react";
import PropTypes from "prop-types";
import "./input.css"

const Input = ({type, placeholder, value, onChange}) => {

    return (
        <input className = "custom-input" value = {value} placeholder = {placeholder} type={type} onChange = {onChange} />
    )


}

Input.propTypes = {
    type:PropTypes.string,
    value : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    onChange : PropTypes.func.isRequired,
}

Input.defaultProps = {
    placeholder: "Değer Giriniz...",
    type:"text"
}

export default Input