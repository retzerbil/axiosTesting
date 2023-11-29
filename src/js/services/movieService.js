import { axiosGet } from "./servicesBase";

export const movieList = async (urlInput)=>{
    const url = urlInput;
    const data = await axiosGet(url);
    return data.Search;
}