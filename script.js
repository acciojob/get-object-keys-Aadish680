//your JS code here. If required.
// Create the student object
const student = {
  name: "John"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Example test cases
console.log(getKeys(student)); // Output: ["name"]

// Additional tests
const student2 = {
  name: "Alice",
  age: 22,
  city: "New York"
};
console.log(getKeys(student2)); // Output: ["name", "age", "city"]

const emptyObj = {};
console.log(getKeys(emptyObj)); // Output: []
