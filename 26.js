// Task 53

function myLocalScope() {
  const myVar = 5;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);