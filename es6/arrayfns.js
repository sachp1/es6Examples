//Map example
var numArray=[30,40,50,60]

var modifiedNumArray=numArray.map(function(num,index){
    return num+index+10
})

console.log("modified Array",modifiedNumArray)

//Filter function

var filteredArray= modifiedNumArray.filter(function(num,index){
    return num%2===0
})


console.log("filteredArray",filteredArray)


var contactNames=['John','Peter','Ryan', 'Dan']

var filteredNames=contactNames.filter(function(name){
    return name.indexOf('an')!==-1
})

console.log('Filtered Names',filteredNames)



