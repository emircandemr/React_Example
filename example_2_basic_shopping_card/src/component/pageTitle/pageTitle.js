import React from "react";
import "./pageTitle.css";


const PageTitle = ({title}) =>{
    return (
        <div className="pageTitle">
            <h1 className="Title"> {title}</h1>
        </div>
    )
}

export default PageTitle