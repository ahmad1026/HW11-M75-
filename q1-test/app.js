let blockMenu = document.getElementById("block-menu");



function closeMenu() {

  blockMenu.classList.remove('d-block');
  
}


function openMenu(event) {

  event.stopPropagation();
  blockMenu.classList.add('d-block');

  
}