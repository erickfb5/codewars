// Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = (x) =>
  x.toLowerCase().split("").reverse().join("") === x.toLowerCase();


  console.log(isPalindrome("a"))// => true
  console.log(isPalindrome("aba"))// => true
  console.log(isPalindrome("Abba"))// => true
  console.log(isPalindrome("hello")),// =>false
  console.log(isPalindrome("Bob"))// => true
  console.log(isPalindrome("Madam"))// => true˜