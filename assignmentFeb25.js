//1)Write a function curry that takes a function and curried arguments and returns a new function that can take the remaining arguments.
function curry(func, ...curriedArgs) {
    return function (...args) {
        let combinedArgs = curriedArgs.concat(args);

        if (combinedArgs.length >= func.length) {
            return func(...combinedArgs);
        } else {
            return curry(func, ...combinedArgs);
        }
    };
}


function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add, 1);
const result = curriedAdd(2)(3);
console.log(result);


//2)Implement a function deepFlatten that takes a deeply nested array and flattens it.
let arr=[1,2,3,[3,4,'as','sd',1,23],1,['eedfr',12,5,54,[4,45,'34']]]
 

function flatFunc(arr){
    let flatArray=[]
    for(let el of arr){
        if(Array.isArray(el)){
            flatArray.push(...flatFunc(el))
        }
        else{
            flatArray.push(el)
        }
       
    }
return flatArray
}


console.log(flatFunc(arr))


//3)Create a debounce function that limits the execution of a function call and waits for a certain amount of time before running it again.

//=>debouncer.html

//4)Write a throttle function that ensures a given function is only called at most once in a specified time period.

//=>throttling.html


//5)Write a function chunk that splits an array into subarrays of specified length.

let arr2=[1,2,3,4,5,6,7,8,9,0,11,12,13,14,15]

function chunk(arr2,length){
    let result=[]
    for(i=0;i<arr2.length;i+=length){
    result.push(arr2.slice(i,i+length))

    }
    return result
}
 let out=chunk(arr2,3)
console.log(out)



//6)Create a function deepEqual that compares two values deeply, checking if they are equal in value and structure.

function deepEqual(val1,val2){
if(val1===val2){
    return true
}
  if(typeof val1!=='object'|| val1==null||typeof val2!=='object'|| val2==null){
    return false;
  }
  let keys1 = Object.keys(val1);
  let keys2 = Object.keys(val2);
  console.log(   keys1)
console.log(   keys2 )
  if(keys1.length!==keys2.length){
    return false

  }
  
  for (let key of keys1) {
    if ( val1[key] !== val2[key]) {
        return false;
    }
}

return true;
}

const obj1 = {
    a: 1,
    b: 2,
    c:3,
};

const obj2 = {
    a: 1,
    b: 2,
    c:3,
};

console.log(deepEqual(obj1, obj2))



//7)Implement your own bind function that replicates the functionality of JavaScript's native Function.prototype.bind.
function customBind(func, context, ...boundArgs) {
    return function (...args) {
        return func.apply(context, [...boundArgs, ...args]);
    };
}

const originalFunction = function (greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
};

const boundFunction = customBind(originalFunction, { name: 'John' }, 'Hello');
boundFunction('!');


//8)Write a function unique that returns a new array with only the unique elements from the original array.

let arrUni=[1,2,3,3,4,5,4,6,2]
function unique(arrUni){
let uniqueArray=[]
    for(let el of arrUni){
        if(!uniqueArray.includes(el)){
            uniqueArray.push(el)
        }
    }
    return uniqueArray
}

console.log(unique(arrUni))


//9)Implement a function intersection that finds the intersection of two arrays, returning an array with elements that appear in both.


let arr4=[1,2,3,4,5,6]
let arr5=[5,6,7,8,9]

function intersection(arr4,arr5){
    let commanElementsArray=[]
for(let el1 of arr4){

    for(let el2 of arr5){
        if(el1==el2){
            commanElementsArray.push(el1)
        }
    }
}
return commanElementsArray
}

console.log(intersection(arr4,arr5))



//10)Write a custom filter function that mimics the behavior of the native Array.prototype.filter method.

let arr6=[10,22,33,40,50,60,70,80]

// for(let i=0;i<arr6.length;i++){
//     function filter(arr6Ele,i,arr6){

//         if(arr6Ele<50){
//             console.log(arr6Ele)
//         }
// }
// filter(arr6[i],i,arr6)
// }



function customFilter(arr,callBack){
    
let result=[]
    for(let i=0;i<arr.length;i++){
        if(callBack(arr[i],i,arr)){
            result.push(arr[i])  
        }
    }
return result
}
let filteredOut=customFilter(arr6,function(value){
   return  value<50
})
console.log(filteredOut)


//11)Create your own version of the reduce method called myReduce that mimics the behavior of the native Array.prototype.reduce.
function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

const numbers = [1, 2, 3, 4, 5];

const sum = myReduce(numbers, (acc, current) => acc + current, 0);
console.log(sum);

//12)Write a function permute that returns all possible permutations of the elements in an array

function permute(arr) {
    if (arr.length === 1) {
        return [arr];
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let remainingElements = arr.slice(0, i).concat(arr.slice(i + 1));

        let permutationsOfRest = permute(remainingElements);

        for (let perm of permutationsOfRest) {
            result.push([currentElement, ...perm]);
        }
    }

    return result;
}


let arrayToPermute = [1, 2, 3];
let permutations = permute(arrayToPermute);
console.log(permutations);

//13)Implement a function rotateArray that rotates an array to the right by a given number of steps.

function rotateArray(arr, steps) {
    const length = arr.length;

    if (length === 0) {
        return [];
    }


    steps = steps % length;

   
    if (steps < 0) {
        steps = length + steps;
    }


    return arr.slice(length - steps).concat(arr.slice(0, length - steps));
}


const originalArray = [1, 2, 3, 4, 5];
const stepsToRotate = 2;
const rotatedArray = rotateArray(originalArray, stepsToRotate);
console.log(rotatedArray);  // This will print [4, 5, 1, 2, 3]



//14)Write a function isBalanced that takes a string containing only parentheses and checks if they are balanced.

function isBalanced(str) {
    let stack = [];

    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
          
            stack.push(char);
        } else if (char === ')' && stack.pop() !== '(') {
          
            return false;
        } else if (char === ']' && stack.pop() !== '[') {
           
            return false;
        } else if (char === '}' && stack.pop() !== '{') {
        
            return false;
        }
    }


    return stack.length === 0;
}


let string = "({[()]})";


console.log(isBalanced(string));  

//15)Create a function mergeIntervals that merges all overlapping intervals in an array of interval pairs.
function mergeIntervals(intervals) {
    if (!intervals || intervals.length === 0) {
        return [];
    }

    intervals.sort((a, b) => a[0] - b[0]);

    let result15 = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let lastMerged = result15[result15.length - 1];

        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            result15.push(current);
        }
    }

    return result15;
}

let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
let result15 = mergeIntervals(intervals);
console.log(result15);

//16)Implement a function nestedSum that calculates the sum of all numbers in a nested array, regardless of how deep the array is.

function nestedSum(arr) {
    let sum = 0;

    for (let element of arr) {
        if (Array.isArray(element)) {
           sum += nestedSum(element);

        } else if (typeof element === 'number') {
          
            sum += element;
        }
    }

    return sum;
}


let nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, [9, 10]]];
 result = nestedSum(nestedArray);
console.log(result);  


//17)Implement a function calcLetters that calculates and resturns the sum of all repeated characters in an strings.

function calcLetters(str) {
    const letterCount = {};

    for (const char of str) {
        const normalizedChar = char.toLowerCase();

        if (letterCount[normalizedChar] === undefined) {
            letterCount[normalizedChar] = 1;
        } else {
            letterCount[normalizedChar]++;
        }
    }

    return letterCount;
}


const inputString = "Apple";
let result2 = calcLetters(inputString);
console.log(result2);


