let data = [
  {
    img: "https://i.ndtvimg.com/i/2017-12/justice-generic-court-generic_240x180_51513069920.jpg",
    headline:
      "4 Minors Accused In Hyderabad Gang-Rape Case To Be Tried As Adults",
    p1: "Saturday October 01, 2022, Hyderabad",
    p2: "Four minors accused in the Jubilee Hills gangrape case in May can be tried as adults in view of the grave nature of their offence.",
    path: "https://www.ndtv.com/telangana-news/jubilee-hills-gangrape-case-4-minors-accused-in-hyderabad-gang-rape-case-to-be-tried-as-adults-juvenile-justice-board-3394294",
  },

  {
    img: "https://c.ndtvimg.com/2022-08/rtbr9m2_telangana-cm-k-chandrasekhar-rao-kcr_120x90_06_August_22.jpg",
    headline:
      "Telangana Hikes Scheduled Tribes' Quota To 10% In Jobs, Admissions",
    p1: "Updated: October 01, 2022 10:20 am IST",
    p2: "Telangana reservations: Currently, people belonging to the ST community have six per cent reservation in the state.",
    path: "https://www.ndtv.com/telangana-news/telangana-hikes-scheduled-tribes-quota-to-10-in-jobs-admissions-3394229",
  },

  {
    img: "https://i.ndtvimg.com/i/2016-12/jail-generic_240x180_61482400603.jpg",
    headline:
      "Man Sent To Jail For 142 Years For Sexually Assaulting Minor In Kerala",
    p1: "September 30, 2022 10:56 pm IST",
    p2: "The man, who is a relative of the 10-year-old survivor, was convicted under various sections of the Protection.",
    path: "https://www.ndtv.com/kerala-news/man-sent-to-jail-for-142-years-for-sexually-assaulting-minor-in-kerala-3393693",
  },

  {
    img: "https://c.ndtvimg.com/2022-09/lg914ml4_kcr-visits-temple-650_625x300_30_September_22.jpg",
    headline:
      " HomeTelanganaTelangana Chief Minister KCR Visits Temple, Presents Cheque For 1 Kg Gold Telangana Chief Minister KCR Visits Temple, Presents Cheque For 1 Kg Gold",
    p1: "Updated: September 30, 2022 8:49 pm IST",
    p2: "Telangana Chief Minister suggested that the land be used for temple needs.",
    path: "https://www.ndtv.com/telangana-news/telangana-chief-minister-kcr-visits-temple-presents-cheque-for-1-kg-gold-3393205",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/sl3f81u8_temple-of-goddess-vasavi-kanyaka-parameswari-in-andhra-pradesh-visakhapatnam_120x90_30_September_22.jpg",
    headline:
      "Gold On Idols, Currency Notes On Walls And Floor: 8-Crore Decoration At Andhra Temple",
    p1: " Friday September 30, 2022, Visakhapatnam",
    p2: "At a 135-year-old temple in Visakhapatnam, management committee has used public contributions for the festive season decoration.",
    path: "https://www.ndtv.com/india-news/8-crore-decoration-at-andhra-temple-gold-on-idols-currency-notes-on-walls-and-floor-3392978",
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
    img: "https://c.ndtvimg.com/2020-02/9i4okvrg_union-minsiter-nitin-gadkari_120x90_19_February_20.jpg",
    p: "Scientists Discover Massive 'Ocean; Near Earth's Core",
    path: "https://www.ndtv.com/world-news/scientist-discover-massive-ocean-near-earths-core-3393825#News_Trending",
  },
  {
    img: "https://i.ndtvimg.com/i/2016-12/earth-core-istock_240x180_81482242257.jpg",
    p: "Even I Can't Afford Your Car: Nitin Gadkari To Mercedes-Benz",
    path: "https://www.ndtv.com/india-news/increase-india-production-to-reduce-cost-nitin-gadkari-to-mercedes-benz-3394013#News_Trending",
  },
  {
    img: "https://c.ndtvimg.com/2022-10/fvjtq5j_ps1_120x90_01_October_22.jpg",
    p: "Review: Ponniyin Selvan - 1 Is Exhilarating And Enriching",
    path: "https://www.ndtv.com/entertainment/ponniyin-selvan-1-review-exhilarating-and-enriching-with-impressive-performances-by-vikram-and-cast-4-stars-3394275#News_Trending",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/48nourq8_aishwaryaps1beauty1_120x90_29_September_22.jpg",
    p: "Beauty Aishwarya Rai's Minimal Beauty",
    path: "https://swirlster.ndtv.com/webstories/beauty/aishwarya-rais-minimal-beauty-for-ponniyin-selvan-1-promotions-7011?utm_source=www.ndtv.com&utm_medium=web-page&utm_campaign=webstories",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/g56koqh_navratrihairstyles1_120x90_26_September_22.jpg",
    p: "Beauty Navratri 2022: Easy Hairstyles To Try",
    path: "https://swirlster.ndtv.com/webstories/beauty/navratri-2022-easy-hairstyles-to-try-6976?utm_source=www.ndtv.com&utm_medium=web-page&utm_campaign=webstories",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/pr6v3vq_heart-health-nutrients_120x90_28_September_22.jpg",
    p: "Food Essential Nutrients For A Healthy Heart",
    path: "https://food.ndtv.com/webstories/food/7-essential-nutrients-for-a-healthy-heart-6989?utm_source=www.ndtv.com&utm_medium=web-page&utm_campaign=webstories",
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
    img: "https://c.ndtvimg.com/2021-10/an9r19h4_sachin-pilot-pti-photo_625x300_06_October_21.jpg",
    text: "Priority To Win 2023 : Sachin Pilot After Meeting Sonia Gandhi ",
    path: "https://www.ndtv.com/india-news/sachin-pilot-meets-sonia-gandhi-after-ashok-gehlot-quits-congress-race-3389594",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_17thOct21_2989_1800x1800.jpg?v=1621400206",
    text: "COW PRINTS WHIT CO-ORDS",
    path: "https://www.snitch.co.in/products/cow-print-white-co-ords?variant=41048244420770&currency=INR&utm_source=google&utm_medium=cpc&utm_campaign=VM_Performance_Max_Co-ords_21June%2722&gclid=CjwKCAjwp9qZBhBkEiwAsYFsb2uZdwcP6OYdRoWzlwQLCmAkU4PFLS6i4vHiOJu34nY9v3pIeNLWuxoCqOEQAvD_BwE",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/4don0u1g_ranbir-kapoor-and-alia-bhatt_625x300_30_September_22.jpg",
    text: "भारी भीड़ के बीच पत्नी आलिया को इस तरह प्रोटेक्ट करते दिखे रणबीर कपूर, वीडियो देख दीवाने हुए फैंस",
    path: "https://ndtv.in/bollywood/ranbir-kapoor-was-seen-protecting-wife-alia-bhatt-amidst-huge-crowd-fans-went-crazy-watching-the-video-3392344?utm_source=TBKB&utm_medium=TBexchange&utm_campaign=Taboola&tblci=GiApPgcF1d8cknUg4Dz6L1q8wWzo6P8ZCP97VJt70jIJhSDQ1z4oh9Sd1aqRzNVE",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/mlfq2e8_jairam-ramesh-congress-communications-incharge_625x300_30_September_22.jpg",
    text: "He Can Explain: Congress Deflects Row Over Shashi Tharoor's Map Blunder, He Apologises",
    path: "https://www.ndtv.com/india-news/congress-on-wrong-map-in-shashi-tharoors-manifesto-calls-it-egregious-error-only-he-can-explain-3392476",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/2vbdk4cg_mallikarjun-kharge-pti_625x300_30_September_22.jpg",
    text: "Mallikarjun Kharge Set To Be 2nd Congress Chief From Karnataka: 5 Facts",
    path: "https://www.ndtv.com/india-news/mallikarjun-kharge-set-to-be-2nd-congress-chief-from-karnataka-5-facts-3392987",
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
