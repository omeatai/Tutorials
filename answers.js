

//######################
//######################
// FOR-OF METHOD
//######################
//######################

// 1.Log each sub-element in arr one at a time using for-of method.
// let arr = [[1,2], [3,4], [5,6]];

// let arr = [[1,2], [3,4], [5,6]];
// for(let i of arr) {
//   for(let j of i){
//     console.log(j);
//   }
// }





//######################
//######################
// FOREACH METHOD
//######################
//######################

// 1.Use forEach method to loop through the array and log the values.
// const nums = [9,8,7,6,5,4,3,2,1];

// nums.forEach(function (el){
//   console.log(el);
// });


// 2.Use forEach method to loop through the array and log the square of each value.
// const nums = [9,8,7,6,5,4,3,2,1];

// nums.forEach(function (n){
//   console.log(n * n);
// })


// 3.Use forEach method to loop through the array and log the even numbers amongst the values.
// const nums = [9,8,7,6,5,4,3,2,1];

// nums.forEach(function (el){
// 	if(el % 2 === 0){
//     console.log(el);
//   }
// });


// 4.Use forEach method to loop through the array and log the score values in this form:
// "The {title} has the score {score}/100."
// 
// const movies = [
//   {
//     title: 'Amadeus',
//     score: 99
//   },
//   {
//     title: 'Game of Thrones',
//     score: 86
//   },
//   {
//     title: 'Viral',
//     score: 42
//   }
// ];

// movies.forEach(function (el){
//   console.log(`The ${el.title} has the score ${el.score}/100.`);
// });

//5.Use forEach method to log each sub-element in arr one at a time.
//let arr = [[1,2], [3,4], [5,6]];

// let arr = [[1,2], [3,4], [5,6]];
// arr.forEach(function (i) {
//   i.forEach(function (j){
//     console.log(j);
//   });  
// });
















//######################
//######################
// 040-FOR LOOP NESTING
//######################
//######################

// 1.Log each sub-element in arr one at a time using for loop.
// let arr = [[1,2], [3,4], [5,6]];

// let arr = [[1,2], [3,4], [5,6]];
// for(let i = 0; i < arr.length; i++) {
//   for(let j = 0; j < arr[i].length; j++){
//     console.log(arr[i][j]);
//   }  
// }

//2.Modify a function 'multiplyAll' so that it returns the product of all the numbers in the sub-arrays of arr.
// 
// function multiplyAll(arr) {
//   let product = 1;
//   return product;
// }
// multiplyAll([[1,2],[3,4],[5,6,7]]);

// function multiplyAll(arr) {
//   let product = 1;
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   return product;
// }

// let result = multiplyAll([[1,2],[3,4],[5,6,7]]);
// console.log(result);



//######################
//######################
// 039-FOR LOOP ARRAYS
//######################
//######################

// 1.Log each element of the array arr to the console using for loop.
//let arr = [10, 9, 8, 7, 6];

// arrayLastIndex = arrayLength - 1
// let arr = [10, 9, 8, 7, 6];
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 2.Declare and initialize a variable 'total' to 0. Use a for loop to add the value of each element of the myArr array to total.
//let myArr = [2, 3, 4, 5, 6];

// let myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for(let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }
// console.log(total);



//######################
//######################
// 038-FOR LOOPS
//######################
//######################

//1.Use a for loop to push the values 1 through 5 onto an array "myArray".

// let myArray = [];
// for(let i = 1; i <= 5; i++) {
//   myArray.push(i);
// }
// console.log(myArray);


//2.Push the odd numbers from 1 through 9 to myArray using a for loop.

// let myArray = [];
// for(let i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }
// console.log(myArray);


//3.Push the even numbers from 9 through 1 to myArray using a for loop.

// let myArray = [];
// for(let i = 8; i > 0; i -= 2) {
//   myArray.push(i);
// }
// console.log(myArray);



//######################
//######################
// 037-WHILE LOOPS
//######################
//######################

// 1.Create a while loop that will execute 5 times and append the numbers 0 through 4 to the array "ourArray".

// let ourArray = [];
// let i = 0;
// while(i < 5) {
//   ourArray.push(i);
//   i++;
// }
// console.log(ourArray);

// 2.Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

// let myArray = [];
// let i = 5;
// while(i >= 0) {
//   myArray.push(i);
//   i--;
// }
// console.log(myArray);


//######################
//######################
// 036-NESTED ARRAYS
//######################
//######################

// 1.Access the values "Fluffy" and "Spot" in the array ourPets.

// let ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];

// console.log(ourPets[0].names[1]);
// console.log(ourPets[1].names[0]);

// 2.Using dot and bracket notation, set the variable 'secondTree' to the second item in the trees list from the myPlants object.

// let myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// let secondTree = myPlants[1].list[1];
// console.log(secondTree);




//######################
//######################
// 035-NESTED OBJECTS
//######################
//######################

// 1.Access the sub-properties "folder2" and "drawer" of the object ourStorage and log the values.

// let ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//     "bottom drawer": "soda"
//   }
// };

// console.log(ourStorage.cabinet["top drawer"].folder2);
// console.log(ourStorage.desk.drawer);


// 2.Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. 

// let myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// let gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);


