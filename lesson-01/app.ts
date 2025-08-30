// basic type: number, string, boolean

function add(num1: number, num2: number, text: string, isPrint: boolean) {
  const sum = num1 + num2;
  if (isPrint) {
    return `${text} ${sum}`;
  }

  return "You don't want to print";
}

const n1 = 20;
const n2 = 30;
const someText = "Two number of sum is: ";

console.log(add(n1, n2, someText, false));

// console.log(n1, n2);
