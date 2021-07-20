var temp = () =>104
console.log(typeof temp)

console.log(temp())
console.log('-------------')
var temp = multiplier => 104 * multiplier
console.log(temp(2))
console.log('-------------')
var temp = ( multiplier, devider ) => 104 * multiplier/ devider
 console.log(temp(3, 6))
 console.log('-------------')
 var temp = ( multiplier, divider ) => {

    let result = 104 * multiplier

    if ( result){

       result = 104 / divider

    }

  return result

}
console.log(temp(3, 6))
console.log('-------------')
var clickButton = function (){

    console.log(this)
 }
 console.log(clickButton())
 console.log('-------------')
 var clickButton = function (){

    console.log(this)
 }
 console.log(clickButton())
 console.log('-------------')
 var clickButton = ( )  => {

    console.log(this)
 }
 console.log(clickButton())
 console.log('-------------')
 var person =  {

    name : 'David Smith',

    age : 56,

    details: function ( ){

          console.log(this)

    }

}
console.log(person.details( ))
console.log('-------------')
var person =  {

    name : 'David Smith',

    age : 56,

    details: ( ) => {

          console.log(this)

    }

}
console.log(person.details( ))
console.log('-------------')
var temp = 100
console.log(temp)