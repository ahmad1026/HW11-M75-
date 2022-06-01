let navbtns = document.querySelectorAll('#navbar a');
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



let hour = document.querySelector('.section3-box2 .time-hour');
// setInterval(()=>{
//   hour.style.transform = "scale(1.5)";
//   console.log(hour);
//   hour.style.transform = "scale(1)";
// },1000)


