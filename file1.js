const lodash=require('lodash');
const getArray=()=>{
    const array=[3,4,6,7,7];
    lodash.map(array,(item)=>{
        console.log(`array item ${item}`)

    })    
}
getArray();