class Parent {
    constructor(){
        this.fatherName = 'david';
    }
}


class Child extends Parent{
    constructor(sName){
        super();
          this.name = sName;
    }
    getFullName(){
    return  this.fatherName + ' ' +this.name;
    }
}

const baby = new Child ("arnold");
const baby2 = new Child ('alex');

console.log(baby.getFullName());
console.log(baby2.getFullName());