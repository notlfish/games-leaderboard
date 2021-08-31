import './style.css';

function component() {
  const element = document.getElementsByTagName('h1')[0];

  element.innerHTML = 'Project setup';

  return element;
}

document.body.appendChild(component());
