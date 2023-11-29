import axios from 'axios';
//only worked with vite..
axios.get("http://www.omdbapi.com/?i=tt3896198&apikey="+import.meta.env.VITE_MY_API_KEY+"&s=matrix")
.then((response)=>{
response.data;
console.log(response);
});

//axios async await;

window.addEventListener("load", async () =>{
    const response2 = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey="+import.meta.env.VITE_MY_API_KEY+"&s=matrix");
response2.data;

console.log(response2);
});
