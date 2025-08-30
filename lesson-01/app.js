// basic type: number, string, boolean
function add(num1, num2, text, isPrint) {
    var sum = num1 + num2;
    if (isPrint) {
        return "".concat(text, " ").concat(sum);
    }
    return "You don't want to print";
}
var n1 = 20;
var n2 = 30;
var someText = "Two number of sum is: ";
console.log(add(n1, n2, someText, false));
// console.log(n1, n2);
