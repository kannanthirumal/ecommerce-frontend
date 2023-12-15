/**
 * variables
 * */

/**Form */
const showSignupButton = getElemenet("showSignupButton");
const showLoginButton = getElemenet("showLoginButton");
const loginForm = getElemenet("loginForm");
const signupForm = getElemenet("signupForm");
const loginButton = getElemenet("loginButton");
const signupButton = getElemenet("signupButton");

/**Signup input */
const signupUsername = getElemenet("signupUsername");
const signupPassword = getElemenet("signupPassword");
const signupEmail = getElemenet("signupEmail");

/**Login input */
const loginUsername = getElemenet("loginUsername");
const loginPassword = getElemenet("loginPassword");

/**Signup/login error */
const authErrorMessage = getElemenet("authErrorMessage");
const succErrorMessage = getElemenet("succErrorMessage");

/*
 * event listeners
 */

showSignupButton.addEventListener("click", showSignup);
showLoginButton.addEventListener("click", showLogin);
signupButton.addEventListener(loginFn);
loginButton.addEventListener(signupFn);

/**
 * functions
 */
function getElemenet(id) {
  return document.getElementById(id);
}
function showSignup() {
  loginForm.classList.add("d-none");
  signupForm.classList.remove("d-none");
}

function showLogin() {
  loginForm.classList.remove("d-none");
  signupForm.classList.add("d-none");
}

function loginFn() {}

function signupFn() {}
