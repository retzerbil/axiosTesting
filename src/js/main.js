import axios from 'axios';
import { movieList } from './services/movieService';
const apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=" + import.meta.env.VITE_MY_API_KEY + "&s=matrix"
//only worked with vite..

axios.get(apiURL)
  .then((response) => {
    response.data;
    console.log(response.data.Search);
  });

//axios async await;
window.addEventListener("load", async () => {
  const list =  await movieList(apiURL);
  console.log(list);
});
