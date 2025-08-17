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

console.log("While loop- Roll Numbers:");
let rn = 101;
while(rn<=105)
{
    console.log("Roll No:",rn);
    rn++;
}
let studentMap = new Map();
studentMap.set("101",{name:"Deepak",dept:"CSE"})
studentMap.set("102",{name:"hari",dept:"CSE"})
studentMap.set("103",{name:"kiran",dept:"CSE"})
studentMap.set("104",{name:"kruthika",dept:"CSE"})
console.log("students 101",studentMap.get("101"));

