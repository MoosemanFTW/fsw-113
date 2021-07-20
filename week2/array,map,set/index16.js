let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new WeakMap()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

ladjunct = null



console.log(people.size)

setInterval(console.log(people.size), 1000)




 



