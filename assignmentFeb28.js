// assignmentFeb28.js


//1) Find a 2nd maximum and Minimum number in an array 

let arr1=[1, 2,3,4,5,6,6,7,8]

function calcMaxMin(arr1){

    let firstMax=arr1[0]
    let secondMax=arr1[1]

    let firstMin=arr1[0]
    let secondMin=arr1[1]

for(let i=0;i<arr1.length;i++){

    if(arr1[i]>firstMax){
        secondMax=firstMax
        firstMax=arr1[i]
    }
    if(arr1[i]<firstMin){
        secondMin=firstMin
        firstMin=arr1[i]
    }
}
console.log(secondMax)
console.log(secondMin)

}

calcMaxMin(arr1)



//2)Sort an array without using built in methods

let arr2=[5,3,6,4,2,1]

function mySort(arr2){

    for(i=0;i<arr2.length;i++){
        for(j=0;j<arr2.length;j++){
        
            if(arr2[j]>arr2[j+1]){
                let temp=arr2[j]
                arr2[j]=arr2[j+1]
                arr2[j+1]=temp

            }
        }
    }
console.log(arr2)

}mySort(arr2)


// console.log(arr2.sort())


//3) write a function to remove the duplicate element from an array

let arr3=[1,2,3,4,5,6,6,7,8]


function removeDuplicate(arr3){
    let newArr3=[];
    for(let i=0;i<arr3.length;i++){
        if(newArr3.indexOf(arr3[i])===-1){
            newArr3.push(arr3[i])
        }
    }
    return newArr3
}

console.log(removeDuplicate(arr3))

// function removeDuplicates(arr) {
//     return arr.filter((element, index) => arr.indexOf(element) === index);
// }

// let inputArray = [1, 2, 3, 4, 2, 5, 6, 1];
// let result = removeDuplicates(inputArray);
// console.log(result);


//4) write a function to remove duplicate elements in a string "HelloWorld"


let string4="HelloWorld"

let arr4=string4.split('')
console.log(arr4)
let newArr4=[]
for (let el of arr4){

    if(newArr4.indexOf(el)==-1){
        newArr4.push(el)
    }
   
}
console.log(newArr4.join(''))


//5)Write function to convert camelCase to snake_case

function camelToSnake(camelCaseString) {
    let snakeCaseString = '';
    let lastCharWasUpperCase = false;

    for (let char of camelCaseString) {
        if (char.toUpperCase() === char) {
            if (!lastCharWasUpperCase) {
                snakeCaseString += '_';
            }
            snakeCaseString += char.toLowerCase();
            lastCharWasUpperCase = true;
        } else {
            snakeCaseString += char;
            lastCharWasUpperCase = false;
        }
    }

    return snakeCaseString;
}

let camelCaseString = "myVariableName";
let snakeCaseString = camelToSnake(camelCaseString);
console.log("Snake Case String:", snakeCaseString);


//6)write a function to conver snake_case to camelCase

function snakeToCamel(snakeCaseString) {
    let camelCaseString = '';
    let capitalizeNext = false;

    for (let i = 0; i < snakeCaseString.length; i++) {
        if (snakeCaseString[i] === '_') {
            capitalizeNext = true;
        } else {
            camelCaseString += capitalizeNext ? snakeCaseString[i].toUpperCase() : snakeCaseString[i].toLowerCase();
            capitalizeNext = false;
        }
    }

    return camelCaseString;
}


 snakeCaseString = "my_variable_name";
 camelCaseString = snakeToCamel(snakeCaseString);
console.log("Camel Case String:", camelCaseString);


//7) write a function to flatten the nested array

let arr7=[1,2,3,[4,5,6,[7,8,9,[10,11]],[12,13]]]

let flattenedArray=[]
function flatArray(arr7){
   
for(let el of arr7){
    if(typeof el== 'number'){
        flattenedArray.push(el)
    }
    else{
        flatArray(el)
    }
}
return flattenedArray
}
console.log(flatArray(arr7))



//8) Write a function to find the 2nd largest number in a nested array

let arr8=[1,2,3,[4,5,6,[7,8,9]]]

let newFlat8=arr8.flat(Infinity)
// console.log(newFlat8)

let max=newFlat8[0]
let secondMax=newFlat8[1]

for(i=0;i<newFlat8.length;i++){

    if(newFlat8[i]>max){
        secondMax=max
        max=newFlat8[i]
    }
}
console.log(secondMax)


//9) write a function to generate below pattern
// 	1
// 	2 9
// 	3 8 10
// 	4 7 11 14
// 	5 6 12 13 15



for(let i=1;i<=5;i++){
    let result=''
    for(let j=1;j<=i;j++){
        result+=i
    }
    console.log(result)
}


function generatePattern(rows) {
    let result = '';
    for (let i = 1; i <= rows; i++) {
        let num = i;

        for (let j = 1; j <= i; j++) {
            result += num + ' ';

            if (j < i) {
                num += (rows - j);
            }
        }
        result += '\n';
    }
    console.log(result);
}

generatePattern(5);


//10. program for adding zeros after 3 values in array 
	// Example: [1, 2,3,4,5,6,6,7,8]
	// Output: [1, 2,3,0,4,5,6,0,6,7,8,0]
   let arr10=[1,2,3,4,5,6,6,7,8]

   let nerArr10=[]
for(let i=0;i<arr10.length;i++){
    nerArr10.push(arr10[i])

    if((i+1)%3==0 ){
        nerArr10.push(0)
    }

}
console.log(nerArr10)


//11)Reverse a string a without using built in method 

let str11='sairam'

let reversedStr=''

for(let i=str11.length-1;i>=0;i--){
        reversedStr +=str11[i]
    }

console.log(reversedStr)

//12). Write a function to return a fibonacci series

//5=0,1,1,2,3,5,8
let input=8
let output=[0,1]
for(let i=2;i<input;i++){
    output[i]=output[i-1]+output[i-2]
  
}
console.log(output)


//13)Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original. 


function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(element => deepClone(element));
    }
  
    let clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  
  let originalObject = {
     a: 1,
    b: {
      c: 2,
      d: [3, 4],
    },
  };
  
  let clonedObject = deepClone(originalObject);
  
  console.log(clonedObject);
  

//14) write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl'

let array14= [1,2,3,3,5,2,1,7,6,8,7,8]
function repeatArray(array14){
    let object={}
    for(let el of array14){
        if(object[el]){
            object[el]++
        }
        else{
            object[el]=1
        }
    }
    return object
}

console.log(repeatArray(array14))

let string14= "abcdaabdlfjl"

function repeatedEle(string14){
    let object={}
    for(let el of string14){
        if(object[el]){
            object[el]++
        }
        else{
            object[el]=1
        }
    }
    return object
}

console.log(repeatedEle(string14))


//15)Write a function to capitalize the each words first letter to capital 
    // Ex : ['abc','def','ghi']
	// output : ['Abc', 'Def','Ghi"]

let arr15=['abc','def','ghi']


let output15=arr15.map(el=>el.charAt(0).toUpperCase()+el.slice(1))

console.log(output15)


//16)write a function to calculate the sum of total marks in an array of objects 
	
let arr16=[{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]

let newArr16=arr16.map(el=>el.marks)
console.log(newArr16)
let totalMarks=newArr16.reduce((total,curr)=>total+curr)
console.log(totalMarks)


//20) Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]
let a = [1,2,3,4,5] ;
let b = [5,3,7,8,9]

let newArray=[]
// let mapped_a=a.map(el=>{
//     if(!newArray.includes(el)){
//         newArray.push(el)
//     }
// })

// let mapped_b=b.map(el=>{
//     if(!newArray.includes(el)){
//         newArray.push(el)
//     }
// })

a.forEach(el=>{
    if(!newArray.includes(el)){
        newArray.push(el)
    }
})

b.forEach(el=>{
    if(!newArray.includes(el)){
        newArray.push(el)
    }
})
console.log(newArray)