import * as flsFunctions from "./modules/functions.js";
import * as navLightInit from "./modules/nav_light.js";
// import * as navInit from "./modules/nav.js";
// import * as navUpInit from "./modules/nav_up.js";
import Swiper, { Navigation, Pagination } from 'swiper';


document.addEventListener("DOMContentLoaded", function() {
  
  flsFunctions.isWebp();

  const swiper = new Swiper();
  
  
  
  navLightInit.navLight();
  // navInit.nav();
  // navUpInit.navUp();
});