let in1 = document.getElementById('val1');
let in2 = document.getElementById('val2');
let result = document.getElementById('result');
let counter = 0;



function getAdd(){
  let sum = in1.value*1 + in2.value*1;
  let span = document.createElement('span');
  span.innerHTML = `sum ${counter++} : ${sum}<br>`;
  if(sum%2 === 0){
    span.classList.add('blue');
    result.appendChild(span);
  }else{
    span.classList.add('red');
    result.appendChild(span);

  }


  console.log(sum);

}