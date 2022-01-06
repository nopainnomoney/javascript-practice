// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5 
//use 'use strict' for Vanilla JS
'use strict';

console.log('Hello World!');


//2. Variable rw(read/write)
//let (added in ES6)
// mutable type
//global은 최소한이 좋음 클래스나 함수 if나for문에 사용

let globalName = 'global'
{
let name = 'hayeong';
console.log(name);
name = 'hello';
console.log(name);

console.log(globalName);
}

console.log(globalName);

//var 쓰면 안됨
//var hoisting (move declaration from bottom to top) 
//어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것
//has no block scope! 

{
    age = 4;
    var age;
}
console.log(age);


//3.Constant r(read only)
//use const whenever possible.
//only use let if vaiable needs to change

//let과 다르게 한 번 할당하면 바뀌지않음.
const daysInWeek = 7;
const maxNumber = 5;


//note! 
//Immuatble data types: primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable adta type always for a few reasons;
//-security
//-thread safety
//-reduce human mistakes



//4. Variable types
//primitive, single itme: number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function 

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${globalName}, type: ${typeof gobalName}`);

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1232424325235423n;
console.log(`value: ${bigInt}, type: ${typeof bigInt} `)


// string
const char = 'c';
const brendan = 'brandan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);


//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`)

//undefined 
let x;
console.log(`value: ${x}, type: ${typeof x}`)

//symbol, create unique identificatifier for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === symbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

// object, real-life objects, data structure
const ellie = { name: 'ellie', age: 20};
ellie.age = 21;
console.log(ellie);

// 5. Dynamic typing: dynamically typed language
// 변수를 선언할때 어떤 타입인지 선언하지 않고 프로그램이 동작할때 할당된 값에따라 타입이 변경 됨.
// <> Statically typeed language = C, JAVA - 변수를 선언할 때 어떤 타입인지 결정해서 타입을 같이 선언.
//다이나믹 - 대규모에는 안좋음
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));//에러! 다이나믹 타이핑의 단점 - 나중에 타입이 바뀔 수 있음. - 대안으로 타입스크립트나옴

