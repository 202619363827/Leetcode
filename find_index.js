function strStr(haystack, needle) {
    // If needle is an empty string, return 0
    if (needle === "") {
      return 0;
    }
  
    // Find the index of the first occurrence of needle in haystack
    const index = haystack.indexOf(needle);
  
    // Return the index, or -1 if needle is not found
    return index;
  }
  