let data = [
  {
    img: "https://c.ndtvimg.com/2022-06/rq7uh01s_upsc-prelims_120x90_22_June_22.jpg",
    headline:
      "UPSC Recommends 4,119 Candidates For Jobs In 2021-22, Lowest In 10 Years: Government Data",
    p1: "Updated: August 22, 2022",
    p2: "UPSC recommended 4,119 candidates for different central government jobs during 2021-22.",
    path: "https://www.ndtv.com/jobs/upsc-jobs-recommends-4-119-candidates-for-jobs-in-2021-22-lowest-in-10-years-government-data-3176030",
  },

  {
    img: "https://c.ndtvimg.com/2022-08/el07u998_jobs-loss-job-loss-unemployment-office_625x300_22_August_22.jpg",
    headline: "Chinese Scientists Create World's First Cloned Arctic Wo",
    p1: "Updated: August 22, 2022",
    p2: "The scientists chose a Beagle dog for the cloning process as it shares genetic ancestry.",
    path: "https://www.ndtv.com/jobs/experts-stress-on-upskilling-workforce-to-offset-automation-driven-job-loss-3277051",
  },

  {
    img: "https://c.ndtvimg.com/2021-02/dnur3lvc_exam_120x90_15_February_21.jpg",
    headline: "UGC NET 2022 Exam In July, August",
    p1: " Saturday June 25, 2022, New Delhi",
    p2: "The dates for the conduct of the University Grants Commission (UGC)-National Eligibility Test (NET) have been rolled out for July and August this year, informed an official on Saturday..",
    path: "https://www.ndtv.com/jobs/ugc-net-2022-nta-net-exam-in-july-august-3100636",
  },

  {
    img: "https://c.ndtvimg.com/2019-07/r9mfei48_ssc-staff-selection-commission_120x90_31_July_19.jpg",
    headline:
      "SSC To Fill About 70,000 Vacancies In Central Government Departments",
    p1: "Press Trust of India | Wednesday June 22, 2022",
    p2: "The Staff Selection Commission has said that it would start the process to fill about 70,000 vacancies in central government departments.",
    path: "https://www.ndtv.com/jobs/ssc-notification-2022-ssc-to-fill-about-70-000-vacancies-in-central-government-departments-3088457",
  },
  {
    img: "https://c.ndtvimg.com/2022-01/ttrjlp08_5gtower-genericbloomberg-240_120x90_19_January_22.jpg",
    headline: "5G Set To Spawn Massive Job Opportunities: Telecom Secretary",
    p1: "Wednesday May 18, 2022, New Delhi",
    p2: "The advent of 5G and new services that it would usher, will spawn fresh job opportunities in the market, Telecom Secretary K Rajaraman said on Wednesday.",
    path: "https://www.ndtv.com/jobs/5g-set-to-spawn-massive-job-opportunities-telecom-secretary-2986598",
  },

  {
    img: "https://i.ndtvimg.com/i/2015-04/teacher-generic_240x180_61428082580.jpg",
    headline:
      " NCTE Invites Applications For 4-Year Integrated Teacher Education Programme",
    p1: "Sunday May 01, 2022, New Delhi",
    p2: "The National Council for Teacher Education (NCTE) has invited online application for the four year.",
    path: "https://www.ndtv.com/jobs/ncte-invites-applications-for-4-year-integrated-teacher-education-programme-itep-2936932",
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
    img: "https://c.ndtvimg.com/2022-09/04cpfrr_shashi-tharoor_120x90_30_September_22.jpg",
    p: "Shashi Tharoor To NDTV: Gandhis Are 'A Part Of Congress' DNA' But....",
    path: "https://www.ndtv.com/india-news/shashi-tharoor-to-ndtv-im-not-a-g-23-candidate-for-congress-president-its-a-myth-3391148#News_Trending",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/jvaac11g_pm-modi-in-vande-bharat-express_120x90_30_September_22.jpg",
    p: "Watch: PM Rides Semi-High Speed Train That Offers Flight-Like Experience",
    path: "https://www.ndtv.com/india-news/vande-bharat-express-pm-narendra-modi-flags-off-vande-bharat-express-from-gandhinagar-to-mumbai-3390949#News_Trending",
  },
  {
    img: "https://assets.gadgets360cdn.com/pricee/assets/product/NDTV-beauty-480_4_1663656664.jpg?downsize=100:*",
    p: "Beauty Products- Up to 70% off in amazpn.in",
    path: "https://www.amazon.in/b/ref=s9_acss_bw_cg_btycoop_md1_w?node=4841910031&tag=ndtv-desktop-story-lhs-21&ascsubtag=119271313",
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
    img: "https://i.ndtvimg.com/i/2018-05/siddaramaiah-pti-650_650x400_81525613073.jpg",
    text: "I Warn You...: Siddaramaiah To BJP As Bharat Jodo Yatra Enters Karnataka",
    path: "https://www.ndtv.com/india-news/i-warn-you-siddaramaiah-to-bjp-as-bharat-jodo-yatra-enters-karnataka-3391591",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/mm0s0jo_z_625x300_25_September_22.jpg",
    text: "'भाभी' के ठुमकों ने इंटरनेट पर ला दिया 'भूचाल', Neha Kakkar भी हो गई फैन, शेयर किया VIDEO",
    path: "https://ndtv.in/zara-hatke/watch-neha-kakkar-shares-video-of-woman-dancing-to-o-sajna-posts-it-makes-her-heart-smile-3375764?utm_source=TBKB&utm_medium=TBexchange&utm_campaign=Taboola&tblci=GiApPgcF1d8cknUg4Dz6L1q8wWzo6P8ZCP97VJt70jIJhSDQ1z4o7aS1-pLp8dgQ",
  },
  {
    img: "https://c.ndtvimg.com/2022-05/7rctt0do_rajasthan-minister-mahesh-joshi_625x300_09_May_22.jpg",
    text: "Rajasthan Minister Hails Ashok Gehlot For Not Contesting Congress Chief Polls",
    path: "https://www.ndtv.com/india-news/rajasthan-minister-hails-ashok-gehlot-for-not-contesting-congress-chief-polls-3390466",
  },
  {
    img: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/en/indhs-Insp-7425-2in1-festivesales-sl.png",
    text: "Inspiron 14 2-in-1 Laptop",
    path: "https://www.dell.com/en-in/shop/deals/2-in-1-laptop-deals?gacd=9684407-28214008-5791742-347362002-178668127&dgc=ba&dclid=CjgKEAjwp9qZBhDM393c1dLW9jsSJACdlrK3RY-DDhQ8chNx2x7tSs1uP5JRx5v_H41VAF29kIMmlvD_BwE&nclid=J74DKZXZQcC6ei5uVQ3qJ6j05PJmqblXbeaGLTcpnsyKTqy7I1Y9i3_C5GULqsJP#tblciGiApPgcF1d8cknUg4Dz6L1q8wWzo6P8ZCP97VJt70jIJhSDNo1ooiKCy3478p-rbAQ",
  },
  {
    img: "https://c.ndtvimg.com/2022-09/iaf2fse_pm-modi-in-vande-bharat-express_625x300_30_September_22.jpg",
    text: "Watch: PM Rides Semi-High Speed Train That Offers Flight-Like Experience",
    path: "https://www.ndtv.com/india-news/vande-bharat-express-pm-narendra-modi-flags-off-vande-bharat-express-from-gandhinagar-to-mumbai-3390949",
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
