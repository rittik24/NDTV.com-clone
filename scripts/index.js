import { header} from "../scripts/header.js";
import { footer} from "../scripts/footer.js";
let headr = document.querySelector("#header");
headr.innerHTML=header();
let footr = document.querySelector("#footer");
footr.innerHTML=footer();