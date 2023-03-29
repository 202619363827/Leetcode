function lengthOfLastWord(s) {
  // Trim the string to remove leading and trailing spaces
  s = s.trim();

  // Find the last space in the trimmed string
  const lastSpaceIndex = s.lastIndexOf(" ");

  // If there is no space, the entire string is the last word
  if (lastSpaceIndex === -1) {
    return s.length;
  }

  // Otherwise, the length of the last word is the distance from the last space to the end of the string
  return s.length - lastSpaceIndex - 1;
}
