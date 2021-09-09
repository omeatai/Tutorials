let myPTagsAll = document.querySelectorAll("p");
console.log(myPTagsAll);

for(let i = 0; i < myPTagsAll.length; i++){
  myPTagsAll[i].style.backgroundColor = "#84a98c";
  myPTagsAll[i].innerHTML = "This is changed!";
}


// let myHeader = document.querySelector("#my-header");
// let myForm = document.querySelector("form");
// let myInput = document.querySelector("input");
// let submitButton = document.querySelector("input[type='submit']");
// let lastChildOfList = document.querySelector(".cell:last-child");
// let secondChildOfList = document.querySelector(".cell:nth-child(2)");

// console.log(myHeader);
// console.log(myForm);
// console.log(myInput);
// console.log(submitButton);



// myHeader.innerHTML = "my Query header";
// myHeader.style.borderBottom = '20px #ccc solid';
// myForm.style.backgroundColor = '#ccc';
// myForm.style.border = '10px #ccc solid';
// myInput.value = "my sample Text";
// submitButton.value = "ENTER";
// lastChildOfList.style.color = 'blue';
// secondChildOfList.style.color = 'red';






// // cells[2].innerHTML = "my New Mango";
// // cells[2].style.fontWeight = 700;

// // for(let i = 0; i < cells.length; i++){
// //   cells[i].style.backgroundColor = "#84a98c";
// // }
