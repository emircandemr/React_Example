import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../const";
import Card from "./card";

const CoronaForCountry = () => {
    
    const [data,setData] = useState( [] )
    const [queryText, setQueryText] = useState("")
    const [loading, setLoading] = useState(false)
        
    const fetchData = async () => {

        setLoading(true)
        const response = await axios.get(`${API_URL}countriesData?country=${queryText}`,{
            headers:{
                authorization:API_TOKEN
        }})
        setLoading(false)
        setData(response.data.result)
    }
    useEffect( () => {
         fetchData()                              
    },[queryText])
        
    return(
        <>
        <div className="mb-4 ">
            <input value={queryText} onChange={ (e) => {setQueryText(e.target.value)}} placeholder="Ara ..."
                       className="shadow appearance-none border rounded w-full py-2 px-3 mb-8 font-extrabold text-gray-700 focus:outline-none focus:shadow-gray-800" />
        </div>
        <div className="grid grid-cols-5 gap-6">
                {loading && <p>Loading ...</p>}
                {data.map((item) => {
                    return (
                        <Card key={item.country} country={item.country} totalDeaths={item.totalDeaths}
                              totalCase={item.totalCases} totalRecovered={item.totalRecovered}/>
                    )
                })}
            </div>
        </>
    )
}

export default CoronaForCountry