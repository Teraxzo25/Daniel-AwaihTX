// document.getElementById("demo").innerHTML = "Hi!"
// document.write("Hello!");
// alert("thank you ");
// console.log("today is quickly");
// let food = "rice"
// document.getElementById("demo").innerHTML = food;
// console.log(food);
// var number = 55;
// console.log(number);

// var car = "toyota";
// console.log(car);
// car = "benz";
// console.log(car);
// let x = 55;
// let y = 30;
// let z = x + y;
// console.log(z);
// alert("hi there !")
// prompt("How Old are You?");


// let age = prompt("How Old are You?");
// alert(`You are ${age} years old.`);

// // Strings to number
// let num = "24";
// let value = number(num);
// console.log(value);

// let number = 124;
// let value = String(number);

// console.log(value)
// let value = 23 % 7;
// console.log(value);

// Exponetiation
// let value = 5**2
// console.log(value);

// let year = prompt("In which year did Covid-19 paralyze the world");
// if(year == 2020){
//       alert(" correct! well done")
// }
// else if(year > 2020){
//     alert("To High Oga")
// }
// else if(year < 2020){
//     alert("be like say no you well abii")
// }
// else{
//     alert("Wrong answer! Try again")
// }
// let year = prompt("How Old are You?");
// if(year == 18){
//       alert("Welcome Age Accepted")
// }
// else if(year< 18){

//     let permit = prompt("Do You Have permition from Your Parents?")
//     if(permit == "yes"){
//         alert("Be like say you dey mad abii watin you this pikin won see ni")
// }
// else{
//     alert("Access Denied get out of here Ashawo pikin")
// }
// }
// let input = document.getElementById("input").vlaue;

// Function
// function addsum(){
//     let x = 5;
//     let y = 13;
//     let z = x + y;
//     console.log(z)
// }

// addsum();

// function checkAnswer(){
//     let input = document.getElementById("input").value;
//     if(input == "1"){
//     document.getElementById("output").innerHTML = "Correct well! done";
//     document.getElementById("output").style.color = "green";
// }
// else{
//     document.getElementById("output").innerHTML = " wrong answer! Try"
//     document.getElementById("output").style.color = "red"
// }
// }
        
// let name = "john";
// let age = "19";
// let occupation = "wed developer";
// let car ="benz"
// let info = `my name is ${name}, I am ${age} years old, I am a ${occupation} and i dive a ${car}`;
// document.getElementById("demo").innerHTML =info;

// let price1 = 5000;
// let price2 = 3500;
// let totalprice = price1 + price2;

// let detail = `yesterday i bought fuel for ${price1}.
// today i am buying it for ${price2}...I have a spent a total of ${totalprice}so far`;
// document.getElementById("demo").innerHTML = detail;

// string methods

// let text = "I am a Good and Bad ethical hacker";
// let text = text.length;
// console.log(size);

// slice()
// note positve value starts accounting from zero 
// but negative values starts accounting from the back using -1 
// inputing one one value it accounts the number of values and pick the rest 

// Substr()

// replace()
// let info = "i am learning wed development in javascriptonana"
// let newInfo = info.replace(/javascriptonana/i, "heaven")
// console.log(newInfo) 
// note: replace is caches sensetive

// toUpperCase and tolowerCase
// let info = "i am learning wed development in javascriptonana"
// let newInfo = info.toLowerCase(/javascriptonana/i, "heaven")
// console.log(newInfo) 

// concat()
// let firstName = "John"
// let lastName = "thomas"
// let fullName = firstName + lastName 
// console.log(fullName)

// split
// let X ="a,b,c,d,e,f,g";
// let newX = X.join(",");
// console.log(newX);
// document.getElementById("demo").innerHTML = newX

// let x = "100";
// let y = "10";
// let z = x / y;
// console.log(z);

// Number Method
// toString()
// let x = 123;
// let y = x.toString();
// console.log(y);

// toExponential()
// let x = 9.5674;
// let y = x.toFixed(2);
// (THIS means take x to a number of  desimal places)
// console.log(y);

// Math Method
// Math round
// math ceil() roundup
// math.floor()rounddown
// math.trunc()
// math.pow()rise to the power
// math.sqrt square root
// let x = math.round(5.55);
// console.log(x);
// let x = math.ceil(5.24)
// console.log(x)


// ASSIGNMENT

// research for
// strings , math, number and object and arrray

// JAVASCRIPT.INFO

// let food = ["rice","beans", "yam", "soup"];
// // let y = food.length

// console.log(food[0]);

// let user ={
//     name: "john",
//     age:50,
//     car:"benz",
//     occupation:"wed Developer"
// }

// to change a value in food
// let food = ["rice","beans", "yam", "soup"];
// console.log(food[3]);
// console.log(food[food.length - 3])
// let len = food.length;

// let text = "<ul>"
// for(let i = 0; i < len; i++){
//     text += "<li>" + food[i] + "</li>";
// }

// text += "</ul>"

// console.log(text);
// document.getElementById("demo").innerHTML = text;


// forEach

// let food = ["rice","beans", "yam", "soup"];

// let text = "<ul>";
// food.forEach(myFood);
// text +="</ul>";

// function myFood(value){
//     text += "<li>" + value + "</li>";
// }

// document.getElementById("demo").innerHTML = text;

// push()
// let food = ["rice","beans", "yam", "soup"];

// food.push("pizza") addeds to the last 
// food.pop(); removes the last   
// food.shift(); remove  the first
// food.unshift("mmango"); add to the first
// console.log(food);

// splice
// let food = ["rice", "beans", "yam" ,"soup" ];
// food.splice(2,4, "food", "matthem")
// console.log(food);

// slice
// let food = ["rice", "beans", "yam" ,"soup" ];
// food.slice(2,3)
// console.log(food)

// sort 
// reverse
// reduce
// filter 
// every 
// some 

// Object Mathods
// let user = {
//     name = "john",
//     age:50,
//     car:"mazda",
//     occupation:"Wed Developer" 
// }
// console.log(user)

// let user = {
//     name = "john",
//     age:50,
//     cars:{
//         car1:"ford",
//         car2:"lambogini",
//         car3:"ferrari",
//         car4:"royce rollers"},
// }

// occupation:"Wed Developer" 

// let user = {
        // name:"john",
        // age:50,
        // car:"peugeot 55",
        // occupation:"Wed Developer",
        // data:function(){
        //     return this.occupation;
        // "martial status": "Married"
        // }

    // console.log(user.name + "," + user.age + "," +  user.cars)

    // by loop
    // let text = " ";
    // for (let x in user){
    //     text += user[x] + " ";
    // }

    // console.log(text);

    // converting into an array

    // let myArray = Object.values(user);
    // console.log(myArray);


    // debugging
    // JSON.versions

    // let form = document.createElement("form");
    // let body = document.getElementById("body");

    // body.appendChild("form");

    // let label = document.createElement("label")
    // setTimeout(() =>{
    //     let a =5;
    //     let b =20;
    //     let c = a + b;
    //     console.log(c)
    // }, 4000);

    // let x = 60;
    // let y = 99;
    // let z = y + z;
    // console.log(z)

    // let firstName = "john";
    // let lastName = "Thomas"
    // let fullName = firstName + " " + lastName;
    // console.log(fullName)
    

    // Asynchronous Javascript....Callback, Promise, Async and Await

    // Backend
    // let stocks = {
    //     fruits: ["strawberry", "grapes", "Banana", "Apple"],
    //     liquid: ["Water", "ice"],
    //     holder: ["cone", "cup", "plate"],
    //     toppings: ["chocolate", "milk"]
    // }

    // callback
    // order(fetch)
    // production(process)

    // let order = (fruitName, callProduction) =>{
    //     setTimeout(function(){
    //         console.log(`${stocks.fruits[0]} was selected`);
    //         callProduction();
    //     }, 2000)
    // }

    // let production = () =>{
    //     setTimeout(() => {
    //      console.log("The fruit was cut");
    //      setTimeout(()=>{
    //          console.log(`${stocks.liquid[0]}and ${stocks.liquid[1]}was added`)
    //          setTimeout(()=>{
    //              console.log("the machine was started")
    //              setTimeout(()=>{
    //                  console.log(`${stocks.holder[0]}Was picked`);
    //                  setTimeout(()=>{
    //                      console.log(`${stocks.toppings[1]}was selected`);
    //                      setTimeout(()=>{
    //                          console.log("ice cream is served");
    //                      }, 2000)
    //                  },3000)
    //              }, 2000)
    //          }, 1000)
    //      },1000)   
    //     },2000);
    // }

    // order

    // Real life Case Senario ... Callback

    function myDisplay(some){
        document.getElementById("demo").innerHTML = some;
    }

    
