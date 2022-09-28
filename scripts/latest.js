 import { appendMainNews } from "../scripts/append.js";

// import { appendTrendingNews } from "./scripts/append.js";

const latestData = async() => {
  
    try{
     let main_container = document.getElementById("mainNews");

     let res = await fetch('https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in');
     let data = await res.json();
     let actualData = data.articles;
     console.log(actualData);
     appendMainNews(actualData,main_container)
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

