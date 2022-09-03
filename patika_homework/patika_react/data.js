import axios from "axios";

const GetData = async (id) => {

    const { data: user }= await axios("https://jsonplaceholder.typicode.com/users/" + id);
    const { data: posts }= await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id);

    const lastData = [user,...posts];
    return lastData;
}

export default GetData;