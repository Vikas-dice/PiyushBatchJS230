

// let name="vikas";


// let object={
//     name:"vikas",
//     age:27,
//     behaviour:function(){
//         console.log(" i am an honest man");
//         return "loyality";
        
//     }



// }




// function Human(name,age,behaviour){
//     name;
//     age;
//     behaviour;


//     this.name=name;
//     this.age=age;
//     this.behaviour=behaviour;


// }

// let human1=new Human("vikas",28,function(){
//     console.log("i am an honest man");
    
// })
// console.log(human1);
// human1.salary=10000;
// console.log(human1);

// let human2=new Human("naveen",20,function(){
//     console.log("i am a human");
    
// })

// console.log(human2);





class Human{

    name;
    age;
    behaviour;
    salary;

    constructor(a,b,c,d){
        this.name=a;
        this.age=b;
        this.behaviour=c;
        this.salary=d;
    }
}

let human1=new Human("vikas",27,"honesty",10000);
console.log(human1);

