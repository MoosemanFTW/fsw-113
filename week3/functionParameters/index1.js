
let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(studentGrades)
console.log(result)

 

