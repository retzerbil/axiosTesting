import axios from 'axios';
//only worked with vite..
axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=6424148a&s=matrix")
.then((response)=>{
response.data;
console.log(response);
});

//axios async await;

window.addEventListener("load", async () =>{
    const response2 = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=6424148a&s=matrix");
response2.data;

console.log(response2);
});
