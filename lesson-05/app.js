//--->  unkown, any, never
// ---> unknow = etar mane holo kichu thaktew pare abr naw thakte pare
var userInput;
var username;
// username = userInput invalid
//---> any = etar mane holo kichu to thakbei must, string or number or boolean
var userData;
username = userData;
//---> never = function theke ekdom kichui return na korle tkhn use  korte pari
function generateError(message, code) {
    throw new Error("".concat(code, ": ").concat(message));
}
var res = generateError("Unauthorized person", 401);
console.log(res);
