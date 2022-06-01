const items = document.querySelectorAll('tr');

items.forEach(item => {
  switch (item.className.split(' ')[0]) {
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
      item.classList.add("bg-black" , "text-white");
      break;
    default:
      break;
  }
})