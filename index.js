// Declare a global variable customerName
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it a value
function setBestCustomer() {
    bestCustomer = 'not bob'; // Implicit global variable declaration
}

// Function to overwrite the value of bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant leastFavoriteCustomer in the global scope
const leastFavoriteCustomer = 'some customer';

// Function to attempt changing the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new customer'; // This will throw an error
}

