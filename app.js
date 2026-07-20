// practice
// let user = prompt("enter your username");
// if(user.trim() === ""){
//     console.log("please enter your username")
// }else{
//     console.log("welcome user")
// }

// let stdName = prompt("enter your student name");
// if(user.trim()=== ""){
//     console.log("yes you're in")
// }else{
//     console.log("sorry! your name is not selected")
// }

// let data = prompt("enter your data");
// if(data.trim()=== ""){
//     console.log("invalid data")
// }else{
//     console.log("data is correct")
// }
        //    SPLICE
// let names = ["muntaha", "sundus", "anshara", "ayesha", "amna"]
// names.splice(1,0);
// console.log(names);


// let students = ["areesha", "iqra", "asma", "urooj","zoha"];
// students.splice(1,0,"muntaha","kinza")
// console.log(students)

// let arr = ["ayesha", "ifra", "zoya", "kashaf"]
// arr.splice(2,1,"guriya");
// console.log(arr)

//         //   FOR LOOP
// for(let i = 1; i <= 10; i++ ){
//         console.log(i)
// }        

// for (let count = 10; count >= 1; --count){
//         console.log(count)
// }

// for(print = 1; print <= 7; print++){
//         console.log(print, "welcome")
// }

// for(let table = 1; table <= 10; table++){
//         console.log(5*table)
// }

// for(let i = 1; i<=10; i++){
//         console.log(2*i)
// }

// let num = +prompt("enter your number")
// for(let i = 1; i<= 10; i++){
//         console.log(num + " " + " x " + " " + i + " " + " = " + " " + num*i)
// }

                // ASSIGNMENT
// ques:1
let fruits=["apple", "banana", "mango","grapes"];
for(let i= 0; i < fruits.length ; i++){
        console.log(i + ": " + fruits[i])
} 

// ques:2
let nums = [12, 45, 7, 23, 56, 9]
let sum = 0;
for(let i = 0; i < nums.length; i++){
        sum += nums[i]
}
console.log(sum)

// ques:3 using chatgpt
let scores = [55, 89, 23, 91, 67];
let largestNum = scores[0];
for(let i = 0; i< scores.length; i++){
        if(scores[i] > largestNum){
                largestNum = scores[i];
        }
}
console.log(largestNum);

// ques:4
let colors = ["red", "blue", "green", "yellow"]
for(let i = colors.length -1 ; i >= 0; i--){
        console.log(colors [i])
}

// ques:5
let cart = ["shirt", "shoes"];
cart.push("jacket", "cap");
console.log(cart);
cart.pop();
console.log(cart);

// ques:6
let queue = ["ali", "sara", "bilal"];
queue.unshift("zain");
console.log(queue);
queue.shift();
console.log(queue);

// ques:7
let numbers = [10,20,30,40,50,60,70];
console.log(numbers.slice(0,3));
console.log(numbers.slice(2,6))
console.log(numbers.slice(5,7))

// ques:8
let team = ["ahmed", "fatima", "usman", "hina", "zara"];
team.indexOf("usman");
team.splice(team.indexOf("usman"), 1);
console.log(team);

// ques:9
let days = ["mon", "tues", "thu", "fri"];
days.splice(2, 0, "wed");
console.log(days);
days.splice(3,4, "sat", "sun");
console.log(days);

// ques:10 using chatgpt
let todo = ["buy groceries", "clean room", "finish homework"];
todo.push("call mom")
todo.unshift("wake up early")
todo.splice(2,1)
for(let i = 0; i < todo.length; i++){
        console.log((i + 1) + ". " + todo[i]);
}


// ques:11
let mixNums = [4, 11, 8, 15, 22, 7, 30, 9];
let evenNums = [];
for(let i = 0; i< mixNums.length; i++){
        if(mixNums[i] % 2 === 0){
                evenNums.push(mixNums[i]);
        }
}
console.log(evenNums);
