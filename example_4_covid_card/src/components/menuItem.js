import React from "react";
import PropTypes from "prop-types"

const MenuItem = ({item,active,onClick}) => {
    return (

    <li>
        <a onClick={ () => {
            onClick(item)
        }} className={`block cursor-pointer border-0 py-2 px-4 ${active ? "text-red-700" : "text-white"} hover:text-red-700`}>
            {item}
        </a>
    </li>

    )
}

MenuItem.propTypes = {
    item:PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
  
}

MenuItem.defaultProps = {
    item:"Default",
    active: false,
    onClick:() => null
}


export default MenuItem