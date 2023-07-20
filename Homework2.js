// 1st Fn addValues: Accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments. The function should return the result of the addition. If the addition is not possible, it should throw an error.

function addValues(arg1, arg2) {

    if (typeof arg1 === "undefined" || typeof arg1 === "null" || typeof arg1 === "symbol" || typeof arg1 === "object") {
  
      throw new TypeError("Invalid 1st argument data type");
  
    }
  
    if (typeof arg2 === "undefined" || typeof arg2 === "null" || typeof arg2 === "symbol" || typeof arg2 === "object") {
  
      throw new TypeError("Invalid 2nd argument data type");
  
    }
  
  /* 
  I would like to add the rule for BigInt, but unfortunately I had couldn't yet.
  
   if (arg1 === BigInt || arg2 === BigInt) {
  
      return arg1.toString() + arg2.toString();
  } 
  */
  
  return arg1 + arg2;
  
  }
  
  
  let res1 = 0;
  try {
    res1 = addValues(2, 3);
    console.log('addValues fn', res1);
  }
  catch(error) {
  console.log(error.name);
  console.log(error.message);
  }
  
      /*
      addValues(2, 3);
      addValues("2", "3");
      addValues(2, "3");
      addValues("2", 3);
      addValues(true, 3);
      addValues(2, true);
      addValues(false, true);
      addValues(null, 3);
      addValues(undefined, 3);
      addValues(Symbol, 3);
      addValues(Object, 3);
      addValues(2n, 3);
      addValues(2, BigInt);
      */
  
  
  // 2nd Fn stringifyValue: Accepts a single argument of any type and converts it to a string representation. For objects and arrays, use JSON.stringify() for serialization. For other types, use the appropriate built-in methods or operations to convert them to strings.
  
  function stringifyValue(arg) {
  
    
    if (typeof arg === "number" || typeof arg === "boolean" || typeof arg === "symbol" || typeof arg === "bigint") {
  
      return arg.toString();}
  
    if (typeof arg === "object" || typeof arg === "array") {
  
       return JSON.stringify(arg)};
  
   if (typeof arg === "undefined" || typeof arg === "null") {   // incorrect result with "null" data type ?  
  
      return console.log("Invalid argument data type");;
  
    }
  
    return arg;
  
    }
  
    res2 = stringifyValue(2);
    console.log('stringifyValue fn', res2);
  
  /*
  stringifyValue(2);
  stringifyValue(true);
  stringifyValue(123n);
  stringifyValue([1,2,3]);
  stringifyValue({name: 'Olena'});
  stringifyValue(undefined);
  stringifyValue(null);
  */
  

// 3rd Fn invertBoolean: Accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it should throw an error.

function invertBoolean(arg) {

  if (typeof arg !== "boolean") {

    throw new TypeError("Not a boolean");

  }

return !arg;

}


let res3 = 0;
try {
  res3 = invertBoolean(true);
  console.log('invertBoolean fn', res3);
}
catch(error) {
console.log(error.name);
console.log(error.message);
}


  /*
  Your task is to create a JavaScript library that provides advanced data transformation functions. The library should include the following features:
  
  addValues: Accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments. The function should return the result of the addition. If the addition is not possible, it should throw an error.
  
  stringifyValue: Accepts a single argument of any type and converts it to a string representation. For objects and arrays, use JSON.stringify() for serialization. For other types, use the appropriate built-in methods or operations to convert them to strings.
  
  invertBoolean: Accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it should throw an error.
  
  convertToNumber: Accepts a single argument of any type and attempts to convert it to a number. For strings, use parseFloat() or parseInt() for conversion. For other types, use appropriate operations or functions to perform the conversion. If the conversion is not possible, it should throw an error.
  
  coerceToType: Accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. The function should return the coerced value if successful. If the coercion is not possible, it should throw an error.
  
  Implement additional functions of your choice that demonstrate advanced type conversion scenarios or cater to specific use cases related to primitive types. You are encouraged to explore complex scenarios and push the limits of type conversion.
  Note: deliver result as one separate module with different separate functions
  */