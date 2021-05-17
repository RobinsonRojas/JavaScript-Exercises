//Description: https://www.hackerrank.com/challenges/30-class-vs-instance/problem

function Person(initialAge){

    var age = initialAge;
    
    if (age < 0){
        console.log("Age is not valid, setting age to 0.");
        age = 0;
    }
    
  this.amIOld=function(){

    if (age<13){
        console.log("You are young.")
    } else if (age <18){
        console.log("You are a teenager.")
    }else {
        console.log("You are old.")
    }
 
  };
   this.yearPasses=function(){
    age += 1
   };
}


var p=new Person(4);
p.amIOld();
p.amIOld();
var p=new Person(10);
p.amIOld();
var p=new Person(16);
p.amIOld();
console.log(Person(18))
