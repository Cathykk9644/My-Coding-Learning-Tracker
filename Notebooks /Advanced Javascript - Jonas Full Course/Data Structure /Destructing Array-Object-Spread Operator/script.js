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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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

  // Can pass in object to function as arguement and the object would be destructed immediately in the function
  orderDelivery: function (time, address, mainIndex, starterIndex) {
    console.log(time, address, mainIndex, starterIndex, mainIndex);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your yummy pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: '22.30',
  address: '42 TaiWai Street',
  mainIndex: 2,
  starterIndex: 1,
});

const ingredients = [
  // prompt("Let's make pasta, ingredient 1?"),
  // prompt('ingredient 2?'),
  // prompt('ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Spread operator: adding new elements to array with ... with spread operator, it takes all the elements from an arrary, which is different with arrary destructing

const originalArr = [23, 54, 23];
const newArr = [1, 3, ...originalArr];
const newArr2 = [...originalArr, 34, 35];
console.log(newArr);
console.log(newArr2);

const newMenu = ['Apple Juice', ...restaurant.mainMenu];
console.log(newMenu);

// Copy array (showllow copy)
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Merge 2 arrays
const mergedArr = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mergedArr);

// starting in 2018, spread operator can be used for object as well

const newRestaurant = { foundedIn: 2009, ...restaurant, founder: 'Catcatmiu' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Lalalayum';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Object destructing: use {} to unpack object, order does not matter here & it is extremely helpful for retriving data when using data from external API
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// How to give new name to variables when destruting object
const { name: restName, openingHours: hours, categories: tags } = restaurant;
console.log(restName, hours, tags);

// Set defalut value for object destructing
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let e = 24;
let f = 34;
const obj1 = { e: 79, f: 12, k: 7 };
// syntax for wrapping with () to achieve the mutation
({ e, f } = obj1);
console.log(e, f);

// Nested objects: how to retrive data from nested objects
const { fri } = openingHours;
console.log(fri);
const {
  fri: { open: o, close: clo },
} = openingHours;
console.log(o, clo);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructing of array or destructing assignment, it would not break the original array
const [x, y, z] = arr;
console.log(x, y, z);

// add space with comma to skip one element
let [main, , , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a fucntion
const [starter, mainCourse] = restaurant.order(1, 0);
console.log(starter, mainCourse);

// how destructuring of nested array works
const nested = [2, 3, [6, 8]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values, could set default value to p, q & r so that the right hand side of array could have a default value at positon 2 even it does not have value placed on position 2
const [p = 1, q = 1, r = 6] = [9, 4];
console.log(p, q, r);
