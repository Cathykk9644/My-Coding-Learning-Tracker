'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  // [weekdays[3]]
  fri: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${4 + 2}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const orderRate = ['high', 'low', 'medium'];

const restaurant = {
  name: 'Classico Italiano',
  // numGuest: 14,
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: [
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad',
    ['Fried rice, Ice cream'],
  ],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  orderRate,

  order(starterIndex, mainIndex, categoriesIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.categories[categoriesIndex],
    ];
  },

  orderDelivery({ starterIndex = 0, mainIndex = 0, time = '19:30', address }) {
    console.log(
      `Order already received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Hey here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 1,
  time: '23:00',
  address: 'Demot Vol 45',
});

restaurant.orderDelivery({
  mainIndex: 1,
  address: 'Demot Vol 45',
});

// Topic F - ES6 Features
// 1. for of loop - mainly for return of current elements in iterables and can still use the keywords of break and continue
const mergedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(mergedMenu);
for (const item of mergedMenu) console.log(item);

for (const item of mergedMenu.entries()) {
  console.log(item);
}

// 2. Enhanced Object Literal
// A. Just use the variable names declared outside of object scope
console.log(restaurant);
// B. simpler syntax for creating a method attached to an object, refer to lines 44 and 50 for references
// C. Compute property value in object

// 3. ES2020 - Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open); // multiple optional chaining

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining on Method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPljijoj?.(0, 1) ?? 'Method does not exist');

// Optional Chaining on Array
const users = [{ name: 'kkhui', email: '1333@kk.io' }];

console.log(users[0]?.name ?? 'Not found email');

// Topic E - Logical Opeartor Assignment
// 1. ||= OR opeartor assignment: return 1st truthy value (NOT include 0, '', null & undefined)
const rest1 = {
  name: 'lalamove',
  numGuest: 0,
};

const rest2 = {
  name: 'natolia',
  owner: 'via del 67',
};

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 102;
// rest2.numGuest ||= 102;

// console.log(rest1, rest2);

// 2. Nullish operator assignment: return null or undefined

// Topic D - More about Logical Operator (&& AND ||)

// Use ANY data type, return ANY data type, short-circuiting

// 1. Short-circuiting for OR operator (||) : return the 1st truthy value
console.log(0 || 'Catcat');

const guest1 = restaurant.numGuest ? restaurant.numGuest : 99;
console.log(guest1);
const guest2 = restaurant.numGuest || 78;
console.log(guest2);

// 2. Short-circuiting for AND operator (&&): return the 1st falsy value
console.log('hello' && 989 && '23' && 0);
console.log('hello' && 989 && '23'); // if all the operand are ture, then return the last one

restaurant.orderPasta && restaurant.orderPasta('apple', '0' & '0'); // if the first value is true, the 2nd value - the function will be execuated, the AND operator here replace functioanlity of IF STATEMENT

// 3. Nullish: null and undefined (ES2020) (NOT 0 or '')
restaurant.numGuest = 0;
const guest3 = restaurant.numGuest ?? 78;
console.log(guest3);

// 4. AND: return the 1st falsy value
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// Real-world example
const ingredients = [
  // prompt('Ingredient 1?'),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Topic C - Spread Operator: whenever we need the individual elements of an array, the individual values/elements can be passed into function as arguements
const arrOld = [9, 5, 0, 3];
const goodArr = [1, 2, ...arrOld];
console.log(goodArr);
console.log(...goodArr);

const newMenu = ['Apple Pie', ...restaurant.mainMenu];
console.log(newMenu);

function add1(a, b, c, d) {
  return a + b + c + d;
}

console.log(add1(...arrOld));

// 2. Array Copy - Shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// 3. Merge arrarys - only merge the top level of array
const mergeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mergeMenu);

// 4. Spread Operator can be used on Iterables - array, string, maps, sets. Or object

const str = 'Cathy';
console.log(...str);
const newStr = [...str, '', '!!!!'];
console.log(newStr);

// 5. Spread Operator for object

const newEatingPlace = {
  ...restaurant,
  founder: 'Catcatmiu',
  Yearfounded: '2023',
};
console.log(newEatingPlace);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'abc';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
// Topic A - Array Destructuring

// 1. Array Destructuring Assignment Syntax: unpacking the original array & would not change the original array
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

// 2. Array Destructuring: leave a hole like below will skip one element of the original array
let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);

// 3. Array Destructuring: switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// 4. Receive multiple return values from a function
const [starter, mainDish, categoriesDish] = restaurant.order(2, 0, 2);
console.log(starter, mainDish, categoriesDish);

// 5. Destructuring Nested Array
const nested = [2, 4, [5, 7, 9]];
const [i, , j] = nested;
console.log(i, j);
const [l, , [k, m, n]] = nested;
console.log(l, k, m, n);

// 6. Default values: set default value to the left side of the destructing and when certain positions of the arrary of the right side do not exist, the right side would return the default value
const defaultArr = [99, 44];
const [p = 0, q = 0, r = 1, d = 1] = defaultArr;
console.log(p, q, r, d);

// Topic B: Object Destructruing
// 1. Object Destructruing - Basic Syntax
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// 2. How to assign new variable names to properties destructured
const {
  name: restaurantName,
  openingHours: hours,
  categories: type,
} = restaurant;

console.log(restaurantName, hours, type);

// 3. Set default value to property that does not exist in the object
const { menu = [], starterMenu: starters, mainMenu: mains } = restaurant;
console.log(menu, starters, mains);

// 4. Mutating variables
let a = 444;
let b = 999;
const obj1 = { a: 14, b: 99, c: 7 };
({ a, b } = obj1); // Mutated the a, b varialbes declared with the value of a & b from obj1
console.log(a, b);

// 5. Nested objects - How to retrive & mutate variable name

const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);

// 6. Small application ultilizing all the features above for object destructuring - code lines 39 - 60. It basically takes obj and pass into a function as an argrument and destructure the obj in the function immediately. This method is extermely useful for passing multiple arguements into a function without defining it.
*/
