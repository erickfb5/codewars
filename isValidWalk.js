const isValidWalk = walk => {
  let north = 0, south = 0, west = 0, east = 0;
  
  walk.map(direction => 
    direction === 'n' ? north++ : 
    direction === 's' ? south++ :
    direction === 'w' ? west++ :
    east++
  );

  return walk.length !== 10 ? false : north === south && west === east;
};

/*
The isValidWalk function takes an array called walk as an input parameter. This array represents the directions of the 
walk. Each element of the array is a one-letter string representing a direction to walk (e.g., 'n' for north, 's' for 
south, 'w' for west, and 'e' for east).

The goal is to determine whether the walk will take exactly ten minutes and return the person to their starting point. 
If it does, the function should return true; otherwise, it should return false.

To solve this problem, we need to consider a few factors:

The length of the walk should be exactly 10, as each step takes one minute and the person should spend exactly ten 
minutes walking.
The number of steps in the north ('n') direction should be equal to the number of steps in the south ('s') direction. 
Similarly, the number of steps in the west ('w') direction should be equal to the number of steps in the east ('e') 
direction.
With these considerations in mind, we can proceed with the implementation:

javascript
Copy code
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  // insert code to check for equal number of steps in each direction
}
The first check we perform is to verify if the length of the walk array is exactly 10. If it's not, we can immediately 
conclude that the walk is either too short or too long, so we return false.

Now, let's implement the code to check for an equal number of steps in each direction:

javascript
Copy code
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let north = 0;
  let south = 0;
  let west = 0;
  let east = 0;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        north++;
        break;
      case 's':
        south++;
        break;
      case 'w':
        west++;
        break;
      case 'e':
        east++;
        break;
    }
  }

  return north === south && west === east;
}
We initialize four variables: north, south, west, and east. These variables will keep track of the number of steps taken 
in each respective direction.

Next, we iterate over each element of the walk array using a for loop. For each direction encountered, we use a switch 
statement to increment the corresponding variable.

Finally, we check if the number of steps taken north is equal to the number of steps taken south (north === south) and 
if the number of steps taken west is equal to the number of steps taken east (west === east). If both conditions are 
true, we can conclude that the person will return to their starting point, and we return true. Otherwise, we return 
false.

That's it! The function now correctly determines whether the given walk will take exactly ten minutes and return the 
person to their starting point. */

/*
Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to 
an 
appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk 
Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings 
representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter 
(direction) and you know it takes you one minute to traverse one city block, so create a function that will return true 
if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of 
course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' 
only). It will never give you an empty array (that's not a walk, that's standing still!). */
