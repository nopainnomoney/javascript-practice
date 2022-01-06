//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2); // 문자화된 숫자에 숫자를 더하면 숫자가 문자화 되어 12로 표현됨.
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log("nice to \n \t meet you"); // \n 줄바꿈 \t 탭


// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remiander
console.log(2 ** 3); // exponentiation 제곱


// 3 .Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; counter 에 1을 더한 것을 counter에 할당
// preIncrement = counter; counter를 preIncrement에 할당
console.log(counter); console.log(preIncrement);

const postIncremnet = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(postIncremnet);
console.log(counter); 

const preDecrement = --counter;
//counter = counter - 1;
//preDecrement = counter 
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
//postDecrement = counter;
//counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y // x = x + y;
x -= y // x = x - y;
x *= y // x = x * y;
x /= y // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operators: || (or), && (and), ! (not)
// 연산을 많이하는 함수 or expression들 앞에두지 말 것. 심플한것들 앞에 배치
const value1 = true;
const value2 = 4 < 2;

// || (or) finds the first truthy value 하나라도 참이라면 true , true 발견하면 뒤에값 계산 안함
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value 하나라도 false면 false
console.log(`and: ${value1 && value2 && check()}`);

//often used to compress long if-statement 
//nullableObject && nullableObject.something
//  if (nullableObject != null) {
//     nullableObject.something;
// }

function chenk() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('^^!')
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == losse equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // ture

//object equality by reference 
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true 


// 8. Conditional operators: if;
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

//10.Switch statement
// use for multiple if checks 
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11.Loops
//while loop, while the condition is truthy,
//body code is executed.
let i =3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}


// do while loop, body code is excuted first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops 
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. literate from 0 to 10 and print only even nembers (use continue)

//Q2. literate from 0 to 10 and print numbers until reaching 8 (use break)


let k = 0;
while (k <= 10) {
    k += 1;

    if ((k % 2) == 1)
        continue;
     console.log(k);
}

let h = 0;
while (h <= 10) {
    console.log(h);
    h += 1;
    if (h > 8)
    break; 
}

//답
for (i = 0; i < 11; i++) {
    if ((i % 2) !== 0) {
    continue;
    }
    console.log(i);
}


for (i = 0; i < 11; i++) {
    if(i > 8) {
        break;
    }
    console.log(i);
}