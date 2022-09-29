let data = [
  {
    img: "https://c.ndtvimg.com/2022-09/i7h83jtg_this-phenomenon-is-called-carbon-fertilization-representational-image-pexels-_120x90_28_September_22.jpg",
    headline:
      "Is Climate Change Responsible For Turning Trees Into Gluttons? Here's What A New Study Says",
    p1: "ScienceEdited by Anjali ThakurUpdated: September 28, 2022 11:34 pm IST",
    p2: "Researchers also found that even older large trees continue adding biomass as they age due to elevated carbon dioxide levels.",
    path: "https://www.ndtv.com/science/is-climate-change-responsible-for-turning-trees-into-gluttons-heres-what-a-new-study-says-3386898",
  },

  {
    img: "https://c.ndtvimg.com/2022-09/56eid2rg_arctic-wolf-pup-650_625x300_23_September_22.jpg",
    headline: "Chinese Scientists Create World's First Cloned Arctic Wo",
    p1: "Edited by Amit ChaturvediUpdated: September 23, 2022 6:26 pm IST",
    p2: "The scientists chose a Beagle dog for the cloning process as it shares genetic ancestry.",
    path: "https://www.ndtv.com/science/chinese-scientists-create-worlds-first-cloned-arctic-wolf-3371632",
  },

  {
    img: "https://c.ndtvimg.com/2020-11/074uth88_lungs-affected-by-covid19_625x300_26_November_20.jpg",
    headline:
      "COVID-19 Can Cause Lasting Lung Damage - 3 Ways Long Covid Patients Can Suffer",
    p1: "The ConversationUpdated: September 23, 2022 3:01 pm IST",
    p2: "The main function of the lungs is to bring oxygen-rich air into the body and expel carbon dioxide.",
    path: "https://www.ndtv.com/world-news/covid-19-can-cause-lasting-lung-damage-3-ways-long-covid-patients-can-suffer-3369983",
  },

  {
    img: "https://c.ndtvimg.com/2022-09/00th0gf_jupiter-polygon-cyclones-650_625x300_23_September_22.jpg",
    headline: "Strange Polygon-Shaped Cyclones On Jupiter Puzzle Scientists",
    p1: "Updated: September 23, 2022 1:56 pm IST",
    p2: "The study about Jupiter's cyclones is based on the analysis of images captured by Juno's Jovian.",
    path: "https://www.ndtv.com/science/strange-polygon-shaped-cyclones-on-jupiter-puzzle-scientists-3370562",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/3pe9547_neptune-is-located-30-times-farther-from-the-sun-than-earth_625x300_21_September_22.jpg",
    headline:
      "James Webb Captures Clearest View Of Neptune's Rings In Over 30 Years",
    p1: "Edited by Bhavya Sukheja | Tuesday September 27, 2022",
    p2: "The Webb also captured seven of Neptune's 14 known moons..",
    path: "https://www.ndtv.com/science/james-webb-captures-clearest-view-of-neptunes-rings-in-over-30-years-3365874",
  },

  {
    img: "https://c.ndtvimg.com/2022-09/q8cc184g_megalodon-attacks-whale-650_625x300_19_September_22.jpg",
    headline:
      "Megalodon Thrashed An Ancient Whale, Newly-Discovered Fossil Shows",
    p1: "Updated: September 19, 2022 3:46 pm IST",
    p2: "Megalodon is considered to be the largest shark that ever existed, and one of the largest fish on record.",
    path: "https://www.ndtv.com/science/megalodon-thrashed-an-ancient-whale-newly-discovered-fossil-shows-3357600",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/7a4vdqa8_lonsdaleite-is-a-rare-hexagonal-form-of-diamond_625x300_19_September_22.jpg",
    headline: "Scientists Found A Mysterious Diamond From Outer Space",
    p1: "Edited by Nikhil PandeyUpdated: September 19, 2022 1:08 pm IST",
    p2: "Researchers believe that dwarf planet and a sizable asteroid collided approximately 4.5 billion years ago.",
    path: "https://www.ndtv.com/science/scientists-found-a-mysterious-diamond-from-outer-space-3357116",
  },
  {
    img: "https://c.ndtvimg.com/2022-06/g8mehi3g_planet_625x300_19_June_22.jpg",
    headline:
      "Evidence Indicates There's One More Planet In The Neighborhood: Study",
    p1: "Edited by Anjali ThakurUpdated: September 17, 2022 8:41 am IST",
    p2: "The findings indicate that the planet is between one and three million years old and is around the size of Neptune or Saturn..",
    path: "https://www.ndtv.com/science/evidence-indicates-theres-one-more-planet-in-the-universe-says-study-3352132",
  },

  {
    img: "https://c.ndtvimg.com/2022-09/g36jh84g_volcano-drone-video_625x300_12_September_22.jpg",
    headline:
      "Earth's Most Devastating Mass Extinctions Triggered By Slowing Of Continental Plates.",
    p1: "Updated: September 15, 2022 12:27 am IST",
    p2: "Many of Earth's extinction events were triggered by major volcanic eruptions.",
    path: "https://www.ndtv.com/science/earths-most-devastating-mass-extinctions-triggered-by-slowing-of-continental-plates-study-3345420",
  },

  {
    img: "https://c.ndtvimg.com/2022-09/cfsmfong_the-orion-nebula-as-captured-by-the-james-webb-space-telescope_625x300_13_September_22.jpg",
    headline:
      "James Webb Space Telescope Captures Stunning Images Of Orion Nebula In 'Amazing Detail'",
    p1: "Updated: September 13, 2022 3:14 pm IST",
    p2: "The Orion Nebula, a star nursery 1,350 light-years away from Earth, is clearly visible in new images.",
    path: "https://www.ndtv.com/science/james-webb-space-telescope-captures-stunning-images-of-orion-nebula-in-amazing-detail-3340238",
  },
  {
    img: "https://i.ndtvimg.com/i/2016-04/exoplanet_650x400_51460457092.jpg",
    headline:
      "'Water Worlds' Are More Common In Space That Previously Thought, Claims Study",
    p1: "Updated: September 12, 2022 1:57 pm IST",
    p2: "Such discoveries have become possible due to advances made in developing more powerful telescopes.",
    path: "https://www.ndtv.com/offbeat/video-of-squirrel-struggling-to-get-up-sums-up-how-we-feel-about-monday-3379356",
  },
];

function readArticle(elem) {
  localStorage.setItem("readThisArticle", JSON.stringify(elem));
}

data.forEach(function (elem) {
  let div = document.createElement("div");
  div.addEventListener("click", function () {
    window.location.href = elem?.path;
    let dataObj = {
      category: "Offbeat",
      description: `${elem.p1} ${elem.p2}`,
      headline: `${elem.headline}`,
      imageUrl: elem.img,
      postedDate: new Date().toISOString().slice(0, 10),
    };
    readArticle(dataObj);
  });
  let div1 = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", elem.img);
  let div2 = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerText = elem.headline;
  let p1 = document.createElement("p");
  p1.innerText = elem.p1;
  let p2 = document.createElement("p");
  p2.innerText = elem.p2;

  div1.setAttribute("class", "image");
  div2.setAttribute("class", "innertext");
  document.querySelector("#box2").append(div);
  div.append(div1, div2);
  div1.append(img);
  div2.append(h3, p1, p2);
});

let data2 = [
  {
    img: "https://i.ndtvimg.com/i/2017-02/swati-chaturvedi-blogger_240x180_81486186202.jpg",
    p: "Opinion: Ignore The Apology. Ashok Gehlot Has Made It Work.",
    path: "https://www.ndtv.com/opinion/ashok-gehlots-truth-or-dare-game-with-gandhis-3388817#News_Trending",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/qvib53a8_the-video-has-amassed-102-million-views-18200-likes-and-several-comments_625x300_29_September_22.jpg",
    p: "Viral Video Shows Sharks Swimming In Flooded Streets Of Fort Myers Amid Hurricane Ian",
    path: "https://www.ndtv.com/world-news/viral-video-shows-sharks-swimming-in-flooded-streets-of-fort-myers-amid-hurricane-ian-3388681#News_Trending",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/fse5lrq8_accident_120x90_29_September_22.jpg",
    p: "Police Officer Tweets Accident Video In A Message To Careless Drivers",
    path: "https://www.ndtv.com/india-news/video-police-officer-tweets-accident-video-in-a-message-to-careless-drivers-3387467#News_Trending",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/g56koqh_navratrihairstyles1_120x90_26_September_22.jpg",
    p: "Beauty Navratri 2022: Easy Hairstyles To Try",
    path: "https://swirlster.ndtv.com/webstories/beauty/navratri-2022-easy-hairstyles-to-try-6976?utm_source=www.ndtv.com&utm_medium=web-page&utm_campaign=webstories",
  },
  {
    img: "https://m.media-amazon.com/images/I/41F%20GQPFazL._SL160_.jpg?downsize=100:*",
    p: "Bluetooth Smartwatch ₹1,799.in amazon",
    path: "https://www.amazon.in/dp/B0B85414K1?tag=ndtv-desktop-story-lhs-21&linkCode=ogi&th=1&psc=1&ascsubtag=119169910",
  },
  {
    img: "https://assets.gadgets360cdn.com/pricee/assets/product/NDTV-Apple-iPhone-12-480_2_1663788317.jpg?downsize=100:*",
    p: "iPhone 12 Price: 42,499*  in amazon.in",
    path: "https://www.amazon.in/gp/product/B08L5T3S7T?tag=ndtv-desktop-story-lhs-21&ascsubtag=119170234",
  },
  {
    img: "https://assets.gadgets360cdn.com/pricee/assets/product/cube-Flipkart-logo-1-480_1663783494.jpeg?downsize=100:*",
    p: "Big Billion day Discounts- Up to 80% off in flipkart.in",
    path: "https://www.flipkart.com/?affid=HotDeals20&affExtParam2=ndtvconv-21&affExtParam1=119170358",
  },
];

data2.forEach(function (elem) {
  let div = document.createElement("div");
  div.addEventListener("click", function () {
    window.location.href = elem?.path;
    let dataObj = {
      category: "Offbeat",
      description: `${elem.p}`,
      headline: `${elem.p}`,
      imageUrl: elem.img,
      postedDate: new Date().toISOString().slice(0, 10),
    };
    readArticle(dataObj);
  });
  let img = document.createElement("img");
  img.setAttribute("src", elem.img);

  let p = document.createElement("p");
  p.innerText = elem.p;

  div.append(img, p);
  document.querySelector("#box1").append(div);
  div.setAttribute("class", "inner");
});

let data3 = [
  {
    img: "https://c.ndtvimg.com/2022-09/ikhmpi3o_uttarakhand-women-650_625x300_25_September_22.jpg",
    text: "Video: उत्तराखंड रिसॉर्ट मर्डर केस में युवती के दाह संस्कार के बाद महिलाओं का पुलिस पर फूटा गुस्सा",
    path: "https://ndtv.in/india/after-the-cremation-of-the-girl-in-the-uttarakhand-resort-murder-case-the-women-got-angry-with-the-police-3377006?utm_source=TBKB&utm_medium=TBexchange&utm_campaign=Taboola&tblci=GiApPgcF1d8cknUg4Dz6L1q8wWzo6P8ZCP97VJt70jIJhSDQ1z4okLeYhais6fOGAQ",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/3ln6tu7o_mamata-banerjee-pti_625x300_08_September_22.jpg",
    text: "Mamata Banerjee's Doorstep Ration Delivery Scheme Illegal, Says High Court",
    path: "https://www.ndtv.com/india-news/mamata-banerjees-doorstep-ration-delivery-scheme-illegal-says-high-court-3385990",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/6hn9gsqo_pfi-raids_625x300_28_September_22.jpg",
    text: "Kerala Government Takes Steps To Implement Ban On Popular Front Of India",
    path: "https://www.ndtv.com/india-news/kerala-government-takes-steps-to-implement-ban-on-popular-front-of-india-3387412",
  },
  {
    img: "https://c.ndtvimg.com/2019-08/b1q4llg8_maryam-nawaz650_625x300_08_August_19.jpg",
    text: "Pakistan Ex-PM Nawaz Sharif's Daughter Acquitted In Corruption Case",
    path: "https://www.ndtv.com/world-news/pakistans-ex-pm-nawaz-sharifs-daughter-acquitted-in-corruption-case-3389781",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/ljcgpbc_aimim-chief-asaduddin-owaisi-twitter_625x300_14_September_22.jpg",
    text: "Ban On Popular Front Of India Cannot Be Supported : Asaduddin Owaisi",
    path: "https://www.ndtv.com/india-news/ban-on-popular-front-of-india-cannot-be-supported-asaduddin-owaisi-3385097",
  },
  {
    img: "https://c.ndtvimg.com/2022-08/uu5pmm4_manish-sisodia_625x300_20_August_22.jpg",
    text: "Was Pressured To Take Manish Sisodia's Name: AAP Slams Member's Arrest",
    path: "https://www.ndtv.com/india-news/cbi-arrested-vijay-nair-as-he-refused-to-name-sisodia-in-excise-policy-case-aap-3383421",
  },
  {
    img: "https://c.ndtvimg.com/2022-02/a1ooga8_supreme-court-of-india_650x400_14_February_22.jpg",
    text: "Supreme Court Acquits Man Convicted For Rape, Cites Faulty Investigation",
    path: "https://www.ndtv.com/india-news/supreme-court-acquits-death-row-convict-for-rape-murder-3386187",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/aatf71ko_new-cds-anil-chauhan-ndtv-650_650x400_28_September_22.jpg",
    text: "Why A China Expert As New Chief Of Defence Services (CDS) Is Vital",
    path: "https://www.ndtv.com/india-news/lt-general-anil-chauhan-why-a-china-expert-as-new-chief-of-defence-services-cds-is-vital-3388056",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/8f0o8h2_sachin-pilot-twitter_625x300_29_September_22.jpg",
    text: "After Ashok Gehlot, Sachin Pilot To Meet Sonia Gandhi Later Today: Report",
    path: "https://www.ndtv.com/india-news/after-ashok-gehlot-sachin-pilot-to-meet-sonia-gandhi-later-today-report-3388042",
  },
];

data3.forEach(function (el) {
  let div = document.createElement("div");
  div.addEventListener("click", function () {
    window.location.href = el?.path;
  });
  let img = document.createElement("img");
  img.setAttribute("src", el.img);
  let h4 = document.createElement("h4");
  h4.innerText = el.text;

  div.append(img, h4);
  document.querySelector("#box3").append(div);

  div.setAttribute("class", "innerBox");
});
