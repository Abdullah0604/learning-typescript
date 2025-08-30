// object, array, tuple, enum
var person = {
    name: "akash",
    age: 23,
    education: {
        HSC: { gpa: 4.92, passing_year: "2023-2024" },
        SSC: { gpa: 5.0, passing_year: "2023-2024" },
    },
    skills: ["react js", "next js", "node js"],
    favNumber: [14, 25, 6],
};
var firstName;
var age;
var fruits = [20, "apple"];
var books = ["physics", "chemistry"];
age = 20;
firstName = "akib";
// tuple
var products = [20, "abd"];
// console.log(person);
//enum
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER_READ_ONLY"] = 2] = "USER_READ_ONLY";
})(Role || (Role = {}));
var person2 = {
    name: "abd",
    age: 22,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.AUTHOR,
};
if (person2.role === Role.ADMIN) {
    console.log("you are admin");
}
else if (person2.role === Role.AUTHOR) {
    console.log("you are author");
}
else {
    console.log("you are normal user");
}
