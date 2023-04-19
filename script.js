// Array Methods
//arrayLength

var cities = ["chandigarh", "mumbai" , "channai", "jammuKashmir", "Dehradun", "punjab"];
var len = cities.length;
console.log(len);


// arrayConcat
var countries = ["India" , "japan", "singapur" , "china" , "southKorea" , "America" , "Canada" , "dubai"];
var con = cities.concat(countries);
console.log(con);


//arrayConstructor
var ans = countries.constructor;
console.log(ans)


//arrayCopyWithin
var copy = countries.copyWithin(2,7);
console.log(copy);


// arrayEntries
var x = countries.entries();
for(var y of x ) {
    console.log(y);
}


// arrayEvery
function checkAdult(age) {
    return age >= 18;
}
const arr = [23, 34, 45, 67, 89,21, 80];
var check = arr.every(checkAdult);
console.log(check);


// arrayFill
// countries.fill("Isha");
console.log(countries);


// arrayFilter 
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
function checkEven(number){
    if (number % 2 == 0)
        return true;
        else 
        return false;
}
let num = number.filter(checkEven);
console.log(num);


// arrayFind
function isEven(Num){
     return Num % 2 == 0
}
let evenNum = number.find(isEven);
console.log(evenNum);


//arrayFindIndex
function isOdd(element){
    return element % 2 !== 0
}
 let oddNum = number.findIndex(isOdd);
 console.log(oddNum);


//  arrayFlat
var NUM = [1, 2, [3, 4, [5, 6, [7, 8, [9, 0]]]]];
var Arr = NUM.flat(2);
console.log(Arr);


// arrayValue
let obj = countries.values();
for (let OBJ of obj) {
    console.log(OBJ);
}


// arrayUnshift
countries.unshift("AISA");
console.log(countries)


// arrayToString
let items = ["Anishya" , "ishu" , 20 , 01];
let itemStr = items.toString();
console.log(itemStr);


// arrayToLocalString
let item1 = ['Nepal' , 1001];
let arrStr = item1.toLocaleString();
console.log(arrStr);


// arraySplice
let primeNumber = [2, 45, 34, 67, 89, 12, 34, 56, 78 ,0,];
let removeNumber = primeNumber.splice(4, 2, 24, 26);
console.log(removeNumber);
console.log(primeNumber);


// arraySort
let sortedArr = cities.sort();
console.log(sortedArr);


// arraySome
function isEven(Element) {
    return Element % 2 === 0;
}
let ansNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(ansNum.some(isEven));


// arraySlice
console.log(number)
let newArr = number.slice(2, 3);
console.log(newArr)


// arrayShift
console.log(countries)
var first = countries.shift();
console.log(first);
console.log(countries);

// arrayReverse
let reversArr = number.reverse();
console.log(reversArr);


// arrayReduceRight
console.log(number)
function sum_reducer(accumulator, currentValue) {
    return accumulator + currentValue;
}
let sum = number.reduceRight(sum_reducer);
console.log(sum);


// arrayReduce
const message = ["JavaScript " , "is" , " fun!"];
function joinStrings(accumulator , currentValue) {
    return accumulator + currentValue;
}
let joinStr = message.reduce(joinStrings);
console.log(joinStr);


// arraypush
console.log(cities);
cities.push("London");
console.log(cities);


// arrayPop
console.log(cities);
let removeCity = cities.pop();
console.log(removeCity);
console.log(cities);


//arrayOf 
let alphabet = Array.of("A", "B", "C", "D");
console.log(alphabet);


// arrayMap
function  square(number) {
    return number * number;
}
let sqrNum = number.map(square);
console.log(sqrNum)
 

// arrayLastIndexOf 
let lastArr = number.lastIndexOf(3);
console.log(lastArr);

