class Student{

    constructor(name){
        this.name=name;
    }
}

const st=new Student('John')
console.log(st.name)

console.log(typeof Student)

class CommerceStudent extends Student{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    printDetails(){
        console.log(this.name,this.id)
    }
}

const cmstudent =new CommerceStudent('Peter','A-111')
console.log(cmstudent)
cmstudent.printDetails();
