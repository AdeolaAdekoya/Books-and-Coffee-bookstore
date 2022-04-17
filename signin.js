const signInForm = document.querySelector('#signin-form')

const emailInput = document.querySelector('#email-input')

const passwordInput = document.querySelector('#password-input')

const termsInput = document.querySelector('#terms-input')

const formButton = document.querySelector('#signin-form button')

formButton.disabled = true
termsInput.onchange = () => {
    if (termsInput.checked) {
        formButton.disabled = false
    } else {
        formButton.disabled = true
    }
}


// function that does validation


function validate(input) {
    let errorSpan = document.createElement('span');
    errorSpan.style.color = 'red'
    errorSpan.style.fontSize = '12px'
    errorSpan.innerHTML = 'Invalid Input'
    errorSpan.className = 'error'

    
    if (!input.value.trim()) {
        input.insertAdjacentElement("afterend", errorSpan)
        return false
    } else {
        return true
    }
}


// sql = structured query language

// local sorage what is it?
// to save data as long as the stuff runs.. local sotorage.set item .. set item takes in a key and a value .. you can only store straing in local storage if its is not a string convert to .tostring


// get item

// .length tells yoy the size of your local storage and always returns a number. 

// clear is a method that doesnt take in any parameter but wipes out everything in the local storage 

//  to tple list and convert it into a json string
// let myList = JSON.stringify([45,45,67,90])


function createUser (email,password) {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]))
    }

// fetching a list of saved users
    let users = JSON.parse(localStorage.getItem('users'))
    // json.parse cnverts it into an array 
    // to check if this use already exists 
    let userExists = users.find(user => user.email === email)
// create a new user if user exists 
    if (!userExists) {
        let newUser = {email, password}
        users.push(newUser)
        localStorage.clear()
        localStorage.setItem('users', JSON.stringify(users))

    }
}

signInForm.onsubmit = (evt) => {
    // to prevent default relaod
    evt.preventDefault()
// to validate input
 let isValidEmail = validate(emailInput)
let isValidPassword = validate(passwordInput)

if (isValidEmail && isValidPassword) {
    createUser(emailInput.value, passwordInput.value)
    if (!localStorage.getItem('isaAuthenticated')){
    localStorage.setItem('isAuthenticated', JSON.stringify(true))
    document.querySelector('#signin').style.display = 'none'
    }
} else{
    alert('Login Failed')
}

let error = document.querySelectorAll('.error')
setTimeout(() => {
    error.forEach(err => err.remove())
}, 1000)
}

// on page load/refresh, check if the user is already signed in
let auth = JSON.parse(localStorage.getItem('isAuthenticated'))

if (auth) {
    document.querySelector('#signin').style.display = 'none'
}
