//დაწერეთ ფუქნცია, სახელად sayHello, რომელიც დაპრინტავს - "Hello, World".
let sayHello = function() {
console.log("hello world");

}
sayHello();
//დაწერეთ ფუნქცია, სახელად greet, 
//რომელიც პარამეტრა მიიღებს სახელს და დაპრინტავს - "გამარჯობა, [სახელი]"

function greet(name){
  return "გამარჯობა, " + name;
}
console.log(greet("მაია"));
//დაწერეთ ფუნქცია, სახელად sum, რომელიც არგუმენტებად მიიღებს ორ რიცხვს და 
//დააბრუნებს მათ ჯამს. შედეგი გამოიტანეთ ტერმინალში.
function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(5, 3);
console.log(result);
//დაწერეთ ფუნქცია, სახელად calculateArea, რომელიც არგუმენტად 
//მიიღებს ოთხკუთხედის სიგრესა და სიგანეს
// და დააბრუნებს მის ფართობს. შედეგი გამოიტანეთ ტერმინალში.
let calculateArea = function(x,y){
 return x*y;
}

console.log(calculateArea(5, 6));
//5.დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და 
//დააბრუნებს მათ შორის უდიდესს. გამოიყენეთ 
//სამივე - Function Declaration, Function Expression, Arrow Function.

function findMax(num1, num2) {
 
  if (num1 > num2) {
    return `${num1} მეტია ${num2}`;
  } else if (num2 > num1) {
    return `${num2} მეტია ${num1}`;
  }

    return 'ერთმანეთის ტოლია';

}
console.log(findMax(6, 3));

//6.დაწერეთ ფუქნცია, რომელიც პარამეტრად მიიღებს იმ რაოდენობას, რამდენჯერად უნდა გამოკონსოლდეს "Hello, World".
function greetHelloWorld(numTimes) {
  for (let i = 0; i < numTimes; i++) {
      console.log("Hello, World");
  }
}
greetHelloWorld(5);
//1.დაწერეთ ფუქნცია, სახელად celsiusToFahrenheit, რომელიც პარამეტრად მიიღებს ცელსიუსს და გადაიყვანს ფარენჰეიტში. ფორმულა - (Celsius * 9/5) + 32
function celsiusToFahrenheit(Celsius){
return (Celsius * 9/5) + 32
}
console.log(celsiusToFahrenheit(0));
//8.დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.
function sumDigits(num) {
    let  sum = 0;
    let numToString = String(num); 
    for (let i = 0; i < numToString.length; i++) {
      sum = sum + Number(numToString[i]);
    }
    return sum;
  }
  console.log(sumDigits(100));
 //9.დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.
let countBs = (text) => {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'B') {
      count++;
    }
  }
  return count;
};
console.log(countBs('BitCamp'));
//10.დაწერეთ ფუნქცია, რომელიც მიიღებს ორ პარამეტრს და დააჯამებს ყველა რიცხვს გარკვეულ შუალედში. მაგალითად შეკრიბავს რიცხვებს 5-დან 100-მდე.
 function sum(num1, num2) {
    let sumNumbers = 0;
  
    for (let i = num1; i < num2; i++) {
      sumNumbers += i;
    }
    return sumNumbers;
  }
  console.log(sum(5, 100));
//11.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი (თავიდან და ბოლოდან იგივენარიად იწერება) და false-ს თუ არაა პალინდრომი.
function PalindromOrNot(text) {
  let reverse = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
  }
  return reverse == text;
}
console.log(PalindromOrNot('გამარჯობა'));