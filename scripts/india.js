import { appendMainNews } from "./scripts/append.js";

import { appendTrendingNews } from "./scripts/append.js";

const latestData = async() => {
  
    try{
     let main_container = document.getElementById("mainNews");

     let res = await fetch('');
     let data = await res.json();
     console.log(data);
     appendMainNews(data,main_container)
    }catch(err){
        console.log(err);
    }
}
latestData();

const trendingData = async() => {
  
    try{
     let main_container = document.getElementById("left-side-div");
     
     let res = await fetch('');
     let data = await res.json();
     console.log(data);
     appendTrendingNews(data,main_container)
    }catch(err){
        console.log(err);
    }
};
  trendingData();