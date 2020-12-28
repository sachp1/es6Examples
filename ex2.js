const person = { 
	name:"sachin",
	hello: function(){
		console.log("hello",this.name);
		console.log("object:",this);
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

let hello1 = person.hello.bind(person);
hello1();