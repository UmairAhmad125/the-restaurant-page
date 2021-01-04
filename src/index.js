require('./css/style.css');

let h1 = document.createElement("h1");
const h1_text = document.createTextNode("Restaurant de Bon Appetite");
h1.appendChild(h1_text);
let p = document.createElement("p");
const p_text = document.createTextNode("Welcome to restaurant de bon appetite, We server all kind of food like BBQ, Chinese, Continental, Italian, Mexican and for veggies");
p.appendChild(p_text);
let inner_div = document.createElement("div");
inner_div.appendChild(h1);
inner_div.appendChild(p);
inner_div.classList.add("inner-container");
h1.classList.add("font-weight-bold");
p.classList.add("mt-3");
let outer_div = document.getElementById("content");
outer_div.appendChild(inner_div);
console.log("fucker");