// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function

const splitCamelCase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += " " + str[i];
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(splitCamelCase("camelCasing"));
