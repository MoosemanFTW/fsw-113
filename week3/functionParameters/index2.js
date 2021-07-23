
let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( grades, percentage){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(studentGrades, 1.33)
 console.log(result)

 
let studentGrades1 = [ 90, 80 , 88, 98]
let curveGrages1 = function( grades, percentage1){
   var newGrades1 = grades.map( grade1=> {
        return grade1 * percentage1
    })
    return newGrades1
}

var result1 = curveGrages1(...studentGrades1, 1.33)
console.log(result1)

 
