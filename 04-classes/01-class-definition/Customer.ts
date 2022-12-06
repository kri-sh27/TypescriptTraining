class Customer{
    firstName:string;
    lastName:string;

    constructor(theFirst:string,theLast:string){
        this.firstName=theFirst;
        this.lastName=theLast
    }
}


//instance
let myCustomer=new Customer("krh","pdp");

// myCustomer.firstName="Krish";
// myCustomer.lastName="hogale";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);