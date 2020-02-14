function addNavbar() {
  const navbarSection = `<header class="navbar"><ul>
    <li class="nav-item " id = "home"><a href="#">Home</a></li>
    <li class="nav-item" id = "menu"><a href="#">Menu</a></li>
    <li class="nav-item" id = "contact"><a href="#">Contact Us</a></li></ul></header>`;
  return navbarSection;
}

function addLanding() {
  const landingPageSection = `<div class="container">
  <h1 align="center" class="restro-name">Shrestha Restaurant</h1>
  <p class="description">Test authentic newari recipes, We carried and preserved our newari
   recipes and providing to customers. We have hundreds of dishes from 
   newari culture with authentic flavors.
  </p></div>`;
  return landingPageSection;
}

export { addNavbar, addLanding };
