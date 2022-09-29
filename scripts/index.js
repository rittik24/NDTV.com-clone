import { header} from "./script/header";
import { footer} from "./script/footer";
let header = document.querySelector("#header");
header.innerHTML=header();
let footer = document.querySelector("#footer");
footer.innerHTML=footer();
alert("hello")