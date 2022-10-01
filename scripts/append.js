const appendMainNews = (data,container) => {
    
   container.innerHTML = null;

    data.forEach(function(el){

      let div = document.createElement("div");
      div.id="div_dream";
      
      let div3 = document.createElement("div");
      div3.id="div3_dream"

      let image = document.createElement("img");
      image.src=el.urlToImage;
      image.id="mainImage_dream"
      
      let div2 = document.createElement("div");
      div2.id="div2_dream"

      let title = document.createElement("h3");
      title.innerText = el.title;
      
      let description = document.createElement("p");
      description.innerText = el.description;
      
      let posted_date = document.createElement("p");
      posted_date.innerText = el.source.name+" | "+el.publishedAt;
    
      div2.append(title,posted_date,description);
      div3.append(image);
      div.append(div3,div2);
      container.append(div);
    })
};

export {appendMainNews};


const appendTrendingNews = (data,container) => {
    
     container.innerHTML = null;

     let trendbtn_dream = document.createElement("button");
     trendbtn_dream.id="trendDiv_dream"
     trendbtn_dream.innerText = "TRENDING";
     container.append(trendbtn_dream);


     data.forEach(function(el){
 
       let chbox = document.createElement("div");
       chbox.id="chbox_dream";
      
       let img = document.createElement("img");
       img.src=el.urlToImage;
 
       let heading = document.createElement("h5");
       heading.innerText = el.title;
       heading.id="title_dream";
      
      
       chbox.append(img,heading);
       container.append(chbox);
     })
 };

 export {appendTrendingNews};

 const appendAddNews = (data,container) => {
    
  container.innerHTML = null;

  data.forEach(function(el){

    let smbox = document.createElement("div");
    smbox.id="smbox_dream";
    smbox.onclick=()=>{
        localStorage.setItem("detailed-news",JSON.stringify(el));
        window.location.href="detailed-news.html";
      };

    let img = document.createElement("img");
    img.src=el.urlToImage;

    let text = document.createElement("h4");
    text.innerText = el.title;
    text.id="text-title_dream"
   
   
    smbox.append(img,text);
    container.append(smbox);
  })
};

export {appendAddNews};


