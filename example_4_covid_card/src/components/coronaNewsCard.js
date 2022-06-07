import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CoronaNewsCard = ({image,name,description,url}) => {
    return (
        <div className="max-w-xl rounded-xl h-auto mb-2 overflow-hidden border-2 border-gray-400 shadow-lg text-red-800 cursor-pointer hover:shadow-xl hover:scale-105
        hover:bg-gray-800 hover:text-white transition-all">
            <img className="w-full p-3 rounded-xl" src={image} alt="Country" />

            <div className="py-2 px-4 hover:text-white">
                <div className="font-bold text-xl text-center mb-2">
                   {name}
                </div>
                <p className="py-2 px-2 text-lg text-justify">
                     {description}
                </p>
                
            </div>
            <div className="py-5 flex justify-center items-center">
                <button className="rounded-full bg-red-800 text-white p-3 "> 
                    <a href={url}  >
                        Habere Git <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </a>
                </button>
            </div>
        </div>
    )
}

CoronaNewsCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,

}
CoronaNewsCard.defaultProps = {
    image:"https://cdn1.ntv.com.tr/gorsel/ZDUV4KuKDEiIlDHBlsaJPg.jpg?width=600&mode=crop&scale=both",
    name: "Korona Haberleri",
    description: "Korona Haberi Açıklama",
    url:"#",

}



export default CoronaNewsCard