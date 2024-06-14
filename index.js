function isPalindrome(word) {
  // Write your algorithm here
  // function takes a string and checks if it's spelled the same backwards.
  // yo isn't a palindrome because yo !== oy
  // racecar is a palindrome because racecar === racecar

  word = word.toLowerCase();

  return word === word.split("").reverse().join("")
}
/* 
  Add your pseudocode here
  if word equals reverse word, true, otherwise false
*/

/*
  Add written explanation of your solution here
  utilize knowledge of .reverse() and .join("") methods on arrays 
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
