//Es6 is a modern update of javascript
//widely knows as js6
//this is the version of javascript 



//Es6 or Ecmascript 6 is a scripting language
//Ecmascript is generally used for client-side scripting
//used for writing server applications and services by using Nodejs


//Hello world print

// console.log('Hello world!');


//Es6 Basic syntax

//Syntax
//syntax is the set of rules which defines the arrangements of symbols



//strict mode
// "use strict" - if any mistake occur in your code ,it will show error 
// 'use strict'
// function myFunction()
// {
//     name = "md jasim uddim";
// }
// myFunction();


//spread operator 
//spread means expand,prosar
//three dots ....


// let richCountry = ['Canada','America','Europe'];
// let poorCountry = [...richCountry, 'Bangladesh', 'Pakistan', 'Srilanka'];
// console.log(poorCountry);

// //without spreed operator
// let allCountry = richCountry.push(poorCountry);
// console.log(allCountry);

//using just array Variable name
// let newCountry = [...richCountry,...poorCountry];
// console.log(newCountry);


//Es6 Rest Parameters

//using rest parameter, a function can be called with any number of arguments
//Rest parameter is prefixed with three dots(...)

// function show(first,second,...numbers)
// {
//     let sum = 0;
//     for(let i of numbers){
//         sum += i;
//     }
//     console.log("Sum = "+sum);
//     console.log(numbers);
// }
// show(1,2,2,10,50);

// function restParameter(...paras)
// {
//     for(let x of paras){
//         console.log(x);
//     }
// }
// restParameter('Rahim','Karim','Salam','Borkot', 'Jabbar');
// function restParameter(...paras)
// {
//     let sum = 0;
//     for(let i of paras)
//     {
//         sum += i;
//     }
//     return sum;
// }
// console.log(restParameter(10,20,30,40,50,60));


//dynamic function 
//functions using by constructor function

// var name = function(firstName,lastName)
// {
//     console.log(firstName,lastName);
// }

// console.log(name('md jasim','uddim'));


//Javascript variable

//var
//reassign
//redeclare
//global scope
// var name = "jasim";
// name ='uddim';
// console.log(name);


//let 
//block scope
//not possible redeclare
//reassign possible

// let name = 'hasan';
//  name = 'ali';
// console.log(name);

//const 
//block scope
//not possible redeclare
//not possible reassign

// const name = 'md jasim uddim';
// const name = 'hasan ali';

// const name = 'md nahid ali';
// name = 'delowar hossain';


//variable scope
// Global scope : In the global scope, the variable can be accessed from any part of javascript code.
//local scope: In the local scope, the variable can be accessed within a function where it is declared.


//global scope
// var name = "Ecmascript";
// function myFunc()
// {
//     console.log(name);
// }
// myFunc();


// //local scope
// function myFunc()
// {
//     var name = 'md jasim uddim';
// }
// console.log(name);
// myFunc();

//Hoisting

//firstly assign
//then declare

// name = 'Md Jasim Uddim';
// var name;
// console.log(name);



//loop in javascript

// for(let i = 0; i < 10; i++){
//     console.log('Amar vai er rokte rangano akushe february ami ki vulte pari');
// }


//for ... of loop

// var country = ['Bangladesh', 'India', 'Pakistan', 'Srilanka', 'Maldeep', 'Afganistan','Bhutan','Nepal'];
// for(let x of country){
//     console.log(x);
// }


//Javascript object

// const Ruet = {
//     cse:{
//         students:900,
//         Room:8,
//         lab:10,
//         InternetAvailability:true
//     },
//     Mechanical:{
//         students:1000,
//         labFacility:true,
//         classLecture:'good'
//     }
// }


// const obj = {
//     name:{
//         firstName:'md jasim',
//         lastName:'uddim'
//     },
//     book:{
//         Bangla:'Kazi mehrab',
//         English:'Sohiduzzaman'
//     },
//     YearOfPublications:{
//         BanglaYear:2012,
//         EnglishYear:2015
//     }
// }

// for(let x in obj)
// {
//     console.log(x, " ",obj[x].Bangla);
// }
// console.log(obj["YearOfPublications"]["BanglaYear"]);


// let arr = ['sharif', 'nahid', 'delowar', 'sakil'];
// for(let x of arr){
//     console.log(x);
// }
// //access object
// console.log(Ruet['Mechanical']['classLecture']);

//access using for in loop

// for(let x in Ruet){
//     console.log(x+":"+ Ruet[x]);
// }

//if,else if ,else

// if(Ruet.Mechanical['students'] == 10000){
//     console.log('your information is above what i want');
// }
// else if( Ruet.Mechanical['students'] == 1000)
// {
//    console.log('Correct answer you have given')
// }
// else{
//     console.log('Wrong answer you have given');
// }


//function in javascript
//simple function
// function myFunc()
// {
//     var x = 10;
//     var y = 20;
//     var Z = x + y; 
//     console.log(Z);
// }
// myFunc();

//parametarized function

// function myFunc(x,y)
// {
//     var z = x + y;
//     console.log(z);
// }
// myFunc(10,30);


//Rest parameters
// function myFunc(...x){
//     console.log(x);
// }
// myFunc(1,2,3,4,4,5,'Jasim','Rahim','Karim');


//Function Returns 

// function one()
// {
//     return "20";
// }
// console.log(one())


// function two()
// {
//     return "50";
// }
// console.log(two())

// function one()
// {
//     return "one";
// }
// function two(){
//     return one();
// }
// console.log(two())
// function one()
// {
//     return "30";
// }

// function two()
// {
//     return one();
// }
// console.log(two());

// let obj = {
//     firstName:'jasim',
//     lastName:'uddim'
// }

// function returnObj()
// {
//     return obj;
// }
// console.log(returnObj());

// let person ={
//     firstName:'md jasim uddim',
//     roll:1703035,
//     isAvailability:true
// }
// let returnObj = function(){
//     return person;
// }
// console.log(returnObj());

// let obj = {
//     name:'md liton hossain',
//     age:25,
//     roll:1703045,
//     isGoodStudent:true
// // }
// function litonInfo(){
//     return obj;
// }
// console.log(litonInfo());

//Anonymous function
//A function without a name
//It can be declared dynamically at runtime
//An anonymous function can be assigned within a variable


// var myfunc = function()
// {
//     return "Bangladesh";
// }

// var myfunc = function(){
//     return "Bangladesh is a smaller country in south asia.";
// }
// console.log(myfunc());




//Arrow functions
// To write smaller function syntax
//Arrow functions make your code more readable and structured
//Arrow functions are anonymous functions
//can declare without the function keyword

// () =>{

// }
// var myFunc = () => {
//     return "Banglaesh is a small country in south asia";
// }

// console.log(myFunc());


// var myFunc = (...x) => x;   //return an array
// console.log(myFunc('jasim','Rahim','Karim','salam','kalam'));


// var name = () => {
//     console.log('My name is  md jasim uddim and i am 25 years old');
// }
// name();

// var anotherFunc =()=>{
//     console.log('this is an arrow funciton');
// }
// anotherFunc();


// var person = (...name) => name;
// console.log(person('jasim','Rahim','Karim','Salam','Jabbar'));

//Array in Javascript

//array declaration

// var arr1 = ['Rahim','Karim','salam','jabbar','asraf'];
// var arr2 = new Array('Jasim','samim','musa');
// console.log(arr1[0]);
// console.log(arr2[0]);


//Multidimensional array

// var Bangladesh = ['Dhaka','Rajshahi','Rangpur','Barisal'];
// var India = ['Chennai','Kolkata','Mumbai'];
// var Pakistan = ['Islamabad','lahore','Beluchistan'];

// var asia = [Bangladesh, India, Pakistan];
// console.log(asia);
// console.log(asia[1][2]);


//Destructuring
//Breakdown a complex structure into smaller parts
// var country = ["Ban","Ind","Pak","Sri","China"];
// var [a,,,,e] = country;
// console.log(e);

// var studentName = ['Jasim',"rahim","karim","Sumon","Romjan","nahid"];
// var [a,,,b] = studentName;
// console.log(a);
// console.log(b);

// var [a,,,,b] = ['Rahim', 'Ajom', 'Rubel','Salam','Borkot','Mobassir'];
// console.log(a,b);
// const number = [];
//  const obj = {
//     name:'Rahim',
//     age:25,
//     isStudent:true,
//     Hobby:'cricket'
//  }
//  const {name:number[0],age:number[1]} = obj ;
//  console.log(number);
//  console.log(age);

// const [a,b,...c] = ['Rahim','Karim','Salam','Jabbar','Samim Osman'];
// console.log(a);
// console.log(b);
// console.log(c);
// const obj = {
//     person1:'jasim',
//     age:25
// }
// const {person1, age} = obj;
// console.log(person1);
// console.log(age);
 //Map
//Map is a collection of data
// var map = new Map();
// map.set('set1','Bangladesh')
// map.set('set2','India')
// map.set('set3','Pakistan')
// map.set('set4','Srilanka')
// map.set('set5','Maldeep')
// map.set('set6','Bhutan')

// console.log(map.values());
// console.log(map.keys());

//delete map key and value
// map.delete('set1');
// map.delete('set2');


//clear the data
// map.clear();

//get the data
// console.log(map.get('set1'));
// for(let value of map.values()){
//     console.log(value);
// }


// if(map.has('set1')){
//     console.log('congratulations');
// }else{
//     console.log('you will see the dataset and update');
// }


// var newMap = new Map();
// newMap.set('key1','Bangladesh');
// newMap.set('key2','India');
// newMap.set('key3','Paksitan');
// newMap.set('key4','China');
// newMap.set('key5','Srilanka');

// console.log(newMap.values());
// console.log(newMap);
// console.log(newMap.keys())
// newMap.delete('key1');
// console.log(newMap.values());
// if(newMap.has('keys')){
//     console.log('We have found Bangladesh in the map');
// }else{
//     console.log('we have not found our goal');
// }

// console.log(newMap.get('key1'));

// for(let x of newMap.keys()){
//     console.log(x);
// }


//Set
//set is a collection of data
//it is almost like array
//But it does not contain any duplicates
// var newSet = new Set();
// newSet.add('jasim');
// newSet.add('rahim');
// newSet.add('karim');
// newSet.add('nahid');
// newSet.add('jasim');
// newSet.add('delowar');
// newSet.add('delowar');
// newSet.add('delowar');

//clear property
//console.log(newSet.clear())

//delete property
// console.log(newSet.delete('jasim'));
// console.log(newSet);

//size property
// console.log(newSet.size);


//has property
// console.log(newSet.has('jasim'));



//class

// class myClass{
//      func1(name){
//         console.log('I am inside from class1'+name);
//     }
//     func2(name){
//         console.log('I am inside from class2'+name);
//     }
//     func3(name){
//         console.log('I am inside from class3'+name);
//     }
//     func4(name){
//         console.log('I am inside from class4'+name);
//     }

// }

// var newClass = new myClass;
// console.log(newClass.func2('md jasim uddim'));


// class person {
//     func1(){
//         console.log('This is a function 1');
//     }
// }

// consturctor -> class er own method or function 
//class object toiri hole, constructor automatic call hoye jai
//constructor works like other function
//but constructor can not return any value


// class myFunc{
//     constructor(){
//         console.log('i am inside from constructor function');
//     }
// }
// new myFunc;


//Module - combine, akotrito kichu
//Es6 Module export -> Es6 module import
//Modules make it easy to maintain the code
//debug the code
//reuse the piece of code



// export 
//variable export --> variable import
//function export --> Function import 
//class export    --> class import

// Named : export - import by using same name 
//Default : Export -Import by using any name