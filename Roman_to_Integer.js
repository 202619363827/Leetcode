function romanToInt(s) {
    // Define a lookup table for the values of each Roman numeral
    const lookup = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    // Iterate over the characters of the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
      const current = lookup[s[i]];
      const prev = lookup[s[i + 1]];
  
      // If the current value is less than the previous value, subtract it from the result
      if (prev && current < prev) {
        result -= current;
      } else {
        result += current;
      }
    }
  
    return result;
  }