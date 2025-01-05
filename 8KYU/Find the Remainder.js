//Instructions 
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.
function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
      // Check for division by zero
      if (n === 0 || m === 0) {
          return NaN; // Return NaN for division by zero
      }
  
      // Determine the larger and smaller numbers
      let larger = Math.max(n, m);
      let smaller = Math.min(n, m);
  
      // Return the remainder of dividing the larger by the smaller
      return larger % smaller;
  }
  