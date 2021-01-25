function homePage() {
    const containerOut = document.getElementById('content');
    const h1 = document.createElement("h1");
    const h1Text = document.createTextNode("Restaurant de Bon Appetite");
    h1.appendChild(h1Text);
    const p = document.createElement("p");
    const pText = document.createTextNode("Welcome to restaurant de bon appetite, We serve all kind of food like BBQ, Chinese, Continental, Italian, Mexican and for veggies");
    p.appendChild(pText);
    let inner_div = document.createElement("div");
    inner_div.appendChild(h1);
    inner_div.appendChild(p);
    inner_div.classList.add('inner-container');
    const outerDiv = document.createElement('div');
    outerDiv.appendChild(inner_div);
    outerDiv.classList.add('outerDiv');
    h1.classList.add("font-weight-bold");
    p.classList.add("mt-3");
    outerDiv.setAttribute('id', 'outer-div');
    containerOut.appendChild(outerDiv);
}



export { homePage as default };