import {appendAddNews, appendMainNews, appendTrendingNews } from "../scripts/append.js";

const worldData = async() => {
  
    try{
     let main_container_dream = document.getElementById("mainNews_dream");

     let res = await fetch('https://newsapi.org/v2/everything?q=world&apiKey=2f3bb466d7844fbc9cc8353140c31657');
     let data = await res.json();
     let actualData = data.articles;
     console.log("maindata:",actualData);
     appendMainNews(actualData,main_container_dream)
    }catch(err){
        console.log(err);
    }
}
worldData();

const trendingData = async() => {
  
    try{
     let left_side_container = document.getElementById("left-side-div_dream");
     
     let res = await fetch('https://newsapi.org/v2/everything?q=trending&apiKey=2f3bb466d7844fbc9cc8353140c31657');
     let data = await res.json();
     let actualData = data.articles
     console.log("trending:",actualData);
     appendTrendingNews(actualData,left_side_container)
    }catch(err){
        console.log(err);
    }
};
  trendingData();

 const addNews = async() => {
        try{
            let right_side_container = document.getElementById("right-side-div_dream");
            
            let res = await fetch('https://newsapi.org/v2/everything?q=add&apiKey=2f3bb466d7844fbc9cc8353140c31657');
            let data = await res.json();
            let actualData = data.articles
            console.log("add-data:",actualData);
            appendAddNews(actualData,right_side_container)
           }catch(err){
               console.log(err);
           }
        };
       addNews();


