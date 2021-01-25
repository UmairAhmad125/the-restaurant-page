import homePage from './page-load';
import menu from './menu';
import navbar from './navbar';
import contact from './contact';

require('../css/style.css');


navbar();
homePage();

let check = 1;

document.getElementById('home').addEventListener('click', () => {
  if (check === 1) {
    const homPage = document.getElementById('outer-div');
    homPage.remove();
    homePage();
  } else if (check === 2) {
    const menuPage = document.getElementById('menu-items');
    menuPage.remove();
    homePage();
  } else {
    const contactPage = document.getElementById('contact-us');
    contactPage.remove();
    homePage();
  }
  check = 1;
});
document.getElementById('menu').addEventListener('click', () => {
  if (check === 1) {
    const homPage = document.getElementById('outer-div');
    homPage.remove();
    menu();
  } else if (check === 2) {
    const menuPage = document.getElementById('menu-items');
    menuPage.remove();
    menu();
  } else {
    const contactPage = document.getElementById('contact-us');
    contactPage.remove();
    menu();
  }
  check = 2;
});

document.getElementById('contact').addEventListener('click', () => {
  if (check === 1) {
    const homPage = document.getElementById('outer-div');
    homPage.remove();
    contact();
  } else if (check === 2) {
    const menuPage = document.getElementById('menu-items');
    menuPage.remove();
    contact();
  } else {
    const contactPage = document.getElementById('contact-us');
    contactPage.remove();
    contact();
  }
  check = 3;
});