"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
//instance
let myCustomer = new Customer("krh", "pdp");
// myCustomer.firstName="Krish";
// myCustomer.lastName="hogale";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
