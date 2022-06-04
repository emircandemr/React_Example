import React from "react";
import banner2 from "../img/logo.png"
import PropTypes from "prop-types";


const Card = ({country,totalCase,totalRecovered,totalDeaths}) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg text-red-800 cursor-pointer hover:shadow-xl hover:scale-105
        hover:bg-gray-800 hover:text-white transition-all">
            <img className="w-full p-3" src={banner2} alt="Country" />

            <div className="p-5 hover:text-white">
                <div className="font-bold text-xl mb-2">
                    {country}
                </div>
                <p className="text-base">
                    Total Case : {totalCase}
                </p>
                <p className=" text-base">
                    Total Deaths : {totalDeaths}
                </p>
            </div>
            <div className="p-5">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-3 mb-2">
                    #{totalRecovered}
                </span>
            </div>
        </div>
    )
}

Card.propTypes = {
    country: PropTypes.string,
    totalCase: PropTypes.string,
    totalRecovered: PropTypes.string,
    totalDeaths: PropTypes.string,

}
Card.defaultProps = {
    country: "",
    totalCase: "",
    totalRecovered: "",
    totalDeaths: "",
}



export default Card