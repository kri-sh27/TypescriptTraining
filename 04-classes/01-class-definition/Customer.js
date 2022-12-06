var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//instance
var myCustomer = new Customer("krh", "pdp");
// myCustomer.firstName="Krish";
// myCustomer.lastName="hogale";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
