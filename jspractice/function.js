// procidual language
// function - sub-programming
// function - input(파라미터)를 받아서 output을 내는 것
// 인풋 아웃풋 함수의 이름 잘 정하는 것 중요

// -fundamental building block in the program
// -프로그램을 구성하는 기본적인 빌딩블럭
// -subprogram cna be used multiple times
// -performs a task or calculates a value

// 1. Function declaration 
// function name(param1, param2) { body... return; }
// one fucntion === one thing
// naming: doSomthing, command, verb
// e.g. creatCardAndPoint -> creatCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hi');
log(1234);

//js는 타입이 없다.
// typescript의 경우 
//function log(message: string) : number {
//  console.log(message);
//  return 0;
//}
//파라미터 타입, 리턴타입 타입을 정확히 명시해야함 
//대규모 프로젝트 팀 프로젝트에서 타입스크립트를 사용하면 좋은 이유가 이거


// 2. Parameters
// premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage(); // 예전에는 body에다가 undifined에 넣고싶은 값 설정해야했는데 이제는 바로 가능


// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);

    for (const arg of args) {
        console.log(arg);
    }
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable 
//밖에서는 안이 보이지 않고, 안에서는 밖이 보인다!
function printMessage() {
    let message = 'hello';
    console.log(message);//local variable
    console.log(globalMessage); // gloabl은 밖 안 어디서도 보임

    function printAnother() {
        console.log(message); // 안에서 밖 보기 가능
        let childMessage = 'hello';
    }
   // console.log(childMessage); // error 밖에서 안 안보임

}
printMessage();
// console.log(message); // error


// 6. Return a value
function sum(a,b) {
    return a + b;
}
const result = sum(1,2); // 3
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
// bad
function upgraderUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

//First-class function
//function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function


//1. Function expression
// a functon declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() { // anonymous function, named function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using funtion expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);




// Arrow function
// alwyas anonymous
const simplePrint1 = function () {
    console.log('simplePrint');
};



const simplePrint2 = (() => console.log('simplePrint!'))(); // IIFE



const add1 = function (a,b){
    return a + b;
};

const add2 = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    //do sth more
    return a * b;
};


// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();


//Fun quiz time
// function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add',1,9 ));

