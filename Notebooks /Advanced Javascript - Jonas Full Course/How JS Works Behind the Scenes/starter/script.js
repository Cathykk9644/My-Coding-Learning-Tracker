'use strict';

function calAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1980 && birthYear <= 1996) {
      var millenial = true; // pre ES6 variable & it belongs to the closest function scope

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Sam';
      // JS will perform variable lookup in the current scope 1st & if it cannot locate the variable, it would perform variable lookup in the parent scopes

      // Reassigning outer scope's varialbe
      output = 'NEW OUTPUT';

      const str = `Wow you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(66, 9));
    }

    // console.log(add(1, 2)); Under strict mode, function scope is block scope, so it would reference error. If not under strict mode, it shall work outside the block scope

    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Cathy';
calAge(1989);
