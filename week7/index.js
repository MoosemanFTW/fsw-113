const fetch = require('node-fetch')
const URL = 'https://swapi.dev/api'
const people = `${URL}/people`

let peopleData = []
const getData = async function(id){
    const idEndPoint = `${people}/${id}`
    const response = await fetch(idEndPoint)
    const data = await response.json()
    peopleData = await {...peopleData, [id]:data}
}
var ids = [2,3,6,10,20,30,300]

var result = []
ids.forEach(id=>{
    result.push(getData(id))
})

var output = promise.all(result).then(res=>{
    console.log(peopleData);
}).catch(err=>{
    console.log(err);
})