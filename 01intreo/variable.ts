//String
let greetings:string = "Hello World";
// greetings = "6";
// greetings = 6;
greetings.toLowerCase();
// console.log(greetings);

//Number   : int and float ko satta pani use huncha
// let age : number = 21;
// console.log(age)

let age  = 21; //here we dont need to define typr TS is smart enough to know its type due to type inference 
// console.log(age.toFixed())
// age = "pema";

//boolean

let isLoggedIn: boolean = true;

//any
//  let hero ;
 let hero: string ;

 function anyHero(){
    return "Pema";
 }

 hero = anyHero();



export {}