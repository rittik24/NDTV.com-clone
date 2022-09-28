const appendMainNews = (data,container) => {
    
   container.innerHTML = null;

    data.forEach(function(el){

      let div = document.createElement("div");
      div.id="div";

      let image = document.createElement("img");
      image.src=el.urlToImage;
      image.id="mainImg";
      
      let div2 = document.createElement("div");
      div2.id="div2"

      let title = document.createElement("h3");
      title.innerText = el.title;
      
      let description = document.createElement("p");
      description.innerText = el.description;
      
      let posted_date = document.createElement("p");
      posted_date.innerText = el.source.name+" | "+el.publishedAt;

      div2.append(title,posted_date,description);
      div.append(image,div2);
      container.append(div);
    })
};

export {appendMainNews};


const appendTrendingNews = (data,container) => {
    
     container.innerHTML = null;
 
     data.forEach(function(el){
 
       let div = document.createElement("div");
       div.id="div";
 
       let image = document.createElement("img");
       
 
       let title = document.createElement("h3");

 
 
       div.append(image,title);
       container.append(div);
     })
 };

 export {appendTrendingNews};
