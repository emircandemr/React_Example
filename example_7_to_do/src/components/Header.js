import React from "react";
import "./Header.css"

const Header = (props) => {
    return (

        <div className="bg-image">
            <div className="bg-content">
                <div className="header-title">TODOS</div>
                {props.children}
            </div>
        </div>

    )
}

export default Header