// Your code here
class Cat {
  constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
    return this.name;
  }
}

class Dog {
    constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
   speak(){
    return this.name;
  }
  
}

class Bird{
    constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  // speak(){
  //   return this.name;
  // }
  
}
let  cat = new Cat("Sasha", "female");
 let dog = new Dog("Rufio", "male")