let myGlobal = 10;

function fun() {
  myGlobal = 5;
  let ourGlobal = 5;
}

console.log(myGlobal);
console.log(ourGlobal);
