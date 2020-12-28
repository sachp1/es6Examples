

const add= (...args)=>args.reduce((total,num)=>total+num,0)
const mult= (x,y)=>x*y

const logFn=(fnToBeCalled)=>(...args)=>{
        console.log('Arguments',args)
        const result=fnToBeCalled.apply(null,args)
        console.log('result',result)
    }


const addWithLog=logFn(add);

addWithLog(10,20,30,100)


const multWithLog=logFn(mult);

multWithLog(10,20)

//Map example
const numArray=[30,40,50,60]

const modifiedNumArray=numArray.map((num,index)=>num+index+10)

console.log("modified Array",modifiedNumArray)

//Filter function

const filteredArray= modifiedNumArray.filter((num,index)=>num%2===0)


console.log("filteredArray",filteredArray)


const contactNames=['John','Peter','Ryan', 'Dan']

const filteredNames=contactNames.filter((name)=>name.indexOf('an')!==-1)

console.log('Filtered Names',filteredNames)







