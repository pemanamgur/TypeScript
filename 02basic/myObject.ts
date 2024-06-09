// const User = {
//     name : "Pema",
//     email : "pemanamgurtamang7@gmail.com",
//     isActive : true,
// }

// function createUser({name: string , isPaid: boolean}){

// }

// let newUser = {name: "Pema",isPaid: true , age : 21 , gmail:"pema@gmail.com"};

// // createUser({name : "Pema",isPaid : true});
// createUser(newUser);//bad practice since its letting me enter more info than in parameter.

// function createCourse():{name: string , price: number}{
//     return {name : "react", price:2000} ;
// }

// createCourse();

//Type Alias

// type User = {
//     name : string,
//     age : number ,
//     gmail : string,
// }

// function createUser(user: User):User{
//     return {name: "Pema" , age : 21 , gmail : "pemanamgur@gmail.com" };
// }

// createUser({name: "Pema" , age : 21 , gmail : "pemanamgur@gmail.com"});

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number //optionals
}


// function createUser(u: User){}

let myUser:  User = {
    _id: "1234",
    name : "Pema",
    email : "pema@gmail.com",
    isActive : true
}

myUser.email="namgur@gmail.com";
// myUser._id = "1234";



export {}