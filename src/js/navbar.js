import img from '../logo.jpg';


const navbar = () => {
  const navCont = document.createElement('div');
  const imageCont = document.createElement('div');

  const tabsCont = document.createElement('div');
  tabsCont.classList.add('tabs-cont');
  navCont.appendChild(imageCont);
  navCont.appendChild(tabsCont);
  const image = new Image();
  image.src = img;
  image.classList.add('logo');
  imageCont.appendChild(image);

  const home = document.createElement('li');
  const menu = document.createElement('li');
  const contact = document.createElement('li');

  home.setAttribute('id', 'home');
  menu.setAttribute('id', 'menu');
  contact.setAttribute('id', 'contact');


  const homeText = document.createTextNode('Home');
  home.appendChild(homeText);
  const menuText = document.createTextNode('Menu');
  menu.appendChild(menuText);
  const contactText = document.createTextNode('Contact us');
  contact.appendChild(contactText);

  tabsCont.appendChild(home);
  tabsCont.appendChild(menu);
  tabsCont.appendChild(contact);

  navCont.classList.add('navCont');
  const containerOut = document.getElementById('content');
  containerOut.innerHTML = '';
  containerOut.appendChild(navCont);
};


export { navbar as default };