const titleCase = (title, minorWords) => {
  title = title.toLowerCase();
  const words = title.split(" ");
  let minorWordsArray = [];
  if (minorWords) minorWordsArray = minorWords.toLowerCase().split(" ");

  const titleArray = words.map((word, index) => {
    return index === 0
      ? word[0].toUpperCase() + word.slice(1)
      : minorWordsArray.includes(word)
      ? word.toLowerCase()
      : word[0].toUpperCase() + word.slice(1);
  });
  title = titleArray.join(" ");
  return title;
};

console.log(titleCase("a clash of KINGS", "a an the of")); //,  "A Clash of Kings"
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); //,  "The Wind in the Willows"
console.log(titleCase("the quick brown fox")); //, "The Quick Brown Fox");

/*

Title Case    

A string is considered to be in title case if each word in the string
is either (a) capitalised (that is, only the first letter of the word 
is in upper case) or (b) considered to be an exception and put entirely 
into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an
optional list of exceptions (minor words). The list of minor words will
be given as a string with each word separated by a space. 

Your function should ignore the case of the minor words string -- it should behave 
in the same way even if the case of the minor word string is changed.

*/
