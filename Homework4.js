/* Task 1: Object Property Manipulation

Create an object called person with the following properties and values:

    firstName: "John"
    lastName: "Doe"
    age: 30
    email: "john.doe@example.com"

Use property descriptors to make all properties of the person object read-only and non-writable, so their values cannot be changed directly.

Implement a method called updateInfo on the person object that takes a new info object as an argument. The info object should contain updated values for any of the properties (e.g., { firstName: "Jane", age: 32 }). Ensure that this method adheres to the read-only property descriptor set earlier.

Create a new property called address on the person object with an initial value of an empty object. Make this property non-enumerable and non-configurable.
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    updateInfo: function (info) {
      const keys = Object.keys(info).filter(key => {
      return Object.getOwnPropertyDescriptor(info, key).writable;
      });
      const properties = {};
        for (let key of keys) {
          const descriptor = { value: info[key] };
          if (!this.hasOwnProperty(key)) {
          descriptor.enumerable = true;
          }
          properties[key] = descriptor;
        }
      Object.defineProperties(this, {
       ...properties,
      });
      return this;
    },
    };
      

Object.defineProperties(person, {firstName: {writable: false}, lastName: {writable: false}, age: {writable: false}, email: {writable: false}, updateInfo: {enumerable: false, writable: false}});

person.updateInfo({firstName: "Jane", age: 32});

console.log('updateInfo', person);

Object.defineProperty(person, 'address', {value: {}, enumerable: false, configurable: false});


/* Task 2: Object Property Enumeration and Deletion

Create a new object called product with the following properties and values:
    
    name: "Laptop"
    price: 1000
    quantity: 5
    
Use property descriptors to make the price and quantity properties non-enumerable and non-writable.

Implement a function called getTotalPrice that takes the product object as an argument and returns the total price (calculated as price * quantity). Ensure that the function accesses the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.

Implement a function called deleteNonConfigurable that takes an object and a property name as arguments. The function should delete the specified property from the object if it exists. If the property is non-configurable, throw an error with an appropriate message.
*/

let product =  {
    name: "Laptop",
    price: 1000,
    quantity: 5
}


Object.defineProperties(product, {price: {enumerable: false, writable: false}, quantity: {enumerable: false, writable: false}});

const getTotalPrice = (product) => {
    
    const productPrice = Object.getOwnPropertyDescriptor(product, "price");

    const productQuantity = Object.getOwnPropertyDescriptor(product, "quantity");

    return productPrice.value * productQuantity.value;
}

getTotalPrice(product);

// Object.defineProperty(product, 'price', {configurable: false});

const deleteNonConfigurable = (obj, prop) => {

  if (typeof obj !== 'object') {

    throw new Error("Wrong input type. Must be an object");
  }
  
  if (obj.hasOwnProperty(prop)) {

    if (Object.getOwnPropertyDescriptor(obj, prop).configurable) {
      
      delete obj[prop];

      return obj;
    
    } else {
    
      throw new Error("Existing value is non-configurable");
    }
  }
}


let res = 0;
try {
  res = deleteNonConfigurable(product, 'price');
  console.log('prop price was configurable and it was deleted', res);
}
catch(error) {
console.log('deleteNonConfigurable fn', error.name);
console.log('deleteNonConfigurable fn', error.message);
}


/* Task 3: Object Property Getters and Setters

Create an object called bankAccount with the following properties and values:

    balance: 1000 (default value)

Use a getter to define a property called formattedBalance, which returns the balance with a currency symbol (e.g., "$1000").

Use a setter to define a property called balance, which updates the account balance and automatically updates the corresponding formattedBalance value.

Implement a method called transfer on the bankAccount object that takes two bankAccount objects and an amount as arguments. The method should transfer the specified amount from the current account to the target account. Ensure that the balance and formattedBalance properties of both accounts are updated correctly.
*/

let bankAccount = {
    balance: 1000,

    get formattedBalance() {

        return `$ ${this.balance}`;
    },
    
    set formattedBalance(val) {
        this.balance = val;
    }
};

let targetAccount = Object.create(bankAccount);
targetAccount.balance = 0;

bankAccount.transfer = function (bankAccount, targetAccount, amount) {
    if (bankAccount.balance >= amount) {

        bankAccount.balance -= amount;
        targetAccount.balance += amount;
    } else {
        console.log('Balance is not enough to transfer');
    }
}

bankAccount.transfer(bankAccount, targetAccount, 400);

const checkProp2 = Object.getOwnPropertyDescriptor(bankAccount, 'balance');

console.log('current balance ', checkProp2.value);

console.log('current bank account formatted balance', bankAccount.formattedBalance);

const checkProp3 = Object.getOwnPropertyDescriptor(targetAccount, 'balance');

console.log('target balance ', checkProp3.value);

console.log('target bank account formatted balance', targetAccount.formattedBalance);


/* Task 4: Advanced Property Descriptors

Implement a function called createImmutableObject that takes an object as an argument and returns a new object with all its properties made read-only and non-writable using property descriptors. The function should handle nested objects and arrays recursively.

Use the createImmutableObject function to create an immutable version of the person object from Task 1.
*/


let createImmutableObject = (object) => {

  if (typeof object !== 'object' || object === null) {
      throw new Error("Wrong input type. Must be an object");
  }

  for (let prop in object) {

    if (object.hasOwnProperty(prop)) {

      Object.keys(object).forEach(prop => {

        Object.defineProperty(object, prop, {
        writable: false,
        configurable: false
        });

      });

      if (Object.getOwnPropertyDescriptor(object, prop).value != null && typeof Object.getOwnPropertyDescriptor(object, prop).value === 'object') {

        Object.getOwnPropertyDescriptor(object, prop).value = createImmutableObject(Object.getOwnPropertyDescriptor(object, prop).value);
      }
    }
  
  return object;
  }
}

console.log('Creating an immutable object', createImmutableObject(product));

// console.log(Object.getOwnPropertyDescriptors(product).quantity.writable);

/*
const createImmutableObject = (object) => {

    const propNames = Reflect.ownKeys(object);

    for (const name of propNames) {

        const value = object[name];

    if ((value && typeof value === "object") || typeof value !== null) {

        createImmutableObject(value);
    }
  }

  return Object.freeze(object);
}


console.log('Creating an immutable object', createImmutableObject(person));
console.log('This object is frozen', Object.isFrozen(person));
*/

/* Task 5: Object Observation

Implement a function called observeObject that takes an object and a callback function as arguments. The function should return a proxy object that wraps the original object and invokes the callback function whenever any property of the object is accessed or modified.

Use the observeObject function to create a proxy for the person object from Task 1. The callback function should log the property name and the action (get or set) performed on the object.
*/

const observeObject = (object, callback) => {

  if ((typeof object !== "object") && typeof callback !== "function") {

    throw new Error("Wrong input type");

  } 

  return callback(object);
  
}

const fnCallback = (object) => {
  const handler = {
        get(object, key) {
            if (typeof object[key] === 'object' && object[key] !== null) {
              return new Proxy(object[key], handler);
            }
            return object[key];
          },
        set(object, prop, value) {
            console.log(`changed ${prop} from ${object[prop]} to ${value}`);
            object[prop] = value;
        },
      };
    return new Proxy(object,handler);
}


console.log(observeObject(person, fnCallback));

/* Task 6: Object Deep Cloning

Implement a function called deepCloneObject that takes an object as an argument and returns a deep copy of the object. The function should handle circular references and complex nested structures. Do not use JSON methods.
*/

function deepCloneObject(obj) {

    if (Array.isArray(obj)) {

      return obj.map((item) => deepCloneObject(item));

    } 
    
    else if (typeof obj === 'object' && obj !== null) {

      const clone = {};

      for (let key in obj) {

        if (obj.hasOwnProperty(key)) {

          clone[key] = deepCloneObject(obj[key]);

        }
      }

      return clone;

    } else {

      return obj;
    }
  }

console.log('deep clone object', deepCloneObject(person));


/* Task 7: Object Property Validation

Implement a function called validateObject that takes an object and a validation schema as arguments. The schema should define the required properties, their types, and any additional validation rules. The function should return true if the object matches the schema, and false otherwise. You can choose any schema you want
*/

const validateObject = (obj, schema) => {

let valid = true;
  firstLevel: for(const k in schema) {
    if(schema[k].constructor === Array) { // if prop is of type array
      let i;
      for(i = 0; i < schema[k].length; i++) {
        for(const kk in schema[k][i]) {
          if(!obj[k][i].hasOwnProperty(kk) || obj[k][i][kk].constructor !== schema[k][i][kk]) {
            valid = false;
            break firstLevel;
          }
        }
      }
    }
    else if(schema[k].constructor === Object) { // if prop is of type object
      for(const kk in schema[k]) {
        if(!obj[k].hasOwnProperty(kk) || obj[k][kk].constructor !== schema[k][kk]) {
          valid = false;
          break firstLevel;
        }
      }
    }
    else { // if prop is simple type
      if(!obj.hasOwnProperty(k) || obj[k].constructor !== schema[k]) {
        valid = false;
        break;
      }
    }
  }
  return valid;
}

const schema = {
    name: String,
    price: Number,
    quantity: Number
  };

  console.log('the product object matches the schema', validateObject(product, schema));
  console.log('the person object matches the schema', validateObject( person, schema));