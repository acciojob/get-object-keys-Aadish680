//your JS code here. If required.
// Create the student object
const student = {
  name: "John",
  age: 22,
  city: "Ahmedabad"
};

Object.prototype.getKeys=function(){
	return.Object.keys(this);
}

console.log(student.getKeys); 



