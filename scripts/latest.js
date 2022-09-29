import {appendMainNews, appendTrendingNews } from "../scripts/append.js";

const latestData = async() => {
  
    try{
     let main_container_dream = document.getElementById("mainNews_dream");

     let res = await fetch('https://newsapi.org/v2/everything?q=latest&apiKey=5e4d390ad0244deebcd33a6c09b1d70f');
     let data = await res.json();
     let actualData = data.articles;
     console.log("maindata:",actualData);
     appendMainNews(actualData,main_container_dream)
    }catch(err){
        console.log(err);
    }
}
latestData();

const trendingData = async() => {
  
    try{
     let left_side_container = document.getElementById("left-side-div_dream");
     
     let res = await fetch('https://newsapi.org/v2/everything?q=trending&apiKey=5e4d390ad0244deebcd33a6c09b1d70f');
     let data = await res.json();
     let actualData = data.articles
     console.log("trending:",actualData);
     appendTrendingNews(actualData,left_side_container)
    }catch(err){
        console.log(err);
    }
};
  trendingData();

  let addvertisement = [
    {
      img: "https://c.ndtvimg.com/2022-09/itiga6i_kareena-kapoor_625x300_28_September_22.jpg",
      text: "Kareena Kapoor's Birthday Post For Aunt Rima Jain. Bonus: A Cute Pic Of Son Taimur Ali Khan",
      path: "https://www.ndtv.com/entertainment/kareena-kapoors-birthday-post-for-aunt-rima-jain-bonus-a-cute-pic-of-son-taimur-ali-khan-3386693",
    },
    {
      img: "https://c.ndtvimg.com/2022-09/f5icn34_sara_625x300_24_September_22.jpg",
      text: "सारा और जाह्नवी ने साथ में किया वर्कआउट, VIDEO देख कर फैंस बोले- पक्की सहेलियां",
      path: "https://ndtv.in/bollywood/great-bond-between-sara-ali-khan-and-jhanvi-kapoor-seen-while-working-out-3373925?utm_source=TBKB&utm_medium=TBexchange&utm_campaign=Taboola&tblci=GiCrexigEpPNq_0RDgceemdCfc2StY0J4sOM7_FhUpFkdyDQ1z4ovdKtiKHjsuP8AQ",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0509/6679/0313/files/akrales_171113_2119_0045.jpg?v=1606212006",
      text: "Why Are People Rushing To Get This Stylish New SmartWatch? The Health Benefits Are Incredible",
      path: "https://www.wristmate.in/pages/smartwatch?utm_source=taboola&utm_campaign=19599956&utm_medium=ndtv.com&utm_term=http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fab8695c675f876cd77c1778317987ef4.png%20&utm_content=Incredible+Rs.2499+Smartwatch+is+Taking+India+By+Storm+%28It%27s+Genius%29&tblci=GiCrexigEpPNq_0RDgceemdCfc2StY0J4sOM7_FhUpFkdyCHrlEol7Cp8vTuleKHAQ#tblciGiCrexigEpPNq_0RDgceemdCfc2StY0J4sOM7_FhUpFkdyCHrlEol7Cp8vTuleKHAQ",
    },
    {
      img: "https://c.ndtvimg.com/2022-09/cd8ubjag_janhvi-kapoor_625x300_27_September_22.jpg",
      text: "ICYMI: Janhvi Kapoor And Rumoured Boyfriend Orhan Awatramani's Adorable Instagram Exchange",
      path: "https://www.ndtv.com/entertainment/janhvi-kapoor-s-happy-monday-post-prompts-adorable-instagram-exchange-with-rumoured-boyfriend-orhan-awatramani-3382169",
    },
    {
      img: "https://c.ndtvimg.com/2022-09/vee7jvuo_girl-with-python-_625x300_27_September_22.jpg",
      text: "अजगर के साथ सोफे पर बैठी टीवी देख रही थी छोटी बच्ची, तभी अजगर ने खोल दिया मुंह और फिर...",
      path: "https://ndtv.in/zara-hatke/little-girl-watches-tv-with-her-12-foot-long-python-then-this-happened-you-cant-believe-this-watch-viral-video-3380610?utm_source=TBKB&utm_medium=TBexchange&utm_campaign=Taboola&tblci=GiCrexigEpPNq_0RDgceemdCfc2StY0J4sOM7_FhUpFkdyDQ1z4omoT44fvNlrE8",
    },
  
    {
      img: "https://c.ndtvimg.com/2022-09/bkuj6qmg_delhi-police-generic_625x300_02_September_22.jpg",
      text: "Delhi Police On High Alert As Crackdown Intensifies On Popular Front Of India",
      path: "https://www.ndtv.com/india-news/delhi-police-on-high-alert-as-crackdown-intensifies-on-popular-front-of-india-3387065",
    },
  
    {
      img: "https://c.ndtvimg.com/2022-09/c8on704g_american-airline-spassenger-attacked-flight-attendant-650_625x300_23_September_22.jpg",
      text: "Viral Video : उड़ान के दौरान यात्री ने Flight Attendant के सिर में जड़े घूंसे...मची चीख-पुकार",
      path: "https://ndtv.in/world-news/viral-video-passenger-punches-flight-attendant-after-argument-in-american-airlines-3370797?utm_source=TBKB&utm_medium=TBexchange&utm_campaign=Taboola&tblci=GiCrexigEpPNq_0RDgceemdCfc2StY0J4sOM7_FhUpFkdyDQ1z4ojti3s4nE__Rx",
    },
  
    {
      img: "https://c.ndtvimg.com/2022-09/7hsnvrlg_alia_625x300_27_September_22.jpg",
      text: "It's Not Easy To Be Alia Bhatt's Husband. Ranbir Kapoor Will Tell You Why",
      path: "https://www.ndtv.com/entertainment/its-not-easy-to-be-alia-bhatts-husband-ranbir-kapoor-will-tell-you-why-3381423",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/4/42/MalayanTiger_PantheraTigrisJacksoni.jpg",
        text: "When it comes to saving the Malayan Tiger, the time is now",
        path: "https://www.ourbetterworld.org/series/a-wild-life/story/saving-the-malayan-tiger",
      },
      {
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUYGBgZGhgZGBgYGBgZGBgYGhgZGRoaGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0P//AABEIAKgBKwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA9EAACAQIDBAcGBQQBBAMAAAABAgADEQQhMQUSQVEGImFxgZGhEzKxwdHwB0JSYnIUguHxkiOywtIVM2P/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAlEQADAAICAQQCAwEAAAAAAAAAAQIRMQMhEiIyQVEEE2FxgUL/2gAMAwEAAhEDEQA/AOq1RnGo7WERMr2aJ0FCtFRLQBCJiS8JjKrGYsklUNgNTzPIQN4KTOSZi9pJTBLMMuAzP+JV4vpfhqaF3cAXItqSRwAGspcdjVVG9oLAZ3IuLjQ34HvnOcdgd/DtiCfeY7g4BLnPvOs5POx3CS/k3Ff8WKIayUKjDmSq+l5IwH4pYZzaoj0/3GzL42z9Jxk6xQlnCM6r+D07gsalVA6MGUi4INxaSLzhvQDpC+HqrTZj7Nzax0VjoRyBnb6LhgCOMk+ngdrrKFwQQTgBQocFpxwUFoYh2nHZFUB1vAxTjODDjrecXVWOl0I36hmC0VBaAbImJYxZjNRoGFDbtMV0w6UJQ6itd/0jh38pO6cbf/paBK2336qX4c2txt8SJxerUZ2LOxLMbkk3NzzPOBT5bKKvEn4jb1VmJB87mP4TpHUX3gr8rZG8omF+6HS1Ep4TjQn7Kzs1GC6VurAugt+0m48DrN3snaaVVDIwI9QeRHAzk1ZbHTIx3Zm0Xw7h0PeODDkfvKJXGmuik8jXTO103tLjC1biZbYu0UxFNXQ65EcVPEGXeDexkJeGPSyi5EKEhi5YzibQoqFOOEERMcgtOCSaojceqaRgmNWycgMZrVAASTYDUnQQsTXVFLMbKNSZncRiGrm5yQaLz7W+knVYLTHkPYnHtUuEyTnoW+glbT36j7lPQe+50X6nsj4U1X9kmQHvv+kch2mXuFwi00CoLAevaTxMRJ0WbUrCMT+IOE3MI7B2OaixC8T2C8zvR9PbYQoQGsoVGOW626N7yva/fN108wntcFVHFVLjvXP5TnnRLaA9gtPMlGfqjL3je9uPjKf8Aht1/hR4rZpR91hZ1scvddOJF+IldUo2O7yP38ROqbY2YtbD71t2pT6yE2v/ABNuBnNHuXueJJ8NLR4vJPklJ9DdM7pBGRFj5TvXRLG+0oIeNh8BOEOl2y5A/fjedF/DXbWRoubMpsO0cJ1/DFldNHUIdoSteKtFECtBaK3YdoQZE2gtFWgtOOyKw/vecerLG6A63nH6q5R5XpJ0/URIIoiEYBxDSO0faZrpttX+mwlV1NnK7idjP1QfC9/CKyknKunO1/6rGMEN0p9ReRIJ3m87+QlDUSw9IMGptfnx9PlBXPkI6+g/GRGDwr1nCILk+QHMzV4boewALML90n/h5s4bjVWGbGw7hNucOJK7ecIrx8c4zRgcZ0fytrYTJYnDlHZDqJ2SvhRbSc06XUt3EA8xOi3nDG5JnGUWX4eY/dqNSOji4/kuvmPhOlUjmDOKbKxJpVkcflYHwGo8Redow7hlDA5EAjuMHIsPIsvrBe0HuI+JXYSpLBTDLyiNLDAYUUYUYUSRCtFQrQBJdTSV+LxKopdjZQMzLF9JVY7DK6MjaN/sEeMahOPGezM4nEtXbebJB7ifM8zI+I2gLrSp2Z2NlUH1PICSK2GKNuOP4kaMPkeyM/8AwiE76jdfgykq3mJnXbN/WOjS7MwApIF1bV2/Ux1MlkTJnEYqh7r+0X9L5nwYZxt+ltZdcOt/5n/1jqkiT46bzs0u0MMHpuh0ZSvmLThGHLYPEsGXe3CyOo4gHUeNjOnDpow9/Dm37XB+IEyXSR6FdzXpJUD3AcbgN2tkRY62GnG0aWmznNIRh+k5xLlCrIlslFs7fqOvhKDaND2Tsp0vvL/Fr/5i9m4GorisyMEFzvbpt4/p8YNvuHdXXPeXd7MsxbzMbCVYQG3U5eypdyGU/t+d5Y7NxRV1qI1mBFxpvCR8RTVgu71SAMicvONJhXJ6osTyOUd4aJJNPo7v0Y6RUsQoUMN8DrLxmlE4f0YwtfDOKygHLNb6jsnSNjdLUrP7MoyOB7r2F/485JUl0PfHT7waoQGJU5RUYgFBDgtOOFUPe85KYSLQ97zkuVjROtkRhEkR2oM40YrHQ04nPPxdYjDIB+aoF9CflOiNMH+Jyb1Gl2VQfJGv8ommVhZ6OUhSAFGpNvAZXiMTTz3AOUu9l4PfLPru3CDtsMz2DPy7Iex8CKlUr26987yK+DZo9g4mrh6Kb2HbcyzVgW79wZzT7K2vRxB3ELK/6XUqfC8x79D3Z1L77qG6x39UysFGW6dR434TQbBwjYdwCCEubBm3iATkCba6jyi0pxkdZfRa7cxiYdN57knIKouxnLuklV6re0NJkXQFiLnwHeJtukVF8RUZQWKAEWVt071sjpmNMspjcVsAoosHUgMXLEbrcVCgE6W1yvfSdPiuwNVjGCgKmxPLOdT6B7Q9rh9w+9TO7/bwnPzg7pvjNTkT28LzT/hlffqctPK31E6mnIqTTOi0BnLSnIFIC8nIwgkS+x2EYQcQ45MIxNoowrTjia2kgvJzSEwjMWCJicOrizC4lTVwTpmnXHImzDx0MviI06yTkvNNFA2JB6rAg8mFj6yJX3Tqs0z0FYWYAjtF5X4jYyn3GKn/AJDyP1iOWVm5+TMYjCoRlEbK2WCalx1WCgc94XzXtF5ZY/Z7opYjeUaldR2lZN2QB7NW55+ZnSux6pePQwmzD7y9VvzW91j2iUG2uhy1esn/AE2vfIXUN3cjNxTWB0l8EPL4OU4noXibWG45HH3b+kXsvotiqTDfpBh/NDbuznVNyAJadjJyaTyY3D5HcYFSOBFjHmw1yGXJlN1PIzQbVwgdDb3gCUbiD9DKfZOIWogItcgTPU+Jom/JF9sjbYayVOq/bo3cZfBpj6uEDDMRVDE1aXutvKPyvn5HURpprZG+FPuTX3hyo2ftlKh3T1H/AEtx7jxlnvSiaZmcOemP0PekmRMOet5yXKxolWxuqJHaSaukisZ1bDI25tOV/iDtoO4RTdaYJPa7CwHgPjN70j2h7Gi78gZw7H1C79Y3JN279TJbZpleK8ixr4z2VPcXXdG+3M62B5cTB0LxY/qCG45gyqxD76gDW+Z9cpI6PDdqqTlmJ2F4spNN0jt+GS6Aysx7qHC3zyy749hcVZB3SPiXRm3i+6Qb5aXAtnzEm2miiTTYxSQ+3dP1AMPhK/pEoSm5bgrfCWJ2gpfeVwWyAsLZdkyX4gY47m4NXyPdxgnt4C20sv6M10a2pu9RhvIwsyniOzumu2Ii4diUN0cllPGxOYPaJzzCJ1gBkVAPheaFNrlEtwDC3Mb2RA8hK3OdEor7Ol4baOcs0xV5z3ZW1N9QQfqbfCaXAY2/GReUVcprKNGlcybRqXlRTe8lYd7GGawRqSygiUaKliBNtIbjOTLyLV1jMSdjREQwjhiWiFUIAgtFAQ7TjsjFZAQQZVogXqjQGwHZLlhK3EoA1+fyg0x5fwP0gLRXb5xjDtJKNKoShLC1oTD6ffnH/ZX7ozv2yOoNvvyMLQEyNjW3EZuSk+QmA6FbCxJ65JRCPdYfm4nd5Xm42mpfdQEjeILW13Qb28SAO68t8LRsoEjXbwVVeM5KUpVT3k3hzXPzGsT/AFCHXI8jkfIzSbsbegrZMoPeAYviwfu+0ZXE4WnUFri/rIS7JYaP8QfMTU19h0GIPswCOK3U+a2ihsinwBH9zfWL4sp+6SB0cwzrWBLsRZsizEaciZr5UbPwCo4YFtDqb6iW808Sakx8zVVlCagykOpJzSBiIbFjZiun9W1ILwZgD3A3+U5RiBZgTxZr+n1nT+mp31twU3Pl9SJy/GXsWH5X9GEjL7NtLEofWjYMeSm3eT/mRhV3Ar893zzj+FrB6bjWygjzsZGdL0h428Lx/nsT4yjqHR3aK16IBzIFmEN9hMvuM27qLNYjsN/jOfdHcc6ON1iD6eInUtl7Rd0FwBz5SNLxZomnjKK2ls4Uj7R20Btc3sOJJnPOkOONepvcPy/xvr4zpG36ZqU2BPA5CcwxlMGwvZhl39kbj3kXmbaIjVFR1YfpIPfx9YaoXJA5g/H6yTT2Sc2cHsFrXmi2PscLrHq0hIim+yHs/Z72l9ht9LS4wmDA4R2rhhbSZ6rJqlJdD+ycdv8AVIsed73l2jTKUBuODfK809JspyJck4ZZYapJMraL2MnK8tL6MtLDLASPW1kiMV5WtEJ2NRJiokyZUSBDghE2nBCYytxL7xtfjn9JJxNXhxkdSNINseVgKkbZaSSsQqf6+keReP2O+UkWmOBrD4yNUIALHv8AQDzyPnHqj+B4Svxzmx+9cr+sNVhAhZY9s+lvkueJy7BwluqyNgEsoksCSldAt5YLQrRVoVowmQt2C0VaFacdkPDjreclyPRHWkiVjROtgMqce5PVXxbgPqZZ1Tllxlbjuqp4C0Xk0Pxe4xPSuoiU2B45DvOnrOYY3qhj2/BLfFhNb0lxpeoQ3uoQF/cSfet5TJ41t5VvxJY+Z+Nh6SUI2X0sEPZpI315J6ggmW2OoBKaA2yVAf5Ob/C8gYakQSTlkfXhLXpWd3cUcWZj/b1APKO+6Jz1LKnAXDa536vfynT9i4tWRDe119RqJy7DUmOn3aa/ZBb2W7fM9Yd/GT5EV4fou8fiHqIFTVtWPASPsro3SpkvUbec8W0HcIk1mVFVfekSvSfi5v3yaZoclhtFKYUhAO+O4BRbKUab2kscHWsReBhwaGiI44icMLiPskGCeSrxFOWWy8TvLY6rkfkZGxCSLQZlcbpsSQM9DnxnIal5SadDJC1JGoj5/GOxkzM0XojNaPRuqMpqrRjWxiJIi4RkyggyLiath8JJcysxD3bug30PKAqcSbnjE1QSdMvI+BveSFQwFZTGEdkaS/5TfsOvhzkmnmNZGruFUsfy3Pb4SnwHSS7FaqhbnqsL2t+l78f3QKknhhc1Syi+dtbyFXO9ujmQPv1kqtUDC6kHLw7PpI1BruvLXxH+4t6DBeYZLAR6N0zlFwojWw4IIDDgUEEEBnYOF0tZIkelrH5WNE62JcTPdK6+5SZjoBcjmTko8SfSaMzEfiFWKUXPLcPq4HqVicuivD7kct2zi2Zwt9573Y+p8TKfFVs1HBcvIAfKSGBZt6+mR7tT84ztXDEE8jZge/7t4QSkui9U2myXh3Gh1y+Mc2316pPIA+f+hKfBORYE5y0xL3AYclRvA3B+PnOa7BLzJDFc+6O6azYlFiouZmW2a7rvpmQTdeznHtnbYeid1gctQcjEucrorx14vs3dGlYkmRa+bGVydJ0tZgR2xyjjVfNTcGRctGmbl6LPC4QNJL4MASPhMSBLJcahFiR5wBbD2LibjdbVSVPhofLOXDTH4jECjVDg9RyFb9rcD3HTymnw+I31uISVL5E15XYgcpNrPIb5xR0aTCvvKrcwDHpB2I96YHIket/nLDdjIzV0y7iKgyi4lpqZiI8TFmFJlRqoMpVoLse+WlSVlP3j3/OdOx5fTJ9IC1vv70hMnKLQ2Gff8oDflL4J5KXbj7qBeLG3gM/pM3VohhLzpJU6yDsJ8zb5SlDzHyP1G7hXpGcPinoniycV7ONpd7OxYY7ym/D7EqHp70jAPTbeQ25jge+Ll4KVKZ0HD4m8nI95kdl7RDi4yI1HL/Ev8NVvKTRjvjwWd4cbQxyWRnYUEOFOwcLpax+MUtZIjy+hK2Jac8/Feru0UX9b7p/t6wnQXbkLzn34tLbD0WY6VgLdhRvoItPI3F7jluGYC99CR55/SObXfILwC5dhGZHiP+2O4RAKjUnFh7QgX7RdfiPOMbWaxcePccwfl5xW+zVjElKdLjhY3lhRqbwBHG1x99sgURYc/wDMXgAQ1+At8bx3oktmk2EzElV97MrfjxtNcdl0qy7+4Ce0C+Vrgjz85lthUCGV1/K1rzf4ehum9uq5DdzWz87ed5J7NK9pm63Q+i4Oq6+4bZjeHG41X1jOH6EhCd3EPbPLdF7C3HTQ8pr/AGeQ/t+AP1hKh3vHdN+8jXwE4XrZR0ujVMZO9Rzfi27xtayju85a4LZVBAQtMG4sS3WuMuLE3jqm5HEHXtJKE98GHqG44Zc7DRBw+842EK6Y3j9h4eom6aaj+N152Ise6VWzWai/s2JIHuk6kdvbNOwI48f8CUO3KW7u1B+VhfuJt8/STpFOOvhk9xfOIZI9hjvJCdZItkf2EbM69x+Uut2UeyP/ALe9T8jNBaNKyjPy7LUQjDhEzSYhhom8U+sQTEKIbqmVqX3jbn85Y1TIVAZntvOnY66RMUW4cotok37svWGwyl3omYzpLjAK5Q8KaHwJaVQxCjjKzpnWY7RdQ1rU6an/AI73/lI70HsSHHiD5azHa9R6HE/SjS4WoGNhnJjUATYf6lN0ewTrm7XLEWHLsEvcSm4GucyfTnEwM32V+DTcrgA6hge4Z385rsEJmNh0t93qHT3V87n5TX4ZIZXZLmeCdSjojaCOCaJMTDMIiHDjCgpax8xmmM49DOha2Cc8/F/rUKKXzNQlRzIQgDzYToRNs5k8ZhVxNdcRUyoYcN7PeyDOcmqG/wCUAWHbnOp9YDxrvJz3p9sn+nqUHW//AFKaX7KlLcU+asvisqtt4LfYEDJhdjpnYEgc8gJ0nE4BtpV0cqVw1AMUJyNWocgw/YLX7bCZTpOhQDKxDMp7Dw8LqJFvDRt43mWnsxK4cb7JwUXbwvl3xxMKbZLmTbx5fWO0cPdibnrantE0GycL7VggAJzUG4y5+fOF0dM/ZZ9GNm3QDm5a/MZffjNbSp5WPDLnaxyI+MLZmFCIAB2W5Eajlzk3cF+GnlpOU/IKr4INNL94ve3PdMJaYLXtxBz4acTfnykvc3WDDjk1uGoB9YHTLLPkP7czzjJCtlay5njl2cBfTPLqx2lTzFwMrC50OY14fkMdNPU3voOGl7/OLXt7/vzaFAeRxqeYytl9D3CR9o4PfputsyrC/hJ7OLb2enb2/wCPOGtS9l0+8/lOaQE2jPbGfeQdoB9JKqCVmxa4vug6Fh5MR8pZ1DMzNnyDZhtXTtuPQzV7kyGCa1ZP5r6m02srwrJl/J6YsmETEwSmTMN1IiLqRuIx0N1ZHw65E9+ckVRG8OOqO36xo9wz0PvBWOsF8/vs+sUzZHulmTOO9ITfaeI7GQeVJJOwlLfccl+J+/WVe1X3to4k/wD6Ef8AEBflL/ZQ3U3uJJt4zHybPR4vaXWzKfXHJZB25id59xdTZRLNHCUyeJH+5TbLpGpVNQ6A2HfFesBW22aTZOFCKqjgP9y8oJIuEpWEsUFo8oyctZYoRUKHKogHDiYcYAtNY7GaeseEZC1sJ0BFjpEtSUrulQRyIBHlFwR8C5CAtpOe9NcBvVHUW6yhhfS+h+F50OZjpbSzpt/JT6EfOS5l6TR+NWL/ALOXJshm33W9lG6ota7BusflLDowm46ADe95WsM7ag/fOaxKYsMspT1MMaD+0QX0uvC3EDloJn8n8m7xTNTbdN1O8OK/mGul9R2SQjA6cNeBB7Qc4xsrHpWQOnW5gZMp4hu758ZMdQdfIixFpdIyU+8MbFtLdnZGayWswz5j5j584t0YG47cifgdR6+ENKlsyO/jYc4Tl9kZTfz8dPSNsfv5R6oVB1tzt9ZXbV2xRpIS7AciDcnTUceOkUdEtcQNxhxF/DK/19Jm9pdLqSMUBLEKDZc73ztfylK3SSu7uyIqoQAu/cse0gWlfs/Yed7Zk3Jiuktjzxt6JnRnEOo63vEsx7N4k29ZsUqXEqsDs4JaWekhTy8mjGFgVgxevTH719DebiY7Yib2IT9oYnyI+JE2Mtxrox/kP1L+gQQQRzMIqCN2gggHQ3VBtBhxZfCCCNGzq0OE9Y5feUIrBBKsQ4pWpMcbim3Wt7arbqng7D5TX4bDndRbHLPSCCZOT3Hocb9I/tXeIWmgNzlocu0yywOCCBEAOXG2psMz5wQRVpi3T6NDRS0kAQQSqMlChDggjIQKHBBCcLp6x+CCUkSgQoII4AGU/SKhvUSQM1IYeGR9CYIJK9Mfj9yKCgpsMj5SHtBDa1j5QoJmPRT7MrszH1MNid5d4IxAYbpsc7A94uPC86UmMV1VjqSc87+B8YIJedEeVdjdSuF0IItezHhxzHf3yvxe36Se+SDa4sCTbvA1+kEE5irRlNrdIqlQkYem63/OVYXH8dDKbDbHdm3nDMx1Zgb+HKCCSpmqJRocDsQ8VPlLmlgt3h6Q4JM50xw0+w+UOjhHc2UWH6jcAfWCCDHYrtmi2Xs1aI6tyxGbHU93ISwggmqNGCqbfZ//2Q==",
        text: "Malaika Arora Brings The Midweek Razzle Dazzle In A Shimmery Silver Dress",
        path: "https://swirlster.ndtv.com/style/malaika-arora-brings-the-midweek-razzle-dazzle-in-a-shimmery-silver-dress-3069242",
      },
      {
        img: "https://c.ndtvimg.com/2022-06/v7vjiaf8_taapsee_625x300_14_June_22.jpg",
        text: "Done With Denmark, Taapsee Pannu Is Now Holidaying In Cannes",
        path: "https://www.ndtv.com/entertainment/nothing-to-see-here-just-taapsee-pannu-strutting-on-the-streets-of-cannes-3066027",
      },
      {
        img: "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/06/Nora-Fatehi-raises-temperature-in-Rs.-14-Lakh-baroque-print-tea-length-Fendace-Dress-for-Dance-Deewane-Junior.jpg",
        text: "Nora Fatehi's Rs 14 Lakh Fendace Dress Is A Luxurious Print Party Like No Other",
        path: "https://swirlster.ndtv.com/style/nora-fatehis-rs-14-lakhs-fendace-dress-is-a-luxurious-print-party-like-no-other-for-dance-deewane-juniors-3062661",
      },
      {
        img: "https://c.ndtvimg.com/2022-06/8pu9esho_saiymi_625x300_15_June_22.jpg",
        text: "Abhishek Bachchan's Ghoomer Co-Star Saiyami Kher Thinks Film Is Too Good To Be True",
        path: "https://www.ndtv.com/entertainment/ghoomer-too-good-to-be-true-says-saiyami-kher-about-abhishek-bachchan-and-team-3068216",
      },
    
      {
        img: "https://c.ndtvimg.com/2022-06/75q8gaq_hardik-pandya-bcci_625x300_11_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
        text: "Low On Fuel Plan Amit Mishra's Tweet On Lucky Hardik Pandya Goes Viral",
        path: "https://sports.ndtv.com",
      },
    
      {
        img: "https://c.ndtvimg.com/2022-06/ndpodk3_malaika-arora_625x300_04_June_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        text: "“Blueberry Pancakes For The Win,” Says Malaika Arora As She Relishes The Scrumptious Dessert",
        path: "https://food.ndtv.com/news/malaika-arora-s-sunday-indulgence-will-leave-you-with-hunger-pangs-3060272",
      },
    
      {
        img: "https://c.ndtvimg.com/2022-06/l1htv1n_sara-ali-khan_625x300_04_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
        text: "Sara Ali Khan's Cheat Day Is All About Croissants, Chocolate And Honey - See Pic",
        path: "https://food.ndtv.com/news/sara-ali-khan-s-cheat-day-involves-these-classic-french-dishes-3062963",
      },
      {
        img: "https://c.ndtvimg.com/2022-06/o802htd8_sunil-harshana-aravalli-range_625x300_10_June_22.jpg",
        text: "मुश्किलों को परे हटा अरावली के पहाड़ों और मांगर के जंगलों को बचाने में जुटे सुनील हर्षाना",
      },
      {
        img: "https://c.ndtvimg.com/2022-06/v5bn8hmg_bengaluru-prithvi-mangiri_625x300_09_June_22.jpg",
        text: "मैकेनिकल इंजीनियर से ड्रमर बने पृथ्वी मंगिरी से अब बिजली विभाग खरीदता है बिजली, कभी बिल से थे परेशा",
      },
      {
        img: "https://c.ndtvimg.com/2022-06/turanmf_beru-matimand-pratishthan_625x300_08_June_22.jpg",
        text: "दिव्यांगजनों के लिए सम्मान की जिंदगी जीने का अवसर बना बेरू मतिमंद प्रतिष्ठान",
      },
      {
        img: "https://c.ndtvimg.com/2022-06/8u9mqdmo_edwin-joseph_625x300_03_June_22.jpg",
        text: "बेंगलुरू के Sparrow Man के तौर पर पहचाने जाते हैं एडविन जोसेफ",
      },
      {
        img: "https://c.ndtvimg.com/2022-06/2uvvr6jo_lottoland-warriors_625x300_13_June_22.jpg",
        text: "बेंगलुरू के इस घर में केवल Rain water का ही होता है उपयोग",
      },
      {
        img: "https://c.ndtvimg.com/2022-06/2ie4kmk8_lottoland-warriors_625x300_02_June_22.jpg",
        text: "Meet Bengaluru's Sparrow Man - Edwin Joseph",
      },
  ];

  
 const appendAddvertismentNews = (d) => {
    
     let right_side_container = document.getElementById("right-side-div_dream");
     right_side_container.innerHTML = null;
      
     d.forEach(function(el){

        let smbox = document.createElement("div");
        smbox.id="smbox_dream";
        smbox.onclick =()=>{
         window.location.href=el?.path;
        }
    
        let img = document.createElement("img");
        img.src=el.img;
    
        let text = document.createElement("h4");
        text.innerText = el.text;
       
       
        smbox.append(img,text);
        right_side_container.append(smbox);
      })
     
     };

     const addNews =() => {
     
       let data = addvertisement;
       console.log("add-data:",data);
       appendAddvertismentNews(data);
        };
       addNews();


