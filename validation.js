// Getting all the consts for validation

const email = document.getElementById("exampleInputEmail");
const country = document.getElementById("exampleInputCountry");
const zipCode = document.getElementById("exampleInputZipCode");
const password = document.getElementById("exampleInputPassword");
const passwordConfirmation = document.getElementById("exampleInputPasswordConfirmation");
const form = document.getElementById("mainForm");

form.addEventListener('submit', (e) => {
   
   messages = [];

   if (email.value === "" | email.value == null){
    messages.push = "email is required";
   }

   if (country.value === "" | country.value == null){
    messages.push = "country value is required";
   }


   if (messages.length > 0){
    // If any of the listed errors are pushed into messages, prevent default
    // and show the messages in the console.
    e.preventDefault();
    console.log (messages);
   }
})
