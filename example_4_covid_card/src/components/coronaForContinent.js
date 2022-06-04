import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_TOKEN, API_URL } from "../const";



const CoronaForContinent = () => {

    const [headers] = useState( [
        {
            title:"Continent",
            value : "continent",
        },
        {
            title:"Active Cases",
            value : "activeCases",
        },
        {
            title:"New Cases",
            value : "newCases",
        },
        {
            title:"Total Cases",
            value : "totalCases",
        },
        {
            title:"Total Deaths",
            value : "totalDeaths",
        },
        {
            title:"New Deaths",
            value : "newDeaths",
        },
        {
            title:"Total Recovered",
            value : "totalRecovered",
        },

    ])

    const [loading,setLoading] = useState( false )
    const [data,setData] = useState ( [] )

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${API_URL}continentData`,{
            headers:{
                authorization:API_TOKEN

            }
        })
        setLoading(false)
        setData(response.data.result)
    }
    
    useEffect ( () => {
        fetchData()   
    }, [])

    return (

        <div className="flex flex-col">
            <div className="inline-block min-w-full">
                <h1 className="text-2xl mb-4 font-bold text-gray-900">
                    Corona Table
                </h1>
                <div className="overflow-hidden shadow-md">
                    {loading ? <p> Loading... </p> : 
                    
                    <table className="min-w-full cursor-pointer     ">
                        <thead className="bg-red-800 ">
                            <tr className="border-b">
                                {headers.map( (item) => {
                                    return (
                                        <th key={item.title} className="py-3 px-6 text-x font-medium text-white uppercase text-left" >
                                            {item.title}
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody className="hover:bg-white">
                            {data.map( (item) => {
                                return(
                                    <tr key={item.continent} className="bg-gray-800 border-b hover:bg-red-800 hover:text-gray-900">
                                        {headers.map( (element) => {
                                            return (
                                                <td key={element.value} className="py-4 px-6 text-x font-medium text-white whitespace-nowrap" >
                                                    {item[element.value]}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </div>
    )
}

export default CoronaForContinent