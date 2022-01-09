'use strict';

/* Array 🍕

1. Declaration */
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index postion 
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 마지막 인덱스

//3. Looping over an array
//print all fruits

// a. for
for ( let i = 0 ; i < fruits.length ; i++ ) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach (api)
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index, array);
})

fruits.forEach((fruit) => console.log(fruit)); //arrow


//4. Addtion, deletion, copy
//add an item to the end
fruits.push('🍏', '🍐');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);


//unshift : add an item to the beginning
fruits.unshift('🍏', '🍐');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
fruits.shift();
console.log(fruits);


//note!! shift, unshift are slower than pop, push 전체적인 데이터가 움직여야함
//splice : remove an item by index postion
fruits.push('🍉', '🍋', '🍍');
console.log(fruits);
fruits.splice(1, 1, '🍒'); // index 하나만 쓰면 그 인덱스부터 뒤까지 전부 삭제
// fruits.splice(1, 0, '🍒'); 삭제 안하고 넣기만도 가능
console.log(fruits);

//cimbine two arryas
const fruits2 = ['🍇','🥑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥑')); // -1

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥑'));

//lastIndexOf  같은 데이터가 있을 때
fruits.push('🍉');
console.log(fruits);
console.log(fruits.indexOf('🍉'));
console.log(fruits.lastIndexOf('🍉'));


