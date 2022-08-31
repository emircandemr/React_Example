import axios from "axios";

const Request = axios.create({

    baseURL : 'http://'+process.env.REACT_APP_API_URL

})

export {Request}