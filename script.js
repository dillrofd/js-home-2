
//1 
const celsius = 20;
const fahrenheit = (  celsius - 32 ) * 5/9;
console.log ( fahrenheit );



//2
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log ( hoursInMonth);
console.log ( minutesInMonth);


//3
let energyInPlayer = 100;
let healtInPlayer = 100;
let lowEnergy = ( energyInPlayer - 25);
let lowHealth = ( healtInPlayer - 34);
console.log (lowEnergy);
console.log (lowHealth);


//4
const totalPrice = 6500;
const sale = 0.10;
const salePrice = totalPrice * ( 1 - sale)
console.log ( salePrice)


//5
const floatNumber = 12.78;
const  roundedDown = Math.floor ( floatNumber);
console.log ( roundedDown);


//6
const floatString = "45.67" ;
const parsedFloat = parseFloat(floatString) ;
console.log (parsedFloat);


//7

const intString = "123";
const parsedInt = parseInt(intString) ;
console.log(parsedInt);

// 8

const number = 144;
const  sqrtNumber = Math.sqrt(number);
console.log ( sqrtNumber);

//9

const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt( stringNumber);
console.log ( convertedInt);
const convertedString =  integer.toString();
console.log ( convertedString);
