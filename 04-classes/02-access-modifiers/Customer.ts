class Customer{
  private  _firstName:string;
  private  _lastName:string;

    constructor(theFirst:string,theLast:string){
        this._firstName=theFirst;
        this._lastName=theLast;
    }
        public get firstName():string{
            return this._firstName;
        }

        public set lastName(value:string){
            this._lastName=value;
        }
        public get lastName():string{
            return this._lastName;
        }

        public set firstName(value:string){
            this._firstName=value;
        }
        // public get latName():string{
        //     return this._lastName;
        // }

        // public set lastName(value:string){
        //     this._lastName=value;
        // }

}


//instance
let myCustomer=new Customer("krh","pdp");

// myCustomer.firstName="Krish";
// myCustomer.lastName="hogale";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);