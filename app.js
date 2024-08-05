console.log('Hello World');

/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/
/*
const foods = [];  

console.log('Exercise 1 result:', foods);


*/

//Exercise 2
const foods =['pizza', 'cheeseburger']

console.log(foods);

console.log('------------------------------------');


//Exercise 3

foods.unshift('taco');

console.log(foods);
console.log('------------------------------------');
//Exercise 4

const favFood =foods[1]

console.log(favFood);

console.log('------------------------------------');
//Exercise 5


foods.splice(2, 0, 'tofu');

console.log(foods);

console.log('------------------------------------');

//Exercise 6

const index = foods.indexOf('pizza');

if(index !== -1) {
    foods.splice(index, 1, 'sushi', 'cupcake');
}
console.log(foods);

console.log('------------------------------------');

//Exercise 7

const yummy = foods.slice(1,3);

console.log(yummy);

console.log('------------------------------------');
//Exercise 8

const soyIdx = foods.indexOf('tofu');

console.log(soyIdx);

console.log('------------------------------------');

//Exercise 9

const allFoods = foods.join('->');

console.log(allFoods);

console.log('--------------------------------------');

//Exercise 10

const hasSoup =foods.includes('soup');

console.log(hasSoup);


console.log('---------------------------------------');


//Exercise 11

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !==0) {
        odds.push(nums[i]);
    }
}

console.log(odds);
console.log('-------------------------------------------');


//Exercise 12

const fizz =[];
const buzz =[];
const fizzbuzz =[];

for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num % 3 === 0) {
        fizz.push(num);
    } if (num % 5 === 0) {
        buzz.push(num);
    } if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    }
    }

    console.log(fizz);
    console.log(buzz);
    console.log(fizzbuzz);

    console.log('------------------------------');

    //Exercise 13

    const numArrays = [
        [100, 5, 23],
        [15, 21, 72, 9],
        [45, 66],
        [7, 81, 90],
    ];

    const lastIndex = numArrays.length - 1;

    const numList = numArrays[lastIndex];
    console.log(numList);

    console.log('-----------------------------------');

    //Exercise 14

    const num = numArrays[2][1];
console.log(num);

console.log('----------------------------------------');


//Exercise 15

let total = 0;

numArrays.forEach(subArray => {
  subArray.forEach(number => {
    total += number;
  });
});

console.log(total);



















