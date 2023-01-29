// Grasshopper - Personalized Message

// Create a function that gives a personalized greeting.
//      This function takes two parameters: name and owner.

//      Use conditionals to return the proper message:

//case                  return
//name equals owner     'Hello boss'
//otherwise             'Hello guest'

const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

console.log(greet("Erick", "Erick")); // 'Hello boss'
console.log(greet("Erick", "Brandao")); // 'Hello guest'
