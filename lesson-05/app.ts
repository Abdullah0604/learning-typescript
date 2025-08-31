//--->  unkown, any, never

// ---> unknow = etar mane holo kichu thaktew pare abr naw thakte pare
let userInput: unknown;
let username: string;

// username = userInput invalid

//---> any = etar mane holo kichu to thakbei must, string or number or boolean
let userData: any;
username = userData;

//---> never = function theke ekdom kichui return na korle tkhn use  korte pari

function generateError(message: string, code: number): never {
  throw new Error(`${code}: ${message}`);
}

const res = generateError("Unauthorized person", 401);
console.log(res);
