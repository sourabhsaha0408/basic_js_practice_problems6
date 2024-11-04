const input = "(((()))())";
let countOfOpenBrackets = 0;
let countOfCloseBrackets = 0;

for (let i of input) {
  if (i === "(") {
    countOfOpenBrackets++;
  } else if (i === ")") {
    countOfCloseBrackets++;
  }
}

if (countOfOpenBrackets === countOfCloseBrackets) {
  console.log("parentheses are balanced.");
} else {
  console.log("parentheses are unbalanced.");
}
