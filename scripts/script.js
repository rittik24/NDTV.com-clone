
let country= "in"
let category= "business"
let sport= "sport"
let apiKey =  "43a623f647aa404c955c4ff8d02657ed" //"c1eccc14457e4453a138b5f7e6426ae5"
let url_country = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
let url_category = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`
let url_sports= `https://newsapi.org/v2/top-headlines?category=${sport}&apiKey=${apiKey}`
let articles;
let getCountryNews= async (url)=>{
    let res= await fetch(url)
    let data= await res.json()
    articles= data.articles
    console.log(articles)
    part_1_left_breaking_big(articles)
     part_1_left_breaking_mini(articles)
     container_workflow_mumbai(articles)
    //  top_sliding_news(articles)
     left_top(articles)
     explain_left_left(articles)
     explain_left_right(articles)
     again_slide(articles)
     
     topPics_News(articles)
}
let getCategoryNews= async (url)=>{
    let res= await fetch(url)
    let data= await res.json()
    articles= data.articles
    part_1_right_breaking_mini(articles)
    topPics_News(articles)
    buttom_right(articles)
    business_left_right(articles)
    business_left_left(articles)
    
}

let getSportsNew= async(url)=>{
    let res= await fetch(url)
    let data= await res.json()
    articles= data.articles
    sport_left_left(articles)
     sport_left_right(articles)

   
}
 getCountryNews(url_country)
getCategoryNews(url_category)
getSportsNew(url_sports)


let part_1_left_breaking_big= (data)=>{
    let random = Math.floor(Math.random()*20+1)
    let div = document.createElement("div")
    let img= document.createElement("img")
    img.src= data[random].urlToImage
    div.append(img)

    let h1 =document.createElement("h1")
    h1.innerText= data[random].title
    let h3= document.createElement("h3")
    h3.innerText =data[random].author
    let h5= document.createElement("h5")
    h5.innerText =data[random].description

document.getElementById("part_1_left_breaking_big").append(div,h1,h3,h5)


}

let part_1_left_breaking_mini= (data)=>{
    let random = Math.floor(Math.random()*20+1)

    let divPhoto = document.createElement("div")
    divPhoto.setAttribute("class","miniNews")
    let divText = document.createElement("div")
    divText.setAttribute("class","divText")


    let img= document.createElement("img")
    img.src= data[random].urlToImage
    divPhoto.append(img)

    let divText_opinion = document.createElement("div")
    divText_opinion.setAttribute("class","divText_opinion")
    let opinion= document.createElement("h2")
    opinion.setAttribute("class","opinion")
    opinion.innerText= "opinion"
    let comment= document.createElement("h2")
    comment.innerText= "comment"

    divText_opinion.append(opinion,comment)

    let h3= document.createElement("h3")
    h3.setAttribute("class","h3")
    h3.innerText =data[random].title


    divText.append(divText_opinion,h3)

document.getElementById("part_1_left_breaking_mini").append(divPhoto,divText)

}


let part_1_right_breaking_mini= (data)=>{
    
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*20+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","miniNewsDiv")
        
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")
        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
        let divText_opinion = document.createElement("div")
        divText_opinion.setAttribute("class","divText_opinion")
        let opinion= document.createElement("h2")
        opinion.setAttribute("class","opinion")
        if(i==0){
            opinion.innerText= "OTHER STATES"
        }else if(i==1){
            opinion.innerText= "INTERVIEW KERALA"
        }else if(i==2){
            opinion.innerText= "PODCAST"
        }
        else if(i==3){
            opinion.innerText= "OTHER STATES"
        }
        
    
        divText_opinion.append(opinion)
    
        let h3= document.createElement("h3")
        h3.innerText =data[random].title
        h3.setAttribute("class","h3")
    
    
        divText.append(divText_opinion,h3)
        maindiv.append(divPhoto,divText)
       
    
    document.getElementById("part_1_right").append(maindiv)
    }
    
}

let container_workflow_mumbai= (data)=>{
    
    for(let i=0; i<2; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")
        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
        let divText_opinion = document.createElement("div")
        divText_opinion.setAttribute("class","divText_opinion")
        let opinion= document.createElement("h2")
        opinion.setAttribute("class","opinion")
        if(i==0){
            opinion.innerText= "OTHER STATES"
        }else if(i==1){
            let state=["MUMBAI","WEST BENAGL","HARIYANA","DELHI","GUJRAT","UTTAR PRADESH","TELENGANA","KERAELA","BIHAR","PUNJAB","JUMMU & KASHMIR","TAMILNADU"]
            opinion.innerText= state[ Math.floor(Math.random()*12+1)]
        }
        
        divText_opinion.append(opinion)
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(divText_opinion,h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("container_workflow_mumbai").append(maindiv)
    }
    
}
let addArray=["https://tpc.googlesyndication.com/simgad/4207933630084336652","https://tpc.googlesyndication.com/simgad/12340129004741262474","https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220817/Rohit-Scheme__300x250_30_73070565054778339.jpg","https://frontline.thehindu.com/theme/images/fl-online/fllogo.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Zc6ixTELEsJ13NIKY2V2kJZDv02rM66zaw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zstIOfciiXh22NWimgs1RRu3WjHH6pzFMQ&usqp=CAU"]

let workflow_part_2=()=>{
    for(let i=0; i<addArray.length; i++){
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","addDiv")
        let img= document.createElement("img")
        img.setAttribute("class","addImage")
        img.src= addArray[i]
        divPhoto.append(img)
    document.getElementById("workflow_part_2").append(divPhoto)
    }

}
workflow_part_2()

let top_sliding_news=(data)=>{
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","top_sliding_news_maindiv")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","top_sliding_news_DivPhoto")

        let divText = document.createElement("div")
        divText.setAttribute("class","top_sliding_news_divText")
    
    
        let img= document.createElement("img")
        img.setAttribute("class","top_sliding_news_Image")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    

        let opinion= document.createElement("h3")
        opinion.setAttribute("class","top_sliding_news_opinion")
        opinion.innerText= data[random].title

        let h5= document.createElement("h5")
        h5.setAttribute("class","h5")
        h5.setAttribute("class","top_sliding_news_h5")
        h5.innerText= data[random].author

        
        divText.append(opinion,h5)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("top_sliding_news").append(maindiv)
    }
}


let topPics_News=(data)=>{
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","top_sliding_news_maindiv")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","top_sliding_news_DivPhoto")

        let divText = document.createElement("div")
        divText.setAttribute("class","top_sliding_news_divText")
    
    
        let img= document.createElement("img")
        img.setAttribute("class","top_sliding_news_Image")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    

        let opinion= document.createElement("h3")
        opinion.setAttribute("class","top_sliding_news_opinion")
        opinion.innerText= data[random].title

        let h5= document.createElement("h5")
        h5.setAttribute("class","h5")
        h5.setAttribute("class","top_sliding_news_h5")
        h5.innerText= data[random].author

        
        divText.append(opinion,h5)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("topPics_News").append(maindiv)
    }
}


let left_top=(data)=>{
    for(let i=0; i<1; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")
        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
        let divText_opinion = document.createElement("div")
        divText_opinion.setAttribute("class","divText_opinion")
        let opinion= document.createElement("h2")
        opinion.setAttribute("class","opinion")
        opinion.innerText= "LEAD"
        
        
        divText_opinion.append(opinion)
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(divText_opinion,h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("left_top").append(maindiv)
    }
}


let buttom_right=(data)=>{
    for(let i=0; i<3; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")
        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
        let divText_opinion = document.createElement("div")
        divText_opinion.setAttribute("class","divText_opinion")
        let opinion= document.createElement("h2")
        opinion.setAttribute("class","opinion")
        opinion.innerText= "COMMENT"
        
        
        divText_opinion.append(opinion)
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(divText_opinion,h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("buttom_right").append(maindiv)
    }
}


let explain_left_left=(data)=>{
    let random = Math.floor(Math.random()*20+1)
    let div = document.createElement("div")
    let img= document.createElement("img")
    img.src= data[random].urlToImage
    div.append(img)

    let h1 =document.createElement("h1")
    h1.innerText= data[random].title
    let h3= document.createElement("h3")
    h3.innerText =data[random].author
    let h5= document.createElement("h5")
    h5.innerText =data[random].description

document.getElementById("explain_left_left").append(div,h1,h3,h5)
}


let explain_left_right=(data)=>{
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")

        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("explain_left_right").append(maindiv)
    }
}

let sport_left_left=(data)=>{
    let random = Math.floor(Math.random()*20+1)
    let div = document.createElement("div")
    let img= document.createElement("img")
    img.src= data[random].urlToImage
    div.append(img)

    let h1 =document.createElement("h1")
    h1.innerText= data[random].title
    let h3= document.createElement("h3")
    h3.innerText =data[random].author
    let h5= document.createElement("h5")
    h5.innerText =data[random].description

document.getElementById("sport_left_left").append(div,h1,h3,h5)
}


let sport_left_right=(data)=>{
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")

        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("sport_left_right").append(maindiv)
    }
}



let business_left_left=(data)=>{
    let random = Math.floor(Math.random()*20+1)
    let div = document.createElement("div")
    let img= document.createElement("img")
    img.src= data[random].urlToImage;
    div.append(img)

    let h1 =document.createElement("h1")
    h1.innerText= data[random].title
    let h3= document.createElement("h3")
    h3.innerText =data[random].author
    let h5= document.createElement("h5")
    h5.innerText =data[random].description

document.getElementById("business_left_left").append(div,h1,h3,h5)
}


let business_left_right=(data)=>{
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","mumbai_div")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","miniNews")

        let divText = document.createElement("div")
        divText.setAttribute("class","divText")
    
    
        let img= document.createElement("img")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    
    
        let h3= document.createElement("h3")
        h3.setAttribute("class","h3")
        h3.innerText =data[random].title
    
    
        divText.append(h3)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("business_left_right").append(maindiv)
    }
}


let imageArray=["https://th-i.thgim.com/public/incoming/ozu0k9/article65797284.ece/alternates/LANDSCAPE_320/K%20Shanker%20Ladies%20Dressmaker%201.jpg","https://th-i.thgim.com/public/incoming/875w9e/article65807270.ece/alternates/LANDSCAPE_320/LOCKDOWN%20CURFEW%20DESERTED%20LOOK%20ROADS%20MARINA%20BEACH%20LIGHT%20HOUSE.jpg","https://th-i.thgim.com/public/incoming/dm5mo3/article65809547.ece/alternates/LANDSCAPE_320/ramesh.jpg"]
let count= 0

let start = () => {

    let cointainer = document.getElementById('photo_choose')
    cointainer.innerHTML = null
    let image = document.createElement('img')
    setInterval(() => {
        if (count == imageArray.length) {
            count = 0
        }
        image.src = imageArray[count]
        cointainer.append(image)
        count++
    }, 3000)

}
start()


let again_slide=(data)=>{
    for(let i=0; i<4; i++){
        let random = Math.floor(Math.random()*19+1)
        let maindiv = document.createElement("div")
        maindiv.setAttribute("class","top_sliding_news_maindiv")
    
        let divPhoto = document.createElement("div")
        divPhoto.setAttribute("class","top_sliding_news_DivPhoto")

        let divText = document.createElement("div")
        divText.setAttribute("class","top_sliding_news_divText")
    
    
        let img= document.createElement("img")
        img.setAttribute("class","top_sliding_news_Image")
        img.src= data[random].urlToImage
        divPhoto.append(img)
    

        let opinion= document.createElement("h3")
        opinion.setAttribute("class","top_sliding_news_opinion")
        opinion.innerText= data[random].title

        let h5= document.createElement("h5")
        h5.setAttribute("class","h5")
        h5.setAttribute("class","top_sliding_news_h5")
        h5.innerText= data[random].author

        
        divText.append(opinion,h5)
        maindiv.append(divPhoto,divText)
    
    document.getElementById("again_slide").append(maindiv)
    }
}


// {

// /* user defined variables */
// var timeOnSlide = 3, 		
//     // the time each image will remain static on the screen, measured in seconds
// timeBetweenSlides = 1, 	
//     // the time taken to transition between images, measured in seconds

// // test if the browser supports animation, and if it needs a vendor prefix to do so
//     animationstring = 'animation',
//     animation = false,
//     keyframeprefix = '',
//     domPrefixes = 'Webkit Moz O Khtml'.split(' '), 
//     // array of possible vendor prefixes
//     pfx  = '',
//     slidy = document.getElementById("slidy"); 
// if (slidy.style.animationName !== undefined) { animation = true; } 
// // browser supports keyframe animation w/o prefixes

// if( animation === false ) {
//   for( var i = 0; i < domPrefixes.length; i++ ) {
//     if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
//       pfx = domPrefixes[ i ];
//       animationstring = pfx + 'Animation';
//       keyframeprefix = '-' + pfx.toLowerCase() + '-';
//       animation = true;
//       break;
//     }
//   }
// }

// if( animation === false ) {
//   // animate in JavaScript fallback
// } else {
//   var images = slidy.getElementsByTagName("img"),
//       firstImg = images[0], 
//       // get the first image inside the "slidy" element.
//       imgWrap = firstImg.cloneNode(false);  // copy it.
//   slidy.appendChild(imgWrap); // add the clone to the end of the images
//   var imgCount = images.length, // count the number of images in the slide, including the new cloned element
//       totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
//       slideRatio = (timeOnSlide / totalTime)*100, // determine the percentage of time an induvidual image is held static during the animation
//       moveRatio = (timeBetweenSlides / totalTime)*100, // determine the percentage of time for an individual movement
//       basePercentage = 100/imgCount, // work out how wide each image should be in the slidy, as a percentage.
//       position = 0, // set the initial position of the slidy element
//       css = document.createElement("style"); // start marking a new style sheet
//   css.type = "text/css";
//   css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
//   css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
//   css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 
//   for (i=0;i<(imgCount-1); i++) { // 
//     position+= slideRatio; // make the keyframe the position of the image
//     css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
//     position += moveRatio; // make the postion for the _next_ slide
//     css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
// }
//   css.innerHTML += "}\n";
//   css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; // call on the completed keyframe animation sequence
// document.body.appendChild(css); // add the new stylesheet to the end of the document
// }

// }

// {
    

//     $(document).ready(function () {
//         $(".testimonial-carousel").slick({
//             infinite: !0,
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             autoplay: !1,
//             arrows: true,
//             prevArrow: $(".testimonial-carousel-controls .prev"),
//             nextArrow: $(".testimonial-carousel-controls .next"),
//             responsive: [{
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 3
//                 }
//             }, {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             }, {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1
//                 }
//             }]
//         });
//     });

// }


let x=0

let cartoonArray =["https://th-i.thgim.com/public/latest-news/a4y63z/article65807311.ece/alternates/LANDSCAPE_560/OnTheDraw-Aug252022.jpg",
"https://th-i.thgim.com/public/incoming/c13sd3/article65811185.ece/alternates/LANDSCAPE_560/OnTheDraw.JPG","https://th-i.thgim.com/public/latest-news/g359wc/article65795264.ece/alternates/LANDSCAPE_660/OnTheDraw-Aug222022.jpg","https://th-i.thgim.com/public/news/national/rjockw/article65663547.ece/alternates/LANDSCAPE_660/Untitled-Artwork%20%282%29.jpg","https://th-i.thgim.com/public/incoming/qc61ai/article65736026.ece/alternates/LANDSCAPE_660/OnTheDraw.jpeg"]
let cartoon = () => {

    let cointainer = document.getElementById('left_buttom')
    cointainer.innerHTML = null
    let image = document.createElement('img')
    setInterval(() => {
        if (x == cartoonArray.length) {
            x = 0
        }
        image.src = cartoonArray[x]
        cointainer.append(image)
        x++
    }, 3000)

}
cartoon()



import foter from "./foter.js"
document.getElementById('foter').innerHTML = foter()

let addImage= ["https://s0.2mdn.net/simgad/10002112593280643179","https://tpc.googlesyndication.com/simgad/17383438564481514811","https://tpc.googlesyndication.com/simgad/3192372604635936197"]
let addimage= ["https://s0.2mdn.net/simgad/10002112593280643179","https://tpc.googlesyndication.com/simgad/17383438564481514811","https://tpc.googlesyndication.com/simgad/3192372604635936197"]

let y=0
let add=()=>{
    let cointainer = document.getElementById('add_right')
    let container2= document.getElementById('add_left')
    cointainer.innerHTML = null
    container2.innerHTML = null
    let image = document.createElement('img')
    let image2 = document.createElement('img')
    setInterval(() => {
        if (y == addImage.length && y== addimage.length) {
            y = 0
        }
        image.src = addImage[y]
        image2.src = addimage[y]
        cointainer.append(image)
        container2.append(image2)
        y++
    }, 5000)
}

add()

let miniAdd=["https://s0.2mdn.net/simgad/5356890396862228147",
"https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220817/Rohit-Scheme__728x90_30_73070565321116846.jpg",
"https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220817/Dhoni-Revamp-2022---728x90_30_73070555927972828.jpg",
"https://secure-ds.serving-sys.com/resources/PROD/asset/144375/IMAGE/20220817/Mall_728-x-90-TVC-August-2021_30_73070561026149548.jpg"] 

let z=0
let top_add=()=>{
    let cointainer = document.getElementById('top_add')    
    cointainer.innerHTML = null 
    let image = document.createElement('img')
    setInterval(() => {
        if (z == miniAdd.length) {
            z = 0
        }
        image.src = miniAdd[z]
        cointainer.append(image)
        z++
    }, 4000)
}

top_add()