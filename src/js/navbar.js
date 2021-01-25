import img from '../logo.jpg';


function navbar() {
    let nav_cont = document.createElement("div");
    let image_cont = document.createElement("div");

    let tabs_cont = document.createElement("div");
    tabs_cont.classList.add('tabs-cont');
    nav_cont.appendChild(image_cont);
    nav_cont.appendChild(tabs_cont);
    const image = new Image();
    image.src = img;
    image.classList.add("logo");
    image_cont.appendChild(image);

    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");

    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');
    contact.setAttribute('id', 'contact');


    const home_text = document.createTextNode('Home');
    home.appendChild(home_text);
    const menu_text = document.createTextNode('Menu');
    menu.appendChild(menu_text);
    const contact_text = document.createTextNode('Contact us');
    contact.appendChild(contact_text);

    tabs_cont.appendChild(home);
    tabs_cont.appendChild(menu);
    tabs_cont.appendChild(contact);

    nav_cont.classList.add("nav_cont");
    const containerOut = document.getElementById('content');
    containerOut.innerHTML = '';
    containerOut.appendChild(nav_cont);

}

// navigation();
export { navbar as default };