// Sign Up Info
const signUpFName = document.getElementById("fName");
const signUpLName = document.getElementById("lName");
const signUpPassword = document.getElementById("password");
const signUpEmail = document.getElementById("email");
const signUpUsername = document.getElementById("username");
const signUpCity = document.getElementById("city");
const signUpState = document.getElementById("state");
const signUpZipCode = document.getElementById("zipCode");

// Sign In Info
const logInUsername = document.getElementById("logInUsername");
const logInPassword = document.getElementById("logInPassword");

const isEmailExist = (email) => users.some(user => user.email.toLowerCase() === email.toLowerCase());
const isUsernameExist = (username) => users.some(user => user.username.toLowerCase() === username.toLowerCase());



// Display Messages
const usernameDisplay = document.getElementById('usernameDisplay'); // Changed ID for clarity
const existMessage = document.getElementById('exist');
const incorrectMessage = document.getElementById('incorrect');

// Load Stored Users
let users = JSON.parse(localStorage.getItem('users')) || [];


// Load Session Username
const sessionUsername = localStorage.getItem('sessionUsername');

if (sessionUsername) {
  // Dynamically resolve base URL for links
  const baseURL = window.location.origin; // e.g., http://127.0.0.1:5500

  // Update usernameDisplay link (assuming userinfo.html is in /HTML folder)
  const usernameDisplay = document.getElementById("usernameDisplay");
  if (usernameDisplay) {
    usernameDisplay.innerHTML = `
      <a href="${baseURL}/HTML/userinfo.html" class="nav-link active underline fs-5 text-white text-capitalize">
        <span class="text-danger">${sessionUsername}</span>
      </a>`;
  }

  // Hide sign-up and log-in links if they exist
  const accountSignUp = document.getElementById("accountSignUp");
  const accountLogIn = document.getElementById("accountLogIn");
  if (accountSignUp) {
    accountSignUp.classList.add("d-none");
  }
  if (accountLogIn) {
    accountLogIn.classList.add("d-none");
  }
}


// Helper Functions
const isEmpty = (...fields) => fields.some(field => !field.value.trim());

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isStrongPassword = (password) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password);

const isValidUsername = (username) => /^[a-zA-Z0-9]{3,}$/.test(username);

const isValidZipCode = (zipCode) => /^\d{5}$/.test(zipCode);

const showError = (element, message) => {
  element.innerHTML = `<p class="text-danger mt-3">${message}</p>`;
};

const clearError = (element) => {
  if (element) {
    element.innerHTML = '';
  }
};


// Sign Up Function
const signUp = () => {
  const existMessage = document.getElementById("existMessage");
  clearError(existMessage);

  if (isEmpty(signUpFName, signUpLName, signUpPassword, signUpEmail, signUpUsername, signUpCity, signUpState, signUpZipCode)) {
    showError(existMessage, "All inputs are required");
    return;
  }

  if (!isValidEmail(signUpEmail.value)) {
    showError(existMessage, "Invalid email format");
    return;
  }

  if (!isStrongPassword(signUpPassword.value)) {
    showError(existMessage, "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character");
    return;
  }

  if (!isValidUsername(signUpUsername.value)) {
    showError(existMessage, "Username must be at least 3 characters and alphanumeric only");
    return;
  }

  if (!isValidZipCode(signUpZipCode.value)) {
    showError(existMessage, "Zip code must be 5 digits");
    return;
  }

  if (isEmailExist(signUpEmail.value)) {
    showError(existMessage, "Email already exists");
    return;
  }

  if (isUsernameExist(signUpUsername.value)) {
    showError(existMessage, "Username already exists");
    return;
  }

  const newUser = {
    name: `${signUpFName.value.trim()} ${signUpLName.value.trim()}`,
    email: signUpEmail.value.trim(),
    password: signUpPassword.value.trim(),
    username: signUpUsername.value.trim(),
    city: signUpCity.value.trim(),
    state: signUpState.value.trim(),
    zipCode: signUpZipCode.value.trim(),
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  showError(existMessage, 'Success! You can now <a href="LogIn.html" class="text-danger">Log In</a>');
};

const login = () => {
  const incorrectMessage = document.getElementById("incorrectMessage");

  // Ensure the element exists before proceeding
  if (!incorrectMessage) {
    console.error("Element with ID 'incorrectMessage' not found in the DOM.");
    return;
  }

  clearError(incorrectMessage);

  if (isEmpty(logInUsername, logInPassword)) {
    showError(incorrectMessage, "All inputs are required");
    // incorrectMessage.innerHTML = ``
    return;
  }

  const username = logInUsername.value.trim();
  const password = logInPassword.value.trim();

  const user = users.find(
    (user) =>
      user.username.toLowerCase() === username.toLowerCase() &&
      user.password === password
  );

  if (user) {
    localStorage.setItem("sessionUsername", user.name);
    location.replace("/index.html");
  } else {
    showError(incorrectMessage, "Incorrect username or password");
  }
};


// Real-Time Validation on Input Fields
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    const existMessage = document.getElementById("existMessage");
    clearError(existMessage);
  });
});


function LogOut() {
  localStorage.removeItem('sessionUsername');
}