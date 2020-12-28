const person = { 
	name:"sachin",
	hello:()=>{
		this.name="new name";
		this.age=1
		setTimeout(()=>console.log("object:",this),1000);
		
	},
	age: 22

 }

// console.log(person.name);
// console.log(person['name']);

let propName = 'name';
console.log(person[propName]);
propName = 'age';
console.log(person[propName]);

person.hello();

let hello= person.hello;
hello();
