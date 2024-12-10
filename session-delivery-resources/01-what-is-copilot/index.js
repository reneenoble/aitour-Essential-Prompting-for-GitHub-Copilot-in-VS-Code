// A fucntion that reverses a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// A function that slugifies a string
function slugifyString(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-');
}