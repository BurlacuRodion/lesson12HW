var num = 2 //number
var str = 'string' //string
var testBoolean = true //boolean
var testUndefined = undefined //undefined
var testNull = null //null
var testBigInt = BigInt(222) //bigInt
var testSymbol = Symbol('') //symbol

var testArray = [1,2,3,4] //array

var testObj = {
    name: 'Bob',
    age: 12
} //Obj


let a = 2
let b = 1

console.log(a + b) //3
console.log(a - b) //1
console.log(a / b) //2
console.log(a * b) //2
console.log(a-=b) //1

console.log(a++) //2 
console.log(++b) //2

console.log(3**3) //27

let num1 = 3
let num2 = 2 + 1
let num3 = 2 + 2

console.log(num1 === num2) //true
console.log(num1 !== num3) //true
console.log(num1 > num3) //false
console.log(num2 >= num1) //true

let num4 = 1
let num5 = 0
console.log(num4 == true) //true
console.log(num5 == false) //true