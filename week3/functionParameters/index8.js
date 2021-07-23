
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages(1.3, 68,56, ...studentGrades)
 console.log(result)


let count = new Function("grades", "...grades.length")

var result = count([ 90, 80 , 88, 98])
 console.log(result)