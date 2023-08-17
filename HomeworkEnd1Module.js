/* Task 1: Quasi-Tagged Templates

You are working on a localization library that uses tagged templates to handle multiple languages. Implement a function called `localize` that acts as a quasi-tagged template. The function should take a template string and an object containing language-specific translations. It should replace placeholders in the template string with the corresponding translations from the provided object.
*/
const translations = {  
	en: {  
	    greet: "Hello",  
	    intro: "Welcome to our website"  
    },  
	fr: {  
	    greet: "Bonjour",  
	    intro: "Bienvenue sur notre site web"  
    }  
};  
	  
const greeting = "greet";  
const introduction = "intro";  

function localize (strings, ...values) {

    const language = "fr"; // Change to "en" for English  

    if (!(language in translations)) { 
       
        throw new Error('Wrong Language Value');
    }
    if (language in translations) {

      const oneOfYourArrays = translations[language]; 

      let result = '';
      strings.forEach((str, i) => {
        result += `${str}${i === strings.length - 1 ? '' : values[i]}`;
      });

    return oneOfYourArrays[result];

    }
}

const localizedGreeting = localize`${greeting}`;  
const localizedIntroduction = localize`${introduction}`;
  
console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")  
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")


/* Task 2: Advanced Tagged Template

Create a function called `highlightKeywords` that acts as a tagged template. The function should take a template string and an array of keywords. It should highlight each occurrence of a keyword in the template by wrapping it in a `<span>` element with a specific CSS class. Use template literals and string manipulation to achieve this.
*/

const keywords = ["JavaScript", "template", "tagged"];  
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";   
  
function highlightKeywords(templateString, arr) {

    finalStr = "";

    const spanKeywords = arr.map(el => `<span class='highlight'>${el}</span>`);

    finalStr = templateString.replace('\${0}', spanKeywords[0]).replace('\${1}', spanKeywords[1]).replace('\${2}', spanKeywords[2]);

    return console.log(finalStr);

}

const highlighted = highlightKeywords(template, keywords);  
  
console.log(highlighted); 
 
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."

/*
Task 3: Multiline Tagged Template

Implement a multiline tagged template function called `multiline` that takes a template string and returns a string with line numbers added at the beginning of each line. The line numbers should start from 1 and increase for each line. Preserve the original indentation of each line.
*/

const code = multiline`  
function add(a, b) {  
return a + b;  
}  
`;   
  
function multiline(strings) {

    let counter = (function() {
        let count = 1;
        return function() {
            return count ++;
        }

    }) ();

    num1 = counter();
    num2 = counter();
    num3 = counter();
    
      return  `${num1} ${strings[0]} ${num2} ${strings[1]} ${num3} ${strings[2]}`;

}

console.log(code); 
// Expected:  
// "1 function add(a, b) {  
// 2 return a + b;  
// 3 }"
