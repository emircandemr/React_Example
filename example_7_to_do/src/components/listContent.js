import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./listContent.css";
import ListContentFooter from "./listContentFooter";
import Listitem from "./Listitem";

const ListContent = () => {
    
    const {todoList,todoFilter} = useSelector( (state) => state.todos)
    const [list , setList ] = useState([])

    useEffect( () => {
        if(todoFilter==="all"){
            setList(todoList)
            return
        }
        setList(todoList.filter( (x) => x.complete))
    },[todoList,todoFilter])


    return(
        <div className="item-content-wrapper">
            <div className="content">
                {list.length<1 && <div className="text-gray-700 font-bold text-center py-2 text-lg "> Yapılacaklar Listesi Boş </div>}

                {list.map( (element) => {
                    return ( 
                        <Listitem key={element.id} item={element} className={element.complete ? "completed" : ""} />
                    )
                })}
            </div>
            <div>
                <ListContentFooter/>
            </div>
        </div>

    )
}

export default ListContent