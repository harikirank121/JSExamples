/*let today = new Date();

console.log("date",today);*/

let students = ["hari", "kruthika"];
students.push("sangem");
console.log(students);

students.unshift("kaitepalli");
console.log(students);

students.splice(3, 1, "sanagempalli");
console.log(students);


for (let student of students) {
    console.log(student);
}
console.log("Heart Shape with Names, Delay, and Border:");

let names = ["hari", "kruthika"];
let nameIndex = 0;

// Base heart pattern
let heart = [
    "  **   **  ",
    " **** **** ",
    "***********",
    " ********* ",
    "  *******  ",
    "   *****   ",
    "    ***    ",
    "     *     "
];

// Convert * to names, pad for alignment
let heartWithNames = heart.map(line => {
    return line.split("").map(ch => {
        if (ch === "*") {
            let name = names[nameIndex];
            nameIndex = (nameIndex + 1) % names.length;
            return name.padEnd(9, " "); // each block = fixed width
        } else {
            return " ".repeat(9);
        }
    }).join("");
});

// Find the widest line for border length
let maxWidth = Math.max(...heartWithNames.map(line => line.length));
let topBorder = "+" + "-".repeat(maxWidth) + "+";

// Insert border
let borderedHeart = [topBorder];
heartWithNames.forEach(line => {
    borderedHeart.push("|" + line + "|");
});
borderedHeart.push(topBorder);

// Print with delay
let i = 0;
let interval = setInterval(() => {
    console.log(borderedHeart[i]);
    i++;
    if (i >= borderedHeart.length) {
        clearInterval(interval);
    }
}, 100);

