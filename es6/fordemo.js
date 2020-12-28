const flights1 = [
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
  }
];

const flights2 = {
  "1111": {
    carrierCode: "NH",
    flightNo: 1111,
    departed: false
  },
  "2222": {
    carrierCode: "NH",
    flightNo: 2222,
    departed: false
  },
  "3333": {
    carrierCode: "NH",
    flightNo: 3333,
    departed: false
  }
};

//Arrays are "Iterable" objects

//Traditional for loop
for(let i=0;i<flights1.length;i++){
    console.log(flights1[i])
}

console.log('----------------------')
//Foreach loop
flights1.forEach((flight)=>{
    console.log(flight)
})


//User defined Objects are 'enumerable'
//forEach wont work for Objects
/*
flights2.forEach((flight)=>{
    console.log(flight)
})

*/

// for...in works for both iterable and enumerable objects

// looping in  through array
for(let i in flights1){
    console.log(i)
    console.log(flights1[i])
}

// looping in  through objects
for(let i in flights2){
    console.log(i)
    console.log(flights2[i])
}


//ES6 for...of loop //  for iterable objects - including Array, Map, Set, String etc.
// from for() loop you can break, but not from forEach() loop. ForEach() is concise
//for..of has advantages of both

for(let flight of flights1){
    console.log(flight)
}

let map = new Map([['x', 11], ['y', 22], ['z', 33]]);
for (let entry of map) {
  console.log(entry);
}
for (let [key, value] of map) {
  console.log(value);
  console.log(key);
}

flights1.forEach((flight,index)=>{
    console.log(flight)
    // cannot do this
    // if(index==1)
    // break;
})

for(let [index,value] of flights1.entries()){
    console.log('Index ',index,'Value ',value)
}







