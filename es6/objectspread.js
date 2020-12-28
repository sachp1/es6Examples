///Object spread

const flightObj = {
  carrierCode: "NH",
  flightNo: 1111,
  departed: false
};

const flightObjModified = { ...flightObj, departed: true, finalized:true };
//console.log('Modified object 1 ', flightObjModified)









//Insert on object in a collection

const flightCollection = [
  {
    carrierCode: "NH",
    flightNo: 1111,
    departed: false
  },
  {
    carrierCode: "NH",
    flightNo: 2222,
    departed: false
  },
  {
    carrierCode: "NH",
    flightNo: 3333,
    departed: false
  },
  {
    carrierCode: "NH",
    flightNo: 4444,
    departed: false
  },
  {
    carrierCode: "NH",
    flightNo: 5555,
    departed: false
  }
];

const objectToBeInserted = {
  carrierCode: "NH",
  flightNo: 8888,
  departed: false
};

/*const firstPart= flightCollection.slice(0,2)
const lastPart=flightCollection.slice(2)
const modifiedFltCollection=[...firstPart,objectToBeInserted,...lastPart]

console.log(modifiedFltCollection)
*/













//Or in one line
const modifiedCollection1 = [
  ...flightCollection.slice(0, 2),
  objectToBeInserted,
  ...flightCollection.slice(2)
];

console.log("Modified collection 1", modifiedCollection1);


//Modifying an existing object in a collection

//Method 1 - find index and then use spread and slice
const index = modifiedCollection1.findIndex(flight => flight.flightNo === 4444);
console.log(index);
const obj = modifiedCollection1[index];
console.log("Object ", obj);
const modifiedObj = { ...obj, departed: true };

const modifiedCollection2 = [
  ...modifiedCollection1.slice(0, index),
  modifiedObj,
  ...modifiedCollection1.slice(index + 1)
];
console.log("Modified collection 2 ", modifiedCollection2);



//Method 2 - use map and then modify- simple
const modifiedCollection3 = modifiedCollection2.map(flight =>
  flight.flightNo === 5555 ? { ...flight, departed: true } : flight
);
console.log("Modified collection 3 ", modifiedCollection3);


