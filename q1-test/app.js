let blockMenu = document.getElementById("block-menu");

let navbtns = document.querySelectorAll('.nav-content a');
Array.from(navbtns).forEach(function(btn){
  btn.addEventListener('click',function(e){
    e.target.style.backgroundColor = "#B4CD93";
    navbtns.forEach(item=>{
      if(e.target.id != item.id){
        item.style.backgroundColor = "";
      }
    })
  })
});

function closeMenu() {
  blockMenu.classList.remove('menu-open');
  blockMenu.classList.add('menu-close');
}
function openMenu(event) {

  event.stopPropagation();
  blockMenu.classList.add('menu-open');

  
}

function changeTheme(event) {
  if(event.target.value === 'on'){
    blockMenu.classList.add('bg-dark');
    event.target.value = 'off';
  }else if(event.target.value === 'off'){
    blockMenu.classList.remove('bg-dark');
    blockMenu.classList.add('lightthem');
    event.target.value = 'on';
  }

}