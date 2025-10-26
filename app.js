// . Click to Change Background 
// When a button is clicked, change the background color of the entire page to a random 
// color.

// let btn = document.querySelector("#btn")

// btn.addEventListener("click" , ()=>{
//     document.body.style.backgroundColor = "gray"
// })

// Toggle Light Mode / Dark Mode 
// Add a button that toggles between light and dark themes using class changes.

// let light = document.querySelector("#light")

// let lightMode = "light"
// light.addEventListener("click" ,()=>{
//     if(lightMode === "light"){
//         document.body.style.backgroundColor = "gray"
//         lightMode = "dark"

//     }
//      else if(lightMode === "dark"){
//         document.body.style.backgroundColor = "black"
//         lightMode = "light"

        
//     }
// })


// Hide Element on Click 
// When a specific element is clicked, hide it from view using style.display = 
// 'none'. 

// let head = document.querySelector("#head")

// head.addEventListener("click" , ()=>{
//     head.style.display = "none"
// })

// Counter with Buttons 
// Create "Increase" and "Decrease" buttons that modify a number displayed on the 
// screen.

// let Counter = document.querySelector("#counter")
// let increase = document.querySelector("#increase")
// let decrease = document.querySelector("#decrease")

// let count = 0;

// increase.addEventListener("click" , ()=>{
//     count += 1;
//     Counter.innerHTML = count;
// })

// decrease.addEventListener("click" , ()=>{
//     if(count > 0){                
//      count -= 1;          
//     }
//     Counter.innerHTML = count;
// })


// Disable Button After Click 
// Create a button that disables itself after being clicked once.

// let dis = document.querySelector("#dis")

// dis.addEventListener("mouseover" , ()=>{
//     dis.style.display = "none"
// })


// dis.addEventListener("mouseout" , ()=>{
//     dis.style.display = "block"
// })

// Live Character Count 
// Display how many characters have been typed into a textarea in real time.

// let textarea = document.querySelector("#textarea")
// let count = document.querySelector("#count")

// textarea.addEventListener("input" , ()=>{
//     let lenght=  textarea.value.length;
//     count.innerHTML = lenght
// }) 


//  Password Strength Checker 
// Show strength feedback ("Weak", "Strong") as the user types a password.

// let input = document.querySelector("#input")
// let result = document.querySelector("#result")

// let lettersRegex = /[A-Za-z]/;                 
// let numbersRegex = /[0-9]/;                    
// let specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;



// input.addEventListener("input"  , ()=>{
//     if(specialCharRegex.test(input.value)){
//         result.innerHTML = "strong"
//     }
//     else if(numbersRegex.test(input.value) && lettersRegex.test(input.value) && input.value.legth >= 6){
//         result.innerHTML ="medium"
//     }else{
//         result.innerHTML ="weak"
//     }
    
// })


// Enter to Submit 
// When the user presses Enter inside an input field, submit the form (or show an alert). 

// let name = document.querySelector("#name")
// let email = document.querySelector("#email")
// let submitForm = document.querySelector("#submitForm")
// // let btn = document.querySelector("#btn")

// submitForm.addEventListener("submit" , (event)=>{
//     event.preventDefault()
    
// Swal.fire({
//   title: "Drag me!",
//   icon: "success",
//   draggable: true
// });    console.log("submit clicked");
    
// })



// Auto Uppercase Input 
// As the user types in a text field, convert the characters to uppercase live.


// let nameInput = document.querySelector("#nameInput")
// nameInput.addEventListener("input" , ()=>{
//   nameInput.value = nameInput.value.toUpperCase()
// })



//  Detect Forbidden Words 
// Prevent form submission if input contains banned words (like "spam", "test").

// let form = document.querySelector("#form")
// let input =document.querySelector("#input")

// form.addEventListener("submit" , (event)=>{
//   event.preventDefault()  
//   if(input.value.includes("spam" || input.value.includes("test"))){
//     alert("forbidden words")
//   }else{
//     alert("submit ok")
//   }
// })


//  Dropdown Dynamic Update 
// When a country is selected in one dropdown, dynamically populate a second dropdown 
// with its cities. 

// let country = document.querySelector("#country")
// let city = document.querySelector("#cities")

// let cities = {
//     pakistan : ["lahore" , "karachi" , "islamabad" , "sialkot"],
//     india : ["delhi", "mombai" , "kolkatta"],
//     us : ["los Agelas" , "chicago"  , "new york"]
// }

// country.addEventListener("change" , ()=>{
//     city.innerHTML = `<option value="citiesValue">--- select value ---</option>`;
//     let citiesValue = country.value.toLowerCase()

//     for(let i = 0; i < cities[citiesValue].length; i++){
//             city.innerHTML += `<option value="${cities[citiesValue][i]}">${cities[citiesValue][i]}</option>`

//     }
// })

//  Show/Hide Password 
// Toggle password visibility with a checkbox or icon (eye icon behavior).

// let password = document.querySelector("#password")
// let showpassword = document.querySelector("#showpassword")

// showpassword.addEventListener("click" , ()=>{
//     if(showpassword.checked){
//         password.type = "text"
//     }else{
//         password.type = "password"
//     }
// })


//  Color Picker Live Preview 
// Use an <input type="color"> to change the background color of a preview box 
// live.

// let color = document.querySelector("#color")

// color.addEventListener("input" , ()=>{
//     document.body.style.backgroundColor = color.value
// })



//  Checkbox Agreement 
// Disable the "Submit" button unless a "Terms and Conditions" checkbox is checked. 

// let agree = document.querySelector("#agree")
// let btn = document.querySelector("#btn")

// agree.addEventListener("change" , ()=>{
//     if(agree.checked){
//         btn.disabled = false;
//     }else{
//         btn.disabled = true;
//     }
// })