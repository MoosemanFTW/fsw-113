
let studentGrades1 = [ 90, 80 , 88, 98]
var result1 = studentGrades1

 console.log(result1)

 console.log(result1)

 



let myGrade2 = 99
var result2 = myGrade2

 console.log(result2)

 



let studentGrades3 = [ 90, 80 , 88, 98]
var maxGrade3 = Math.max(studentGrades3)

 console.log(maxGrade3)

 



let studentGrades4 = [ 90, 80 , 88, 98]
var gradeArray4 = [...studentGrades4]

 console.log(gradeArray4)

 



let studentGrades5 = [ ...[ , , ]]

 console.log(studentGrades5)

 



let myhouseNumber6 = [..."8976"]

 console.log(Math.max(myhouseNumber6))

 



let myhouseNumber7 = [..."8976", "AB", "CDEF"]

 console.log(Math.max(myhouseNumber7))

 


var studentName8 = "James Moore"

var dob8 = "02/02/2002"

var studentInfo8 = {
          [studentName8]:studentName8 ,
          [dob8]:dob8
}

 console.log(studentInfo8)

 

var studentName9 = "James Moore"

var dob9 = "02/02/2002"

var studentInfo9 = {
          studentName9,
         dob9
}

 console.log(studentInfo9)

 


var studentName0 = "James Moore"
var dob0 = "02/02/2002"
var studentInfo0 = {
    studentName0,
    dob0,
    currentAge( ) {
        var today0 = new Date()
        var dobDate0 = new Date(this.do)
        var timeDiff0 = today0.getTime() - dobDate0.getTime()
        var days0 = timeDiff0/(1000*3600*24*365)
        return Math.round(days0)
    }
}

var result0 = studentInfo0.currentAge()

 console.log(studentInfo0)

 


var studentName11 = "James Moore"
var dob11 = "02/02/2002"
var studentInfo11 = {
    studentName11,
    dob11,
    age : function( ) {
        var today11 = new Date()
        var dobDate11 = new Date(this.do)
        var timeDiff11 = today11.getTime() - dobDate11.getTime()
        var days11 = timeDiff11/(1000*3600*24*365)
        return Math.round(days11)
    }
}

var result11 = studentInfo11.age()

 console.log(studentInfo11)

 



var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
    studentName,
    dob,
    [ "ageOf Student"] : function( ) {
        var today = new Date()
        var dobDate = new Date(this.do)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*365)
        return Math.round(days)
    }
}

var result = studentInfo

 console.log(studentInfo)




var columnName = "Name";
var name = {};
var student = {
  get [columnName]() {
    return name;
  },
  set [columnName](value) {
    name = value;
  },
};

student.Name = "Harry Potter";

 console.log(student.Name); 

