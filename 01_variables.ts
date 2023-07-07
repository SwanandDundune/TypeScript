var x : number = 10 ;

console.log(`x value is ${x}`);

// string

var s1 : string = "You are the creter of your destiny";

var s2 : string = `Powerfull people come from powefull places ${x}`;

console.log(s1);
console.log(s2);




// Boolean 

var b1: boolean = true;
var b2: boolean = false;

var b3: boolean;

console.log(b1);
console.log(b2);

function test(): boolean {
    return b3 = false;
    console.log(b3);
    
}

console.log(test());


// any - data type 

var product : any = {
    productId : 1 ,
    productName :"Iphone",
    productPrice: 140000,
    isAvaible : true 
}

console.log(product);


import { isPalindrome } from "./05_utils";
console.log(isPalindrome('madam'));
console.log(isPalindrome('madan'));

