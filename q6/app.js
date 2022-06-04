const array = [
  { name: 'James', age: 9, country: 'United States' },
  { name: 'Rony', age: 31, country: 'United Kingdom' },
  { name: 'Peter', age: 58, country: 'Canada' },
  { name: 'Marks', age: 20, country: 'Spain' }
]

let tbody = document.getElementById('tbody');


array.forEach(item => {

  console.log(item);
  let tr = document.createElement('tr');
  for (const key in item) {
    let td = document.createElement('td');
    td.innerHTML = item[key];
    tr.appendChild(td);
  }
  if(item.age < 10)tr.style = 'background-color:yellow';
  if(item.age >= 10 && item.age<40)tr.style = 'background-color:green';
  if(item.age >= 40 && item.age<80)tr.style = 'background-color:red';
  if(item.age >= 80)tr.style = 'background-color:blue';
  tbody.appendChild(tr);
})
