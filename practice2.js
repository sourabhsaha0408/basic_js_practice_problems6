/* Reorder String to Group All Identical Characters Together
Given a string, reorder it so that all identical characters are grouped together.*/
//Input: "programming"
//Output: "p r o g g r a m m i n n"


let input = "programming";
let output = "";

for (i = 0; i < input.length; i++) {
  for (k = 0; i < input.length; k++) {
    if (output.indexOf(input.charAt(i)) !== -1) {
      break;
    }
    output += input.charAt(i) + " ";
    for (j = i + 1; j < input.length; j++) {
      if (input.charAt(i) == input.charAt(j)) {
        output += input.charAt(j) + " ";
      }
    }
  }
}

console.log(output);