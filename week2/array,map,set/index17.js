let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Set()

people.add(student)
people.add(adjunct)

people.add(adjunct)



console.log(people.size)
console.log('-------------')
 



let students1 =[ {name:'John Masson'}, {name:'Don Vasco'}, {name:'Mary Landley'}]
let people1 = new Set(students1)



console.log(people1.has({name:'Dave Vasco'}))
console.log('-------------')