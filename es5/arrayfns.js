//Map example
var objArr = [{
    1: "one"
},
{
    2: "two"

},
{
    3: "three"
}]

var modObjArr = objArr.map(function (obj, index) {
    return obj
})

console.log("modified Array", modObjArr)














//Filter function

var filteredArray = modifiedNumArray.filter(function (num, index) {
    return num % 2 === 0
})


console.log("filteredArray", filteredArray)













var contactNames = ['John', 'Peter', 'Ryan', 'Dan']

var filteredNames = contactNames.filter(function (name) {
    return name.indexOf('an') !== -1
})

console.log('Filtered Names', filteredNames)




var contactNames = ['John', 'Peter', 'Ryan', 'Dan']

contactNames.map(function (name) {
    return "Mr" + name
}).filter(function (name) {
    return name.indexOf('an') !== -1
}).map(function (name) {
    return '<li>' + name + '</li>'
})

