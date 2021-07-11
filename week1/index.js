var students = [ 


    { name: "John", city: "California" },


    { name: "Peter", city: "London"},


    { name: "Mathew", city: "Manchester" },


    { name: "Jane", city: "Phoenix" }

]
for(let i=0; i<1;i++){
    students[0].state='California';
    students[0].dateOfBirth='03/12/1996';
    students[0].payRate='$72,000/Yr';
    students[1].state='Ohio';
    students[1].dateOfBirth='22/07/1966';
    students[1].payRate='$200,000/Yr';
    students[2].state='New Hampshire';
    students[2].dateOfBirth='02/08/1997';
    students[2].payRate='$100,000/Yr';
    students[3].state='Arizona';
    students[3].dateOfBirth='02/18/2000';
    students[3].payRate='$24,000/Yr';
    console.log(students);
};
console.log('-----------------');
function before(students){
    console.log(students.name);
    console.log(students.city);
    console.log('***********')
};
students.forEach(before);

console.log('-----------------');

const gradStudents = [ 


    { name: "John", city: "California" },


    { name: "Peter", city: "London"},


    { name: "Mathew", city: "Manchester" },


    { name: "Jane", city: "Phoenix" }

]
for(let i=0; i<1;i++){
    gradStudents[0].state='California';
    gradStudents[0].dateOfBirth='03/12/1996';
    gradStudents[0].payRate='$72,000/Yr';
    gradStudents[1].state='Ohio';
    gradStudents[1].dateOfBirth='22/07/1966';
    gradStudents[1].payRate='$200,000/Yr';
    gradStudents[2].state='New Hampshire';
    gradStudents[2].dateOfBirth='02/08/1997';
    gradStudents[2].payRate='$100,000/Yr';
    gradStudents[3].state='Arizona';
    gradStudents[3].dateOfBirth='02/18/2000';
    gradStudents[3].payRate='$24,000/Yr';
    console.log(gradStudents);
};

console.log('-----------------');
function before(gradStudents){
    console.log(gradStudents.name);
    console.log(gradStudents.city);
    console.log('***********')
};
gradStudents.forEach(before);

/* I expected the code to work the same bacause I wasn't changing how I was interacting with the array itself.*/

console.log('-------------');

const multipliers = [1,2,3,4,5,6,7,8,9,10]
const multiplican = [1,2,3,4]
const tableStart = 1
const tableEnd = 12
const table = []

for(i=1; i<13;i++){
    for(j=1; j<13;j++){
        table.name= [i];
        table.value = ([i]*[j]);
    }
    console.log(table)
}