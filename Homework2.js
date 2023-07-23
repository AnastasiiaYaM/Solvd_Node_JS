// 1st Fn addValues: Accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments. The function should return the result of the addition. If the addition is not possible, it should throw an error.

function addValues(arg1, arg2) {

  const allowedTypes = ["string", "number"];

  if( allowedTypes.includes(typeof arg1) && allowedTypes.includes(typeof arg2)) {

    return arg1 + arg2;

    }

    if (typeof arg1 === "boolean" && typeof arg2 === "boolean") {

    return arg1 + arg2 === 2;

    }

throw new TypeError("Invalid data type");

}
  
  let res1 = 0;
  try {
    res1 = addValues(3, "33");
    console.log('addValues fn', res1);
  }
  catch(error) {
  console.log('addValues fn', error.name);
  console.log('addValues fn', error.message);
  }
  

  
  // 2nd Fn stringifyValue: Accepts a single argument of any type and converts it to a string representation. For objects and arrays, use JSON.stringify() for serialization. For other types, use the appropriate built-in methods or operations to convert them to strings.
  
  function stringifyValue(arg) {

    if ((typeof arg == 'object' && arg !== null) || Array.isArray(arg)) {
      return JSON.stringify(arg);
    }
    return String(arg);
  }

    res2 = stringifyValue(true);
    console.log('stringifyValue fn', res2);
  


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
console.log('invertBoolean fn', error.name);
console.log('invertBoolean fn', error.message);
}


// 4th Fn convertToNumber: Accepts a single argument of any type and attempts to convert it to a number. For strings, use parseFloat() or parseInt() for conversion. For other types, use appropriate operations or functions to perform the conversion. If the conversion is not possible, it should throw an error.

function convertToNumber(value) {

  if (typeof value === "undefined" || typeof value === "symbol") { 

    throw new TypeError("Argument is NaN");

  }

  if (typeof value === "string" || typeof value === "bigint") {
    return parseInt(value, 10);
  }

if (typeof value === "boolean"){   
return Number(value);
}

return value;

}

let res4 = 0;
try {
  res4 = convertToNumber(undefined);
  console.log('convertToNumber fn', res4);
}
catch(error) {
console.log('convertToNumber fn', error.name);
console.log('convertToNumber fn', error.message);
}


// 5th Fn coerceToType: Accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. The function should return the coerced value if successful. If the coercion is not possible, it should throw an error.

function coerceToType(value, type) {

  if (type === "string") { 

    return String(value);

  } else if (type === "number") { 

    return convertToNumber(value);

  } else if (type === "boolean") { 

    return Boolean(value);

  }

    throw new ReferenceError("It is impossible to convert a value to this data type");

}

let res5 = 0;
try {
  res5 = coerceToType("2", "number");
  console.log('coerceToType fn', res5);
}
catch(error) {
console.log('coerceToType fn', error.name);
console.log('coerceToType fn', error.message);
}


// 6th advancedAdd Fn - additional functions of your choice that demonstrate advanced type conversion scenarios

function baseToNumber(value) {

  if (typeof value === 'number') {

    return value

  }

  return +value
}

function baseToString(value) {

  if (typeof value === 'string') {

    return value;

  }

  if (Array.isArray(value)) {
 
    return `${value.map(baseToString)}`;

  }

  const result = `${value}`;
  return (result === '0' && (1 / value) === -INFINITY) ? '-0' : result;
}

function mathValues(operator, defaultValue) {

  return (value, other) => {

    if (value === undefined && other === undefined) {

      return defaultValue;

    }

    if (value !== undefined && other === undefined) {

      return value;
    }

    if (other !== undefined && value === undefined) {

      return other;

    }

    if (typeof value === 'string' || typeof other === 'string') {

      value = baseToString(value);
      other = baseToString(other);

    }

    else {

      value = baseToNumber(value);
      other = baseToNumber(other);

    }

    return operator(value, other)
  
  }
}

const advancedAdd = mathValues((arg1, arg2) => arg1 + arg2, 0);

console.log('advancedAdd fn',advancedAdd(undefined, 6)); 


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