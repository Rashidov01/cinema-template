// var userName = 'bek';
// var result = '';

// for (var i = userName.length - 1; i >= 0; i--){
//   result = result + userName[i];
// }
// console.log(result);
// var fizzBuzz = [];
// var fizz = [];
// var buzz = [];
// var oddNumber = [];

// for (var i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     fizzBuzz.push(i)
//   } else if (i % 3 === 0) {
//     fizz.push(i);
//   } else if (i % 5 === 0) {
//     buzz.push(i)
//   } else{
//     oddNumber.push(i);
//   }
// };

// console.log(fizzBuzz);
// console.log(fizz);
// console.log(buzz);
// console.log(`bu son lar bolinmayd hech qaysiga ${oddNumber}`);


var elForm = document.querySelector('.main-form');
var elInput = elForm.querySelector('.main-input');
var elResult = document.querySelector('.result');
var elBtn = document.querySelector('.output-btn');
elForm.addEventListener('submit', function(e){
  e.preventDefault();

  for(var i = 0; i <= 100; i++){
    if(elInput.value % 3 === 0 && elInput.value % 5 === 0){
      elResult.textContent = 'FizzBuzz';
    } else if (elInput.value % 3 === 0){
     elResult.textContent = 'Fizz';
    } else if(elInput.value % 5 === 0){
      elResult.textContent = 'Buzz';
    } else{
      elResult.textContent = `${elInput.value} (3 ga ham 5 ga ham bolinmaydi)`
    };
  }
})