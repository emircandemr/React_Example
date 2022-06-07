import React, { useState } from "react";
import Logo from "./logo";
import banner from "../img/logo.png"
import MenuItem from "./menuItem";
import PropTypes from "prop-types";


const Header = ({activeTitle,onMenuChange}) => {

    const [_activeTitle,setActiveTitle] = useState(activeTitle)

    const [menuItems] = useState(
        [
            {
            item:"Ülkelere Göre Corona Değerleri",
            value:1
            },
            {
                item:"Kayda Geçmiş Tüm Korona Değerleri",
                value:2
            },
            {
                item:"Kıtalara Göre Korona Değerleri",
                value:3
            },            {
                item:"Korona Haberleri",
                value:4
            }
    ]
    )

    return(
        <nav className="bg-gray-800 border-gray-200 px-2  py-2">
            <div className="container flex flex-wrap  justify-around items-center mx-auto">
                <div>
                <Logo logo={banner} />
                </div>
                <div className="w-auto block text-xl">
                    <ul className="flex flex-row font-semibold">
                        {menuItems.map ( (element) => {
                            return(
                                <MenuItem key={element.item} active={element.item === _activeTitle} onClick={ (item) => {
                                    setActiveTitle(item)
                                    onMenuChange(element.value)
                                }} item={element.item} />
                            )
                        } )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    activeTitle:PropTypes.string,
    onMenuChange: PropTypes.func,
  
}

Header.defaultProps = {
    activeTitle:"Ülkelere Göre Corona Değerleri",
    onMenuChange:() => null,
}

export default Header