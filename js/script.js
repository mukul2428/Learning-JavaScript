let btn = document.querySelector('button');
btn.addEventListener('click',inputMsg);
function inputMsg(){
    let name = prompt("Enter your Name:");
    btn.textContent = 'Name:' + name;
}

var nam = 'Mukul';
var channel = 'Tech Expert';
var temp = `${nam} is a Youtuber`;
console.log(temp);
var length = nam.length;
console.log(`Length of ${nam} string is: ${length}`);
var s = new String("Mukul");
console.log(s);
var str = "This is PC"
console.log(`First occurence of string "is" : ` + str.indexOf("is"));
console.log(`Last occurence of string "is" : ` + str.lastIndexOf("is"));
console.log(`Slicing : ` + str.slice(0,6));
console.log("Replace : " + str.replace("This is", "That"));
console.log(str.toUpperCase());
console.log("Concat : " + str.concat(" Test"));
console.log("Trim : " + str.trim());
console.log(`Character Code : ` + str.charCodeAt(2));

//object
let employee = {name : "Mukul", "id 2" : 12, salary : "15k"};
console.log("This is name from object : " + employee.name);
console.log("This is id from object: " + employee['id 2']);

//array
let array = [90, 2, "Mukul", null, undefined];
console.log(array);
let arr = new Array(19, 2, 3, "Mukul");
console.log(arr.sort());
arr.push("This is pushed");
console.log(arr.sort());
let ar1 = new Array(23);
ar1.push("element")
console.log(ar1);

//function
//1
function fun(greeting, name){
    console.log(greeting + "! " + name);
}
fun("Good Morning", "Mukul");

//2
function fun(greeting, name="This is default"){
    console.log(greeting + "! " + name);
}
fun("Good Morning");

//3
function fun(greeting){
    console.log(greeting + "! " + nam);
}
function fun(greeting, nam="This is default"){
    console.log(greeting + "! " + nam);
}
fun("Good Morning");
fun("Good Morning", "Mukul");

//4
function ret(a,b,c){
    return a+b+c;
}
console.log(ret(12,10,1));

//numeric sort
let ar = new Array(19,2,3,1,"Mukul");
console.log(ar.sort(function(a,b){return a-b}));

// //alert
// alert("Welcome");

// //prompt
// let prop = prompt("What is your name ?", "Guest");
// console.log(prop);

// //confirm
// let del = confirm("Do you want to delete this post?");
// console.log(del);

//loops
for(i = 0; i <= 3; i++)
{
    console.log(i);
}
let arrLoop = ["Rohan", "Mukul", "Raghav", "Ankit", "Abhishek"];
for (i = 0; i < arrLoop.length; i++) {
    console.log(arrLoop[i]);
}
console.log("\n");
arrLoop.forEach(function f(element){
    console.log(element);
});

console.log("\n");
for(element of arrLoop){
    console.log(element);
}

//for in loop
let emp = {
    name : "Mukul", 
    "id 2" : 12, 
    salary : "15k"
};
console.log("This is name from object : " + emp.name);
console.log("This is id from object: " + emp['id 2']);
console.log("\n");
for(key in emp){
    console.log(`The ${key} of employee is ${emp[key]}`);
}


//navigating dom

let button = document.getElementById('btn');
console.log(button);
let heading = document.getElementById('heading');
console.log(heading);
let container = document.getElementsByClassName('container');
console.log(container);
let sel1 = document.querySelector('.container > .btn');
console.log(sel1);
let sel2 = document.querySelectorAll('.container > .btn');
console.log(sel2);



//editing html by javascript
document.getElementById('heading').innerHTML = '<h3> This is h3 heading </h3>'