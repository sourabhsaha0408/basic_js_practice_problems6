const input = "abc123xyz45d100";
let output = 0;
let anyString = "";

for (i = 0; i < input.length; i++) {
  if (input.charAt(i) == Number(input.charAt(i))) {
    anyString += input.charAt(i);
  } else if (input.charAt(i) != Number(input.charAt(i))) {
    output = output + Number(anyString);
    anyString = "";
  }
}

if (anyString != "") {
  output = output + Number(anyString);
}

console.log(output);
