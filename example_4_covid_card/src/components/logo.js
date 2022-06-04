import React from "react";
import PropTypes from "prop-types"

const Logo = ({logo,title}) => {
    return(

        <div className="flex items-center">
            <img src={logo}  alt={title} className="mr-3 h-20"  />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                {title}
            </span>
        </div>
    )

}

Logo.propTypes = {
    title:PropTypes.string,
    logo: PropTypes.string,
}

Logo.defaultProps = {
    title:"Corona App",
    logo : "https://static.wixstatic.com/media/f30ad5_13b0e1ef82d947b8bd58be01344d868a~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/f30ad5_13b0e1ef82d947b8bd58be01344d868a~mv2.jpg"
}

export default Logo

