import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../const";


const RecordedCorona = () => {
    
    const [loading,setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${API_URL}totalData`,{
            headers:{
                authorization:API_TOKEN

            }
        })
        setLoading(false)
        setData(response.data.result)
    }
    
    useEffect( () => { 
        fetchData()                              
    }, [])

    return (

        <div className="max-w-sm p-10 rounded-lg h-96 flex justify-center items-center bg-gray-900 overflow-hidden shadow-lg text-white cursor-pointer hover:shadow-xl hover:scale-105
        hover:bg-red-800  transition-all">
            <div className="w-full h-full flex flex-col items-center justify-center">

                 {loading ? <p> Loading ... </p> : 
                 <>
                    <h1 className="text-xl mb-2"> Total Case : {data?.totalCases} </h1>
                    <h1 className="text-xl mb-2"> Total Deaths : {data?.totalDeaths} </h1>
                    <h1 className="text-xl"> Total Recovered : {data?.totalRecovered} </h1>
                 </>}

            </div>


        </div>
    )
}

export default RecordedCorona