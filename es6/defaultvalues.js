const add=(x,y)=>x+y;
const result=add();
console.log(result);


const addWithCheck=(x,y)=>{
    x=x||0;
    y=y||0
    return x+y;
}

const res=addWithCheck();
console.log(res)



const add1=(x=0,y=0)=>x+y

const result1=add1()
console.log(result1)



const printEmployee=({name,age,dept="IT"})=>{
    console.log(name,age,dept)
}

const emp1={
    name:'John',
    age:40,
    dept:'Admin'
}

const emp2={
    name:'Peter',
    age:30
}

	printEmployee(emp1);

	printEmployee(emp2)
