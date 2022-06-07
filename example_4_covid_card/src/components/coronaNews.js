import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../const";
import CoronaNewsCard from "./coronaNewsCard";


const CoronaNews = () => {
    
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState( [])
    
    const fetchData = async () => {
        setLoading(true)

        const response = await axios.get(`${API_URL}coronaNews`,{
            headers:{
                authorization:API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result)
    }

    useEffect( () => {
        fetchData()
    },[])
    
    return (
        <div className="grid grid-cols-4 gap-6">
            {loading && <p>Loading ...</p>}
            
            {data.map( (item) => {
                return (
                    <CoronaNewsCard key={item.key} image={item.image} description={item.description} name={item.name} url={item.url} />
                )
            })}

        </div>
    )

}

export default CoronaNews