'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex, categoriesIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.categories[categoriesIndex],
    ];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 0,
    time = '19:30',
    address,
  }) {
    console.log(
      `Order already received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
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
