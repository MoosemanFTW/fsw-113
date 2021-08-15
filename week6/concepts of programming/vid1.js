var printData = (data) =>{
    return  () =>{
        var sentence = data.toLowerCase().split(' ');
        for(i=0;i<sentence.length;i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        return sentence.join(' ');
    }
}

const print = printData
const output = print('HI thERe HOW ARE You')
const result = output()
console.log(result)
