import "./styles/fontawesome-free-5.14.0-web/css/all.css";
import "./styles/style.css";
import main from './script/view/main.js';
import feature1 from '../img/image1.jpg';
import feature2 from '../img/image2.jpg';


document.querySelector('.feature-1').src = feature1;
document.querySelector('.feature-2').src = feature2;
document.addEventListener("DOMContentLoaded", main);