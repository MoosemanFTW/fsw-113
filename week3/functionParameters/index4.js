
let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( grades, percentage){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(studentGrades,1.24)
console.log(result)

 
