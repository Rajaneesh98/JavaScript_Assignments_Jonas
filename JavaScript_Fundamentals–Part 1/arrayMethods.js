const arr = [1, 2, 3, 4, 5];

arr[1] = 23; // even using const arrays are still mutable.
// The above one is allowed because only primitives are immutable.

// arr = [3,2,1]; // This is not allowed, i.e entire redeclaration is not allowed.

arr.push("a"); // add element at the end.

let temp = arr.push("b"); // temp stores the new length of array.

arr.unshift("z"); // add element at the front.

temp = arr.unshift("x"); // temp stores the new length of the array.

arr.pop(); // deletes the last element.

let deleted = arr.pop(); // deleted stores the deleted element.

arr.shift(); // deletes the first element.

deleted = arr.shift(); // deleted stores the deleted element.

temp = arr.indexOf(3); // temp stores the index of the element given or -1.

temp = arr.includes(1); //temp stores true if the element is present or false if not.
