import axios from "axios";

export const axiosGet = async(url) =>{
    const response = await axios.get(url);
    return response.data;
}