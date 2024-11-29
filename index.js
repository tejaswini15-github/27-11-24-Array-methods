var arr=[10,12,15,14,67,85];
console.log(arr.at(4)); // 67
console.log(arr.at(0));//10
console.log(arr.at(-1)); //85
console.log(arr[arr.length - 1]);
console.log(arr);
arr.unshift(102)
console.log(arr)

// unshift()
var result=arr.unshift(30) // 30 102 10 12 15 14 67 85
console.log(arr)
console.log(result)

var res = arr.unshift(1, 2, 3, 4, 5);
console.log(arr);
console.log(res);  // (13) [1,2,3,4,5,30,102,10,12,15,14,67,85]
                      13



arr=[10,14,19,12,49]
arr[arr.length]=20 // adding element at last
console.log(arr) // (6) [10,14,19,12,49,20]   


// push()    // adding element at last
arr.push(10)
var res = arr.push (45, 18, 7)
console.log(res) //10
console.log(arr)

// pop()  removes last element from array
arr=[10,12,94,32,14,56]
console.log(arr)
arr.pop()
var res = arr.pop()
console.log(arr) // (4) [10,12,94,32]
console.log(res)

arr=[]
res=arr.pop()
console.log(res)  // undefined


// shift()  to delete from front side
arr = [12,4123,312,43,34,1,12,12]
console.log(arr)
arr.shift()
res=arr.shift()
console.log(arr,res)


arr=[12,43,12,34,4334,5345,423,23,234]
for (var i=0; i<arr.length; i++) {
    arr[i]=0
}
console.log(arr)

arr =[12,43,12,34]
for (var i=0; i<arr.length; i++) {
    arr[i]=0
    console.log(arr)
}

arr=[12,43,12,34]
for (var i=0; i<arr.length; i++) {
    arr[i]=0
   
}
console.log(arr)


// fill() fill array  section with changes all array elements from start to end
arr.fill(0)
console.log(arr)

arr=[12,43,12,34]
arr.fill (0,1,3)
console.log(arr)


// slice() and splice()

arr=[12,43,54,67,8,44,2,2,4];
console.log(arr.slice())
console.log(arr.slice (2)) // starts from index2
console.log(arr)
console.log(arr.slice(3,7))
console.log(arr.slice(-4)) //starts from index -4
console.log(arr.slice(3,-2))
console.log(arr.slice(0,-1))
console.log(arr.slice(-14))
console.log(arr.slice(-5,-10))


arr=[1,4,6,1,3,4,5,9]
arr.splice(1)
console.log(arr)
console.log(res)

arr.splice(0)
console.log(arr)

arr=[2,3,45,2,4,3,21,321,3,5,5]
arr.splice(4,1)  // 4th index deleted
console.log(arr) //(10) [2,3,45,2,3,21,321,3,5,5]
 
arr.splice(6,3);
console.log(arr)  // [2,3,45,2,3,21,5]

arr.splice(3,1,76)  //[2,3,45,76,3,21,5]
console.log(arr) 

arr.splice (3,0,34,454,65,57,67,67)
console.log(arr)



// TASKS QUESTIONS
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

var fruits = ["apple", "banana", "cherry"];
var removed = fruits.pop();
console.log(fruits, removed);

var numbers = [5, 10, 15];
var removed = numbers.shift();
console.log(numbers, removed);

var animals = ["cat", "dog"];
var length = animals.unshift("lion");
console.log(animals, length);

var data = [100, 200, 300, 400];
data.length = 2;
console.log(data);

var value = [1, 2, 3];
var isArray = Array.isArray(value);
console.log(isArray);

var arr1 = [1, 2];
var arr2 = [3, 4];
var result = arr1.concat(arr2);
console.log(result);

var letters = ["a", "b", "c"];
var count = letters.push("d", "e");
console.log(letters, count);


var nums = [1, 2, 3, 4];
nums.pop();
nums.shift();
console.log(nums);

var arr = [1, 2, 3];
var length = arr.unshift(0);
arr.pop();
console.log(arr, length);

var items = ["pen", "pencil", "eraser"];
var length = items.push("sharpener");
console.log(items, length);

var nums = [10, 20, 30];
nums.length = 5;
console.log(nums);

var fruits = ["mango", "apple"];
fruits.shift();
fruits.push("orange");
console.log(fruits);

var arr = [1, 2, 3];
arr.pop();
arr.unshift(0);
console.log(arr);

var letters = ["x", "y"];
letters.unshift("w");
letters.push("z");
console.log(letters);

var values = [];
values.push(1);
values.pop();
console.log(values);

var nums = [100];
nums.unshift(50);
nums.pop();
console.log(nums);

var arr1 = ["a"];
var arr2 = ["b", "c"];
var combined = arr1.concat(arr2);
console.log(combined);

var nums = [5, 10];
nums.push(15);
nums.shift();
console.log(nums);

var data = ["x", "y"];
data.unshift("z");
data.pop();
console.log(data);

var arr = [];
arr.push(1, 2);
arr.pop();
console.log(arr);

var arr = ["a", "b", "c"];
arr.pop();
arr.push("d");
console.log(arr);

var arr = ["x"];
arr.unshift("y");
arr.push("z");
arr.shift();
console.log(arr);

var arr = ["1"];
arr.unshift("2", "3");
console.log(arr);

var arr = [10];
arr.push(20, 30);
arr.shift();
console.log(arr);

var arr = [];
arr.unshift("a");
arr.push("b");
arr.unshift("c");
console.log(arr);

var arr = ["1"];
arr.pop();
arr.unshift("2");
console.log(arr);

var nums = [5];
nums.push(10, 15);
nums.length = 2;
console.log(nums);

var arr = ["a", "b", "c"];
arr.pop();
arr.length = 5;
console.log(arr);

var arr = ["p"];
arr.push("q");
arr.unshift("r");
arr.shift();
arr.pop();
console.log(arr);
