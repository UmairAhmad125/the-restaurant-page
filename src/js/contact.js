const contact = () => {
  const containerOut = document.getElementById('content');

  const h1 = document.createElement('h1');
  const h1Text = document.createTextNode('Restaurant de Bon Appetite');
  h1.appendChild(h1Text);

  const h2 = document.createElement('h1');
  const h2Text = document.createTextNode('Contact Form');
  h2.appendChild(h2Text);

  const f = document.createElement('form');
  f.classList.add('form', 'form-group');

  const i = document.createElement('input');
  i.setAttribute('type', 'textarea');
  i.setAttribute('name', 'Message');
  i.setAttribute('placeholder', 'Type Your Message');


  const s = document.createElement('input');
  s.setAttribute('type', 'submit');
  s.setAttribute('value', 'Submit');
  s.classList.add('btn', 'btn-danger', 'ml-2');

  f.appendChild(i);
  f.appendChild(s);


  const p = document.createElement('p');
  const pText = document.createTextNode('Welcome to restaurant de bon appetite, We serve all kind of food like BBQ, Chinese, Continental, Italian, Mexican and for veggies');
  p.appendChild(pText);

  const innerDiv = document.createElement('div');
  innerDiv.appendChild(h1);
  innerDiv.appendChild(h2);
  innerDiv.appendChild(f);
  innerDiv.appendChild(p);
  innerDiv.classList.add('inner-container');
  const outerDiv = document.createElement('div');
  outerDiv.appendChild(innerDiv);
  outerDiv.classList.add('outerDiv');
  h1.classList.add('font-weight-bold');
  p.classList.add('mt-3');
  outerDiv.setAttribute('id', 'contact-us');
  containerOut.appendChild(outerDiv);
};


export { contact as default };