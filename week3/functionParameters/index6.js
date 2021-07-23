
let studentGrades = [ 90, 80 , 88, 98]
let percentageCurve = 0.98
let curveGrages = function( grades, percentage = percentageCurve){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(studentGrades)
console.log(result)


let studentGrades1 = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages1 = function(  percentage = avg(studentGrades),grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages1(undefined, studentGrades)
console.log(result)


