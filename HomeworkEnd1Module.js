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

    return function(string, ...translations) {

    finalString = "";

      switch (language) {

        case "fr":

             if (string === "greet") {

                finalString = `${Object.getOwnPropertyDescriptor(translations.fr, 'greet').value}`;
            }

            else if (string === "intro") {

                finalString = `${Object.getOwnPropertyDescriptor(translations.fr, 'intro').value}`;
            }
        
            break;

        case "en":

             if (string === "greet") {
                
                finalString = `${Object.getOwnPropertyDescriptor(translations.fr, 'greet').value}`;
            }

            else if (string === "intro") {

                finalString = `${Object.getOwnPropertyDescriptor(translations.fr, 'intro').value}`;
            }

            break;
      }

    return console.log(finalString);   
    }
}

const localizedGreeting = localize("fr")`${greeting}`;  
const localizedIntroduction = localize("fr")`${introduction}`;  
  
console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")  
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")

