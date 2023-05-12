/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  const l = numbers.length;

  if (l % 2 == 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isArrayLengthOdd([1, 2, 3]);

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  const l = numbers.length;
  if (l % 2 == 0) {
    console.log(True);
  } else {
    console.log(false);
  }
}
isArrayLengthEven([1, 2, 3]);

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */

function addLailaToArray(instructors) {
  instructors.push("laila");
  console.log(instructors);
}
addLailaToArray(["Mshary", "Hasan"]);
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  teams.pop("Italy");
  console.log(teams);
}
eliminateTeam(["Brazil", "Germany", "Italy"]);
/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */

function secondHalfOfArrayIfItIsEven(fruits) {
  const l = fruits.length;
  if (l % 2 == 0) {
    const lastTwo = [fruits[2], fruits[3]];
    console.log(lastTwo);
  } else if (l % 2 == 1) {
    const lastTwo = [];
    console.log(lastTwo);
  }
}
secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
//secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"])
/**
 
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  const place = shout.indexOf("!");
  const text = shout.slice(0, place);

  console.log(text, "!");
}
youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!");
