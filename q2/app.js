let div = document.querySelector('body .wrapper');
let items = div.querySelectorAll('table tr');
let table = document.querySelector('table tbody');
let btns = document.querySelectorAll('button');


div.addEventListener('click', function (e) {
  if (e.target.classList[0] == 'delete5') {
    const rows = div.querySelectorAll('table tr');
    for (let index = 1; index < 6; index++) {
      rows[index].remove();
    }
  }
})





// Array.from(btns).forEach(item => {
//   item.addEventListener('click', function (e) {

//     if (e.target.classList[0] === "delete5") {
//       for (let index = 1; index < 6; index++) {
//         items[index].remove();
//       }
//     } else if (e.target.classList[0] === "add3") {

//       for (let index = 1; index <4; index++) {
//         let row = table.insertRow(0);
//         row.classList.add('flex', 'w-full' , `bg-sky-${index*2}00`);
//         let cell1 = row.insertCell(0);
//         cell1.classList.add("p-4", "w-1/3");
//         let cell2 = row.insertCell(1);
//         cell2.classList.add("p-4", "w-1/3");
//         let cell3 = row.insertCell(2);
//         cell3.classList.add("p-4", "w-1/3");
//         cell1.innerHTML = "NEW CELL1";
//         cell2.innerHTML = "NEW CELL2";
//         cell3.innerHTML = "NEW CELL3";
//       }
//     }
//   })
// })

items.forEach(item => {
  switch (item.classList[0]) {
    case "default":
      item.classList.add("bg-white");
      break;
    case "primary":
      item.classList.add("bg-sky-200");
      break;
    case "secondary":
      item.classList.add("bg-pink-200");
      break;
    case "success":
      item.classList.add("bg-green-200");
      break;
    case "danger":
      item.classList.add("bg-red-200");
      break;
    case "warning":
      item.classList.add("bg-yellow-200");
      break;
    case "info":
      item.classList.add("bg-cyan-200");
      break;
    case "light":
      item.classList.add("bg-orange-100");
      break;
    case "dark":
      item.classList.add("bg-black", "text-white");
      break;
  }
})