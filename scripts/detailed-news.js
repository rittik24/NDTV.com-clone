import {appendAddNews, appendTrendingNews } from "../scripts/append.js";

let getDetailedData = JSON.parse(localStorage.getItem("detailed-news"));

let add_image = document.createElement("img");
add_image.src="https://tpc.googlesyndication.com/daca_images/simgad/9826269602226873884"

let add_div=document.getElementById("add-div_dream");
add_div.append(add_image);

const appendDetailedNews = (data) => {
    let container_head = document.getElementById("child-box_dream");
    container_head.innerHTML=null;

    let container_main = document.getElementById("mainNews_dream");
    container_main.innerHTML=null;

        let image = document.createElement("img");
        image.src=data.urlToImage;

        let title = document.createElement("h1");
        title.innerText=data.title;

        let description = document.createElement("p");
        description.innerText = data.description;
        description.id="description_dream"

        let content = document.createElement("p");
        content.id="content_dream"
        content.innerText = `${data.description} 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus exercitationem pariatur deserunt officia, vitae minus totam dolor quam fugiat praesentium, dolore debitis rem quisquam eligendi temporibus error possimus, aspernatur sequi!
        Exercitationem laborum dolor temporibus iure architecto aperiam commodi earum nisi accusantium nam minus, odit voluptas rem explicabo eligendi quam dolorem ipsam cum. Ratione recusandae, numquam quas iste non vel voluptas?
        Nesciunt odio totam, quis, ad necessitatibus ut similique impedit aut autem alias dignissimos vitae officiis magni fuga magnam quaerat assumenda commodi. Expedita iste reprehenderit possimus assumenda pariatur magni est eveniet.
        Placeat itaque deserunt autem nisi ad ratione unde cumque, ut animi optio assumenda modi adipisci molestias omnis veniam aspernatur debitis saepe deleniti consequatur nemo laboriosam minus? Facilis qui ipsum facere!
        Facere ducimus numquam cumque sint iure, corporis delectus adipisci velit ea hic omnis praesentium consequuntur! Itaque ipsa maiores nam pariatur officia, soluta provident sunt saepe quod deleniti ut. Labore, facilis!
        Repellat officiis, iste id eum sit illum consectetur sint cupiditate, perferendis nisi similique incidunt quia aliquid atque dolores commodi eveniet sapiente ullam, vero neque? Commodi porro distinctio doloribus ratione autem?
        Explicabo et, ipsam a laboriosam eveniet, aliquid repellat nobis exercitationem molestias provident voluptatibus est! Dignissimos aperiam exercitationem, suscipit perspiciatis quam provident mollitia quo illo sequi blanditiis a possimus, nobis velit.
        Laborum, reiciendis quidem recusandae architecto earum blanditiis rem magni est. Illo itaque explicabo placeat recusandae, at iste! Atque ea aliquam quasi sunt fugit adipisci, ipsa illo repudiandae animi odit eligendi!
        Praesentium, id! Facilis, omnis cumque ea iusto expedita pariatur, illum deserunt id ab, labore sed ullam aspernatur laboriosam. Voluptate officiis blanditiis saepe illum iure eum, quasi quidem expedita ad maiores!
        Dolorum odit esse architecto vitae? Perferendis impedit neque et atque itaque nesciunt iste fugit quidem reprehenderit, at consectetur nobis explicabo facere ab maxime a dicta autem. Ullam aliquam modi nam.
        Architecto magnam itaque molestiae praesentium perferendis blanditiis exercitationem quam aperiam, similique, velit distinctio voluptatum quo voluptatibus sapiente consectetur fuga quod magni harum reiciendis. Tempora sapiente recusandae, in ipsam accusamus eius!
        Reprehenderit possimus, facilis velit earum quia vero nam corrupti dolores nesciunt necessitatibus? Nihil sapiente temporibus quod cumque quam voluptatum cupiditate libero magnam neque amet saepe corporis ea voluptatibus, nam culpa.
        Sequi veniam pariatur dolorum necessitatibus, consequuntur maiores repellendus soluta molestiae, adipisci nulla natus nostrum assumenda ullam praesentium. Explicabo, aliquam accusantium. Dignissimos voluptatem, suscipit error illo hic impedit? Est, ab maxime!
        Officia, deserunt. Laborum facere dicta ratione veniam asperiores odio ut voluptatibus doloribus rem! Veritatis, neque! Nemo distinctio ex sequi! Iure reiciendis eos, eveniet reprehenderit laboriosam quas rerum? Odio, esse at!
        Nesciunt blanditiis quaerat iusto omnis doloribus delectus alias maiores nostrum vel, pariatur labore dicta. Modi animi at, culpa quia, doloremque quisquam in optio corporis iusto, alias ab nulla id iure!`

        let date = document.createElement("p");
        date.innerText = data.source.name+"  |  "+data.publishedAt;
        date.id="date_dream"

        let smallHeading = document.createElement("p");
        smallHeading.innerText = "Home"+"  >  "+data.title;
        smallHeading.id="smallHeading_dream";

        //console.log("content:",data.content)

        container_main.append(image,content);
        container_head.append(smallHeading,title,description,date);

    };

appendDetailedNews(getDetailedData);


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

