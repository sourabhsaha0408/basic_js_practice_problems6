const input = "abcdef";
const input2 = "abfdef";

let someString = "";
let commonSubString = "";

for (i = 0; i < input.length; i++) {
  for (j = i; j < input2.length; j++) {
    if (input.charAt(i) === input2.charAt(j)) {
      someString += input.charAt(i);
      break;
    } else {
      someString = "";
      break;
    }
  }
  if (someString.length > commonSubString.length) {
    commonSubString = someString;
  }
}

console.log(commonSubString);
