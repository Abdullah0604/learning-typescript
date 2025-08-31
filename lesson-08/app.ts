//---> type assertion / type casting

//---> Example 01.
// const userInput = document.getElementById("user-input")! as HTMLInputElement;
const userInput = <HTMLInputElement>document.getElementById("user-input")!;

userInput.value = "Hello programmers";

//---> Example 02.
// const detailsParagraph = document.getElementsByClassName(
//   "details"
// )[0] as HTMLParagraphElement;
const detailsParagraph = <HTMLParagraphElement>(
  document.getElementsByClassName("details")[0]
);

detailsParagraph.innerHTML = "I love Bangladesh, This is my country";

//---> Example 03.
// const catImage = document.querySelector("#cat")! as HTMLImageElement;
const catImage = <HTMLImageElement>document.querySelector("#cat")!;

catImage.src =
  "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//---> Example 04.
// const youtube = document.getElementById("youtube")! as HTMLAnchorElement;
const youtube = <HTMLAnchorElement>document.getElementById("youtube")!;

youtube.href = "https://www.youtube.com";
youtube.target = "_blank";
youtube.innerHTML = "Go to Youtube";
