/*Find All Substrings of a String
Write a program to print all substrings of a given string.*/

const input = "sourabh";
let output = "";

for (i = 0; i < input.length; i++) {
  for (j = i + 1; j <= input.length; j++) {
    output += input.slice(i, j) + " ";
  }
}

console.log(output);