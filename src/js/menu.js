import img from '../burger.jpg';


function menu() {
  const containerOut = document.getElementById('content');
  const foodItems = document.createElement('div');
  foodItems.classList.add('food-items');
  for (let i = 0; i < 4; i += 1) {
    const foodContainer = document.createElement('div');
    const foodItem = document.createElement('div');
    const h5 = document.createElement('h5', 'm-5');
    const desc = document.createElement('p', 'm-5');
    foodItem.appendChild(h5);
    foodItem.appendChild(desc);
    h5.textContent = 'bon Chessee Cheese';
    desc.textContent = 'obono nadb kakdb kb';
    foodContainer.classList.add('foodContainer');
    foodItem.classList.add('card-body');
    h5.classList.add('card-title', 'font-weight-bold');
    desc.classList.add('card-text');
    const foodimage = new Image();
    foodimage.src = img;
    foodimage.classList.add('food-image', 'd-block', 'card-img-top');
    foodContainer.appendChild(foodimage);
    foodContainer.appendChild(foodItem);
    foodItems.appendChild(foodContainer);
  }
  foodItems.setAttribute('id', 'menu-items');
  containerOut.appendChild(foodItems);
}


export { menu as default };