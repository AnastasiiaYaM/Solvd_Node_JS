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
	  
const language = "fr"; // Change to "en" for English  
const greeting = "greet";  
const introduction = "intro";  


function localize (language) {

    return function(string) {
    let finalString = "";
      switch (language) {
        case "fr":
            if (Object.hasOwn(translations.fr, `${greeting}`)) {
                finalString = `${string}`.replace(`${string}`, translations.fr[`${greeting}`]);
            }
            if (Object.hasOwn(translations.fr, `${introduction}`)) {
                finalString = `${string}`.replace(`${string}`, translations.fr[`${introduction}`]);
            }
            else {console.log('Wrong input data')}
        break;
        case "en":
            if (Object.hasOwn(translations.fr, `${greeting}`)) {
                finalString = `${string}`.replace(`${string}`, translations.en[`${greeting}`]);
            }
            if (Object.hasOwn(translations.fr, `${introduction}`)) {
                finalString = `${string}`.replace(`${string}`, translations.en[`${introduction}`]);
            }
            else {console.log('Wrong input data')}
        break;
      }

    return  finalString;   
    }
}
const localizedGreeting = localize("fr")`${greeting}`; 
//const localizedGreetingEn = localize("en")`${greeting}`;  
//const localizedIntroduction = localize("fr")`${introduction}`;  
  
console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")  
//console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")

//console.log(localizedGreetingEn);


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