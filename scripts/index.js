import { header} from "../scripts/header.js";
import { footer} from "../scripts/footer.js";
let headr = document.querySelector("#header");
headr.innerHTML=header();
let footr = document.querySelector("#footer");
footr.innerHTML=footer();
      google.charts.load("current", {
        packages: ["geochart"],
        // Note: Because this chart requires geocoding, you'll need mapsApiKey.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ["State Code", "State", "Result"],
          ["IN-AN", "Andaman and Nicobar Islands", 9],
          ["IN-AP", "Andhra Pradesh", 10],
          ["IN-AR", "Arunachal Pradesh", 34],
          ["IN-AS", "Assam", 3],
          ["IN-BR", "Bihar", 50],
          ["IN-CH", "Chandigarh", 115],
          ["IN-CT", "Chhattisgarh", 304],
          ["IN-DN", "Dadra and Nagar Haveli", 34],
          ["IN-DD", "Daman and Diu", 94],
          ["IN-DL", "Delhi", 3324],
          ["IN-GA", "Goa", 716],
          ["IN-GJ", "Gujarat", 894],
          ["IN-HR", "Haryana", 1114],
          ["IN-HP", "Himachal Pradesh", 1254],
          ["IN-JK", "Jammu and Kashmir", 374],
          ["IN-JH", "Jharkhand", 3402],
          ["IN-KA", "Karnataka", 644],
          ["IN-KL", "Kerala", 3454],
          ["IN-LA", "Ladakh", 454],
          ["IN-LD", "Lakshadweep", 745],
          ["IN-MP", "Madhya Pradesh", 454],
          ["IN-MH", "Maharashtra", 544],
          ["IN-MN", "Manipur", 654],
          ["IN-ML", "Meghalaya", 154],
          ["IN-MZ", "Mizoram", 54],
          ["IN-NL", "Nagaland", 7641],
          ["IN-OR", "Odisha", 1545],
          ["IN-PY", "Puducherry", 5745],
          ["IN-PB", "Punjab", 4541],
          ["IN-RJ", "Rajasthan", 4857],
          ["IN-SK", "Sikkim", 345],
          ["IN-TN", "Tamil Nadu", 4557],
          ["IN-TG", "Telangana", 5422],
          ["IN-TR", "Tripura", 5456],
          ["IN-UP", "Uttar Pradesh", 788],
          ["IN-UT", "Uttarakhand", 154],
          ["IN-WB", "West Bengal", 5474],
        ]);

        var options = {
          region: "IN",
          resolution: "provinces",
          colorAxis: { colors: ["#ffeb3b", "#ff5722"] },
        };

        var chart = new google.visualization.GeoChart(
          document.getElementById("geochart-colors")
        );
        chart.draw(data, options);
      }
