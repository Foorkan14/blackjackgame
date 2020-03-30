

// console.log('hello')

// //variaables
// var school="digital crafts"

// //arguments
// function myFunction(){

// }

// //printing

// console.log("hello world")


// //to continue on one line

// 'gpnrsgmsg'
// 'ddgdshd'
// 'hfshsfhsrn'



// //concatenation
// "Hello" + " " + "There"

// //variables

// var undefined; //Undefined (kind of like null)
// var number = 4;
// var float = 4.1;
// var string = "hello world";
// var myBool=true; //note true is lowercase

// //numbers

// var number = 4; //integer
// var otherNumber = 4.1; //float

// //string operators

// var concat = "hello" + "world"; //helloworld
// var concat2 = 4 + "world"; //4world
// var length = concat2.length; //6
// var indexWorld = concat.indexOf('world'); //5 index is a method because it is on a object called concat


// //string length

// var hey = "Hello There";
// hey.length
// // 11



// //boolean

// var boolean = true; //for true
// var boolean=!true;//for false

// console.log(boolean)
// var not=!boolean
// console.log(boolean)

// ///to see how to use and

// var and = boolean && false;
// console.log(and)


// //how to use or
// ||

// var or = boolean || false;


// //checking for equals

// var equals = true = false; //false

// console.log(equals)

//if statements

// var a = 4;
// var b = 3;
// if(a!=b){
//     console.log("equality")

// }

// // example 2 IF statement
// var age = 21
// if (age >= 21) {
//     console.log("You get free beer but beer is haraam");
//   }

// // else if statements, the last else statement will only run if both the if and else if statements dont run

// var age = 20
// if (age >= 21) {
//     console.log("You get free beer but beer is haraam");
//   }
// else if(age<18){
//     console.log("so haraam")
// }
// else{
//     console.log("sorry no beer for you, get a life")
// }

/// if else blocks

// var expr = "papayas";

// if(expr == "oranges"){
//     console.log('oranges are good')
// }
// else if(expr == "mangoes"){
//     console.log('you have printed mangoes')
// }

// else if(expr == 'papayas'){
//     console.log('you have printed out papayas')


// }

// else{
//     console.log('sorry none of your statements matched the expression' + expr ".")

// }


///SWITCH STATEMENT
//SWITCH IS A KEYWORD AND I HAVE A EXPRESSION KIND OF SIMILAR TO ELSE IF IT DOES SAME THING BUT CONDENSES THINGS DOWN

// var expr="papayas"
// switch(expr){

//     case "oranges": //we are checking to see if our case which is oranges matches our expression which is papayas
//         console.log('oranges are good')
//         break;
//     case 'mangoes': //if first case doesnt run then we go to second case
//     console.log('you have printed mangoes')    
//         break;
//     case 'papayas': //if both dont work then it'll come this case 
//     console.log('you have printed papayas')
//         break;
//     default: 
//     console.log('you have printed nothing')
//         break;
// }

//loops
//WHILE LOOPS 

// var count = 0;
// while (count < 10){
//     count = count + 1; //or you can use count++
//     console.log(count);
// }
///for loops

// for (var count=0; count < 10; count ++)
// {
//     console.log(count);
// }



///interloops
// for (var count=0; count < 10; count ++)
// {
//     console.log(count);

//     for(var inner = 0; inner < 3; inner++){

//         console.log(inner)
//     }
// }

//arrays

// var lottoNums = [];

// lottoNums.push(3)

// console.log(lottoNums);
// lottoNums.push(34);
// console.log(lottoNums);

// //to get rid of a number inside a array you pop it

// lottoNums.pop();


//trying to retrieve a element from within the lists

// var lottoNums = [23, 11, 43, 19, 37, 16];
// lottoNums[2]
// console.log(lottoNums[2]); //now when we print we will get 43 as our value

//if you enter a number that isnt within the list then nohing will happen you'll still get it as a return when u print it but it's just not within the list


//reassigning elements within lists

// var lottoNums = [23, 11, 43, 19, 37, 16];
// lottoNums[3]=5 //now 19 will be replaed with 5
// console.log(lottoNums); 


//shift takes off something from the beginning of the array, pop removes elements from end of the array


//splicing

// var lottoNums = 
// [23, 11, 43, 19, 37 16];
// var newNums = lottoNums.splice(2, 1);
// console.log(newNums);

// //splicing with nultiple values

// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var newNums = lottoNums.splice(2, 3);
// console.log(newnums); 
//[43, 19, 37]


//slice
// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]//

// Multiple values
// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]//

// console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

//split separator 

// var words = 'oh hey how is it going';
// var newArray = words.split('is');
// console.log(newArray);
// // ["oh", "hey", "how", "is", "it", "going"]


///Looping through a array

// var words ='oh hey how is it going'

// var reverse= ""

// for (var i = 0; i<words.length; i++){

//     console.log(words[i]) //here i now has the letter or letters from the word variable
//     reverse = words[i] + reverse; //here the reverse variable is taking in nd then adding the letters that i has from the word variable
// }

// var myArray = [1, 2, 4, 5, 7, 0];

// for(var i=0; i<myArray.length; i++){
//     myArray[i] //now i will access each of the letters inside myArray
//     console.log(myArray[i]);

// }


///objects


// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }

// characterSheet["name"]

// console.log(characterSheet["name"])

// //example 2 of objects

// var characterSheet = {}

// characterSheet["Name"] = "Time berners-lee"

// console.log(characterSheet)


//FUNCTIONS

function hello (name) {
    var output = 'Hello ' + name;
    console.log(output);
    return output;
  }