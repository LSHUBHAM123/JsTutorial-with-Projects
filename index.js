//1. Ways to print in Javascript
// console.log("Hello World", 4 + 6, "Another log");
// alert("me");
// document.write("This is the document");  

//2. Javascript console API
// console.log("Hello World");
// console.warn("This is warning");
// console.error("This is an error");



//3. Javascript variables
var num1 = 32;
var num2 = 53;
// console.log(num1 + num2);

//4. Datatype 
//Number 
var num1 = 23;
var num2 = 34.34354;

// String 
var str1 = "Rama";
var str2 = "Shiva";

//Objects 
var marks = {
    ravi: 34,
    hari: 45,
    shubham: 99
}
// console.log(marks);

//Boolean 
var a = true;
var b = false;
// console.log(a,b);

//undefined and null 
var und;
// console.log(und);

var n = null;
// console.log(n);

/*
There are two major data types 
1.Primitive - number , undefined, null , boolean, string 
2.Referenced - array and objects
*/

// var arr= [0,1,2,"bablu",6];

//function in Javascript
//works on DRY principle - do not repeat yourself 
// function avg(a,b)
// {
//     return (a+b)/2;
// }

// var c = avg(4,16);
// c2 = avg(34,45)

// //Loop
// var arr = [1,2,3,4,5,6,7];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac=0;
// console.log(ac++);
//ac++;
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//let myArr = ["fan", 34, "bablu", null, true];
//array methods
// console.log(myArr.length);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

let  elem = document.getElementById('click');
// console.log(elem);
let  elem1 = document.getElementsByClassName('container');
// console.log(elem1);
elem1[0].style.background = "yellow";
elem1[0].classList.add("new1");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elem1[0].innerHTML);
// console.log(elem1[0].innerText);

tn = document.getElementsByTagName('div')
// console.log(tn)

// createdElement = document.createElement('h1');
// createdElement.innerText = "This is a created heading";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('p');
// createdElement2.innerText = "This is a created paragraph";
// tn[0].replaceChild(createdElement2,createdElement);

//selecting using queries
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

//  function clicked(){
//      console.log("the button is clicked.");
//  }

// window.onload = function(){
//     console.log("the document is loaded.");
// }

//events in javascript
//  firstContainer.addEventListener('click',function(){
//      document.querySelectorAll(".container")[1].innerHTML= "<b> We are listening</b>"
//      console.log("Clicked on container");
//  }) 

// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse in container");
// }) 

// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse is out");
// }) 

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML
//  firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll(".container")[1].innerHTML= prevHTML
//      console.log("Mouse up when clicked on container");
//  })

//  firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll(".container")[1].innerHTML= "<b> We are listening</b>"
//      console.log("Mouse down when clicked on container");
//  }) 

//arrow function 
//same as 
// function summ(a,b){
//     return a+b;
// }
// summ = (a,b)=>{
//     return a+b;
// }

//settimeout and setinterval
// logKaro = ()=>{
//     document.querySelectorAll(".container")[1].innerHTML= "<b>Set TimeOut fired</b>"
//     console.log("I am log");
// }
// setTimeout(logKaro,2000); 
// setInterval(logKaro,2000);
// clr = setInterval(logKaro,2000);

// clr = setInterval(clicked,2000);

//Javascript storage 
// localStorage.setItem('name','shubham');
// localStorage;
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

//Json
// obj = {name : "shubham",length: 1,a : {this : 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof(jso))
// console.log(jso)  
// prs = JSON.parse(`{"name":"shubham","length":1,"a":{"this":"that"}}`)
// console.log(prs);

//Template literals- Backticks
// a = 34;
// console.log(`this is my ${a}`);