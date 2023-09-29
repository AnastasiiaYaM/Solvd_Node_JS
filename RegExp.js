/* Implementing a Basic JSON Parser with Regular Expressions
### Task

Your task is to implement a simplified version of the `JSON.parse` function in JavaScript using regular expressions. This assignment will test your understanding of JSON syntax and your ability to use regular expressions for pattern matching.

### Instructions

### Part 1: JSON Syntax Understanding

1. **JSON Syntax**: Begin by revisiting the JSON (JavaScript Object Notation) syntax. Make sure you understand the basic structure of JSON objects, arrays, strings, numbers, booleans, and null values.
2. **Parsing Rules**: Familiarize yourself with the rules for parsing JSON, including how to handle nested objects and arrays.

### Part 2: JSON Parser Implementation

1. **Implement JSON.parse**: Create a JavaScript function called `myJSONParse` that takes a JSON-formatted string as input and returns the corresponding JavaScript object. You should use regular expressions to tokenize and parse the input string.
2. **Tokenization**: Implement tokenization by using regular expressions to identify JSON elements (objects, arrays, strings, numbers, booleans, null, etc.) in the input string.
3. **Parsing**: Implement a parsing algorithm that processes the tokens generated in the previous step and constructs the corresponding JavaScript object.
4. **Error Handling**: Ensure your implementation handles common JSON syntax errors gracefully and provides informative error messages when parsing fails.
5. **Testing**: Test your `myJSONParse` function with various JSON strings to ensure it can correctly parse them into JavaScript objects.

### Part 3: Documentation and Reflection

1. **Documentation**: Provide clear comments and documentation in your code to explain how your `myJSONParse` function works and how you used regular expressions.
2. **Reflect**: Write a brief reflection on your experience implementing a JSON parser with regular expressions. Discuss any challenges you encountered and how you addressed them.

### Submission

Submit your JavaScript code for the `myJSONParse` function, along with any test cases you used to validate its correctness. Include the documentation and reflection as well.

For an extra challenge, consider extending your myJSONParse function to handle additional JSON features, such as Unicode escapes, handling of special characters in strings, and custom revivers similar to the native JSON.parse function.

----------------------------------------------------------------------
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

{name: 'John', age: 30, city: 'New York'}
age: 30
city: "New York"
name: "John"
[[Prototype]]: Object
*/

function myJSONParse(str) {
  const tokens = {
      nullx,
      boolean,
      number,
      stringx,
      array,
      object
  }

  const spaceRe = /^\s+|\s+$/
  const colonRe = /^:/
  const commaRe = /^,/
  const numRe = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/
  const commaErrRe = /\,(?!\s*[\{\"\w])/g
  
  const stringRe = /^"(?:\\"|.)*?"/
  const regexTable = {
    '/\\\\/': '\\',
    '/\\//': '/',
    '/\\b/': '\b',
    '/\\f/': '\f',
    '/\\n/': '\n',
    '/\\r/': '\r',
    '/\\t/': '\t'
  }
 
  function nullx() {
      space(str) ? (str = space(str)[1]) : str
      return str && str.startsWith('null') ? [null, str.slice(4)] : null
  }

  function space() {
      let match
      return (str && str.startsWith(' ')) || (str && str.startsWith('\n'))
        ? ((match = str.match(spaceRe)),
          match ? [match[0], str.replace(spaceRe, '')] : null)
        : null
    }
  function boolean() {
      return str != undefined && str.startsWith('false')
        ? [false, str.slice(5)]
        : str && str.startsWith('true') ? [true, str.slice(4)] : null
  }

  function number() {
      numSyntaxCheck(str)
      space(str) ? (str = space(str)[1]) : str
      let match = str.match(numRe)
    
      if (match && match[0].includes('.')) {
        numValidCheck(match[0])
      }
      if (match) {
        return [parseFloat(match[0]), str.slice(match[0].length)]
      }
      return null
  }

  function numSyntaxCheck(str) {
      if (str.startsWith('.')) {
        console.log('Message: Value expected before dot')
        throw SyntaxError('Invalid JSON')
      }
    }

  function stringx() {
      let match
      return str.startsWith('"')
        ? ((match = str.match(stringRe)),
          match && match[0] != undefined
            ? [stringEnhancer(match[0]), str.replace(match[0], '')]
            : SyntaxError('Syntax Error'))
        : null
  }

  function stringEnhancer(str) {
      str = str.slice(1, -1)
      for (const key in regexTable) {
        str = str.replace(new RegExp(key, 'g'), regexTable[key])
      }
      return str
    }

  function array() {
      space(str) ? (str = space(str)[1]) : str
      if (str != undefined && !str.startsWith('[')) {
        return null
      }
      let array = []
      str = str.slice(1)
      while (str[0] !== ']') {
        space(str) ? (str = space(str)[1]) : str
        commaCheck(str)
        const factoryOut = valueParser(str)
        if (factoryOut) {
          array.push(factoryOut[0])
          str = factoryOut[1]
          str = trailCheck(str)
          comma(factoryOut[1]) ? (str = comma(factoryOut[1])[1]) : str
          space(str) ? (str = space(str)[1]) : str
        }
        if (!str.includes(']')) throw Error('Expected comma or closing brace')
        if (str === ']') return [array, str.slice(1)]
      }
      return [array, str.slice(1)]
  }

  function object() {
      space(str) ? (str = space(str)[1]) : str
      if (str[0] !== '{') return null
      syntaxCheck1(str)
      let object = {}
      str = str.slice(1)
      space(str) ? (str = space(str)[1]) : str
      while (str[0] != '}') {
        space(str) ? (str = space(str)[1]) : str
        syntaxCheck2(str)
        let factory
        try {
          factory = stringx(str)
        } catch (error) {}
        space(str) ? (str = space(str)[1]) : str
        factory[1] = syntaxCheck3(factory[1])
        if (factory) {
          let key = factory[0]
          if (factory[1]) {
            str = factory[1]
            colon(str) ? (str = colon(str)[1]) : str
            space(str) ? (str = space(str)[1]) : str
            syntaxCheck4(valueParser(str))
            let value = valueParser(str)
            object[key] = value[0]
            str = value[1]
            comma(str) ? (str = comma(str)[1]) : str
            space(str) ? (str = space(str)[1]) : str
          }
        }
        if (str === '}') break
      }
      return [object, str.slice(1)]
    }

function colon(str) {
let match
return (match = str.match(colonRe)), match ? [match, str.slice(1)] : null
}

function comma(str) {
let match
return str && str.startsWith(',')
  ? ((match = str.match(commaRe)), match ? [match[0], str.slice(1)] : null)
  : null
}

function factory(p) {
  return text => {
    if (text === null) return null
    let out
    const keys = Object.keys(p)
    for (let i = 0; i < keys.length; i++) {
      try {
        out = p[keys[i]](text)
      } catch (error) {
        console.log(error)
      }
      if (out != null) {
        return out
      }
    }
    return null
  }
}

const valueParser = factory(tokens);

function syntaxCheck1 (str) {
if (str.match(commaErrRe)) {
  console.log('Message: Property expected')
  throw SyntaxError('Invalid JSON')
}
}

function syntaxCheck2 (str) {
if (!str.startsWith('"'))
  throw SyntaxError('Invalid JSON')
}

function syntaxCheck3 (str) {
if (!str.startsWith(':')) {
  console.log('Message: Expected colon')
  throw SyntaxError('Invalid JSON')
}
return str
}

function syntaxCheck4 (value) {
if (value === null) {
  console.log('Message: Must contain a value after colon')
  throw SyntaxError('Invalid JSON')
}
}

function commaCheck (str) {
if (isFinite(str[0]) && str[1] === ' ') {
  console.log('Message: Expected comma')
  throw SyntaxError('Invalid JSON')
}
}

function trailCheck(str) {
if (str[0] === ',') {
  space(str.slice(1)) ? (str = space(str.slice(1))[1]) : str
  if (str[0] === ']') {
    console.log('Message: Trailing comma')
    throw SyntaxError('Invalid JSON')
  }
}
return str
}

const isValidNum = /^-?(0|[1-9]\d*|(?=\.))(\.\d+)?$/

function numValidCheck(num) {
if (!isValidNum.test(num)) {
  console.log(`Message: '${num} 'is not a valid number.`)
  throw SyntaxError('Invalid JSON')
}
}

const validateRe = /[^ | \n]+$/

const result = valueParser(str)

if (result.length !== 2) {
console.log(result)
}
if (result) {
const test = validateRe.test(result[1])
test
  ? console.log('Invalid JSON')
  : console.log(JSON.stringify(result[0], true, 2))
}
console.log('typeof output: ', typeof result);
}

  
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
myJSONParse(jsonString);

  