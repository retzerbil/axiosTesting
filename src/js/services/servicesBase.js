import axios from "axios";

//avoid repeating code
export const axiosGet = async(url) =>{
    const response = await axios.get(url);
    return response.data;
}