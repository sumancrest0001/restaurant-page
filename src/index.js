import addMenu from './views/menuViews';
import addContact from './views/contactViews';
import { addNavbar, addLanding } from './views/homeViews';

const mainDiv = document.querySelector('#content');

function loadHomePage() {
  mainDiv.insertAdjacentHTML('beforebegin', addNavbar());
  mainDiv.insertAdjacentHTML('beforeend', addLanding());
}
window.onload = loadHomePage();

function clearHTML() {
  mainDiv.innerHTML = '';
}
const navbar = document.querySelector('.navbar');

function addActiveClass(text) {
  const items = document.getElementsByClassName('nav-item');
  const itemArr = Array.prototype.slice.call(items);
  itemArr.forEach(item => {
    if (item.textContent === text) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function switchTabs(e) {
  const selectedTab = e.target.textContent;

  clearHTML();
  switch (selectedTab) {
    case 'Home':
      mainDiv.insertAdjacentHTML('beforeend', addLanding());
      addActiveClass(selectedTab);
      break;
    case 'Menu':
      mainDiv.insertAdjacentHTML('beforeend', addMenu());
      addActiveClass(selectedTab);
      break;
    case 'Contact Us':
      mainDiv.insertAdjacentHTML('beforeend', addContact());
      addActiveClass(selectedTab);
      break;
    default:
      mainDiv.insertAdjacentHTML('beforeend', addLanding());
      addActiveClass(selectedTab);
      break;
  }
}

navbar.addEventListener('click', switchTabs);
