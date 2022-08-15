/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
// console.log([ 1,7,9,45, ])
// console.log(["Str", "alex","moh"])
// console.log(['the','fox','over' ,'lazy', 'dog',  ])

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

// console.log(fruits[1])
// console.log(fruits[0])

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// const Favorites = ["Mansaf1","Mansaf2","Mansaf3","Mansaf4","Mansaf5","score1","score2","score3","V for Vendetaa","The Godfather","The Dark Knight","Mr. Nobody"]
// console.log(Favorites)
// console.log(Array.isArray(Favorites))

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// function firstOfArray ([...Data]){
//     return Data[0]
// }
// console.log(firstOfArray([1,4,5]));
// console.log(firstOfArray(["t","u","g","x"])) 

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// function lastOfArray(Array){
//     return Array[Array.length-1]
// }
// console.log(lastOfArray([1,4,5]))
// console.log(lastOfArray(["t","u","g","x"]))

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// var array = [0,5,7,9]
// console.log(array);
// array.shift();
// console.log(array);
// array.shift();
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift(1,3,4,6,8)
// console.log(array);
// array.push(10)
// console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// var array2 = [5,9,-7,3.5];
// array2.push;
// console.log(array2) ---[ 5, 9, -7, 3.5 ];
// array2.unshift;
// console.log(array2) ---[ 5, 9, -7, 3.5 ]
// array2.shift();
// console.log(array2) ---[ 9, -7, 3.5 ];
// console.log(array2) ---- [ 5, 9, -7, 3.5 ]
// array2.pop(); --- [ 5, 9, -7 ]
// console.log(array2)

/*
/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
// function doubleValues(Array) {
    //     for (i=0;Array[i]<Array.length;i++){
    //      Array[i]=Array[i]*2
    //     }
    //     return Array
    //     }
    //     console.log(doubleValues([1,2,3]))
    //     console.log (doubleValues([5,1,2,3,10]))


/*
* Exercise:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
function onlyEvenValues(arr){
    // function onlyEvenValues(Array){
    //     let evenArray=[];
    //     for (i=0;i<Array.length;i++){
    //         if(Array[i] %2 ==0){evenArray.push(Array[i])}
    //     }
    //     return evenArray
    // }
    // console.log(onlyEvenValues([1,2,3]))
    // console.log(onlyEvenValues([5,1,2,3,10]) )    
    }
    
    /*
    * Exercise:
    * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
    *
    * Test Case:
    *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
    *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
    *  
    * Result:
    * Test Case 1: ["ct", "mt", "tm", "uy"]
    * Test Case 2: ['hi', 'ge', 'se']
    *
    */
    // function showFirstAndLast(arr){
    // function showFirstAndLast(Array) {
        
    //     let slicedArray = [];
    //     for (let i = 0; i < Array.length; i++){
    //         slicedArray.push(Array[i][0] + Array[i][Array[i].length - 1]);}
    
    //     return slicedArray;
    // }
    // console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']))}
    /*8
    Create a function called middleOfArray
    that take an array as a parameter
    and return the middle element in an array if it is have an odd elemnets
    and return the two middle elemnt in an array if it is have an even elemnets
    
    Ex: middleOfArray([1,4,5]) => 4
    Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
    */
    // function middleOfArray(Array) {
    //     evenOfArray=[];
    //     oddOfArray=[]
    //     if (Array.length % 2 == 0) {
    //         return [Array[Array.length / 2 - 1], Array[(Array.length / 2)]];
             
           
    //     } else {
    //         return oddOfArray=Array[Math.floor(Array.length/2)];
          
         
       
    //     }
        
    // }
    // console.log(middleOfArray([1, 4, 5]))
    // console.log(middleOfArray(["t","u","g","x"]))
    
    /*
    9
    Using assignment operator (=)
    make the animals array have these animals
    var animals = ['cat', 'ele', 'bird']
    animals; => ['zebra', 'elephant']
    ** hint: animals[0]=something
    
    
    var nums= [1,2,3,8,9]
    nums => [5,-22,3.5,44,98,44]
    */
    // var animals1 = ['cat', 'ele', 'bird']
    // animals2=['zebra', 'elephant']
    // animalsCollection = animals1 .concat(animals2)
    // console.log(animalsCollection)
    
    /*
    10
    Create a function called indexOfArray
    that accept an array and index
    and return what this array have in this index
    
    var nums= [1,2,3,8,9]
    Ex: indexOfArray(nums,3) => 8
    Ex: indexOfArray(nums,1) => 2
    Ex: indexOfArray(nums,4) => 9
    
    **try more cases by your self
    */
    // function indexOfArray(Array,index){
    //     return Array[index];
    // }
     
    // console.log(indexOfArray([1,2,3,8,9],3))
    // console.log(indexOfArray([1,2,3,8,9],1))
    // console.log(indexOfArray([1,2,3,8,9],4))
    
    /*
    11
    Create a function called arrayExceptLast
    that accept an array
    and return the entire array except the last elemnt
    ** hint: search abou the function that will cut the array on MDN
    var nums= [1,2,3,8,9]
    Ex: arrayExceptLast(nums) =>  [1,2,3,8]
    
    **try more cases by your self
    */
    
    
    /*
    12
    Create a function called addToEnd
    that accept an array and value
    and return the entire array with add this value to the end of this array
    
    var nums= [1,2,3,8,9]
    Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
    
    **try more cases by your self
    */
    // function addToEnd(Array,x){
    //     Array.pop()
    //     Array.push(x)
    // return Array
    // }
    // console.log(addToEnd([1,2,3,8,9],55))
    // console.log(addToEnd([1,6,8,10,12],100))
    
    
    // all the exercises below should solved 2 times: 1- for loop 2- while lopp
    /*
    13
    Create a function called sumArray
    that accept an array
    and return the summation of all elemnt in this array
    
    var nums= [1,2,3,8,9]
    Ex: sumArray(nums) => 23
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
    // function sumArray(Array){
    //     let Sum = 0;
    //    for(i=0; i<Array.length;i++)
    //    {
    //     Sum +=Array[i];
    //    }
    // return Sum
    // }
    // console.log(sumArray([1,2,3,8,9]))
    // ------------------------------------------------------------------------------------------
    // function sumArray(Array){
    //     sum=0;
    //     i=0;
    //     while(i<Array.length){
    //         sum+=Array[i]
    // i++    }
    // return sum
    // }
    // console.log(sumArray([1,2,3,8,9]))
    
    /*
    14
    Create a function called minInArray
    that accept an array
    and return the minimum value inside this array
    
    var nums= [1,2,3,8,9]
    Ex: minInArray(nums) => 1
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
    // unsolved
    // function minInArray(Array){
    //    let min = Math.min.apply[Array]
    //     for (i=0;i<Array.length;i++){
    //         if(Array[i] ==min){console.log(min)}
    //         else{return min}
    //     }
        
    //     return Array
    // }
    // console.log(minInArray([9,2,3,8,9]))
    
    /*
    15
    Create a function called removeFromArray
    that accept an array and elemnt to remove
    and return the array after remove this elemnt from it
    
    var nums= [1,2,3,8,9]
    Ex: minInArray(nums,8) => [1,2,3,9]
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
    // function removeFromArray(Array, x) {
    
    //     for (let i = 0; i < Array.length; i++) {
    //         if (x == Array[i]) {
    //             Array.splice(i, 1);
    //         }
    //     }
    //     return Array;
    // }
    // console.log(removeFromArray([1,2,3,8,9],8))
// while

// function removeFromArray(Array, x) {
//     let i = 0;
//     while (i < Array.length) {
//         if (x == Array[i]) {
//             Array.splice(i, 1);
//         }
//         i++;
//     }
//     return Array


// }
// console.log(removeFromArray([1,2,3,8,9], 8));
    
    /*
    16
    Create a function called oddArray
    that accept an array
    and return an array have only the odd elemnts
    
    var nums= [1,2,3,8,9]
    Ex: oddArray(nums) => [1,3,9]
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
    // function oddArray(array){
    //     let results = [];
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] % 2 == 1) {
    //             results.push(array[i]);
    //         }
    //     }
    //     return results;
    // }
    // console.log(oddArray([1,2,3,8,9]));

    // while
    
    // function oddArray(array) {
    //     let results = [];
    //     let i = 0;
    //     while (i < array.length) {
    //         if (array[i] % 2 == 1) {
    //             results.push(array[i]);
    //         }
    //         i++;
    //     }
    //     return results;
    // }
    // console.log(oddArray([1,2,3,8,9]));    
    
    /*
    17
    Create a function called aveArray
    that accept an array
    and return the average of the numbers inside this array
    
    var nums= [1,2,3,8,9]
    Ex: aveArray(nums) => 4.6
    
    var nums2= [1,2,3,8,9,77]
    Ex: aveArray(nums) => 16.6
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
    // function aveArray(array){
    //     let sumArray = 0;

    // for (let i = 0; i < array.length; i++) {
    //     sumArray += array[i];
    // }
    // return sumArray / array.length;

    // }
    // console.log(aveArray([1,2,3,8,9]))
    // console.log(aveArray([1,2,3,8,9,77]))

    
    /*
    18
    Create a function called shorterInArray
    that accept an array of strings
    and return the shortest string inside this array (first)
    
    var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
    Ex: shorterInArray(strings) => "alex"
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
    // function shorterInArray(array){
    //     let shortestString = array[0];
    //     for (let i = 0; i < array.length; i++) {
    //         if (shortestString.length > array[i].length) {
    //             shortestString = array[i];
    //         }
    
    //     }
    //     return shortestString;
    // }
    // console.log(shorterInArray(["alex","mercer","madrasa","rashed2","emad","hala"]))
    // while
    // function shorterInArray(array) {
    //     let shortestString = array[0];
    //     let i = 0;
    //     while (i < array.length) {
    //         if (shortestString.length > array[i].length) {
    //             shortestString = array[i];
    //         }
    
    
    //         i++;
    //     }
    //     return shortestString;
    // }
    // console.log(shorterInArray(["alex","mercer","madrasa","rashed2","emad","hala"]))
    /*
    19
    Create a function called repeatChar
    that accept a string and char
    and return the times that this char repeat inside this string
    
    var string= "alex mercer madrasa rashed2 emad hala"
    Ex: repeatChar(string,"a") => 6
    Ex: repeatChar(string,"z") => 0
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
    // function repeatChar(string, char) {
    //     let repeats = 0;
    //     for (let i = 0; i < string.length; i++) {
    //         if (string[i] == char) {
    //             repeats++;
    //         }
    //     }
    //     return repeats;
    // }
    // var string= "alex mercer madrasa rashed2 emad hala"

    // console.log(repeatChar(string,"a"))
    // console.log(repeatChar(string,"z"))
// while
    // function repeatChar(string, char) {
    //      let repeats = 0;
    //      i=0;
    //      while(i<string.length){if (string[i] == char) {
    //         repeats++;}
    //         i++
    //      }
       
        
    //     return repeats;
    // }
    // var string= "alex mercer madrasa rashed2 emad hala"
    // console.log(repeatChar(string,"a"))
    // console.log(repeatChar(string,"z"))
    /*
    20
    Create a function called evenIndexOddLength
    that accept an array of strings
    and return a new array that have the string with odd length in even index
    
    var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
    Ex: evenIndexOddLength(strings) => ["madrasa"]
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
//    function evenIndexOddLength(array){
//         let result = [];
//         for (let i = 0; i < array.length; i++) {
//             if (i % 2 == 0 && array[i].length % 2 !== 0) {
//                 result.push(array[i]);
//             }
    
//         }
//         return result;
//     }
//     strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
//     console.log(evenIndexOddLength(strings));
   
// while

// function evenIndexOddLength(array) {
//     let result = [];
//     let i = 0;
//     while (i < array.length) {
//         if (i % 2 == 0 && array[i].length % 2 !== 0) {
//             result.push(array[i]);
//         }


//         i++;
//     }
//     return result;
// }
// strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// console.log(evenIndexOddLength(strings));
    
    
    /*
    21
    Create a function called powerElementIndex
    that accept an array of number
    and return a new array that have the elemnt power by the index of it self
    
    var nums= [44, 5, 4, 3, 2, 10]
    Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
    // function powerElementIndex(array){
    //     result=[];
    //     for (let i = 0; i < array.length; i++) {
    //         result.push(array[i] ** i);
    
    //     }
    //     return result;
    // }
    // nums= [44, 5, 4, 3, 2, 10]
    // console.log(powerElementIndex(nums))

    // while---------------------------------------
    // function powerElementIndex(array){
    //     result=[];
    //     i=0;
    //     while(i<array.length){result.push(array[i] ** i);i++
    //     }
    //     return result}
    //     nums= [44, 5, 4, 3, 2, 10]
    // console.log(powerElementIndex(nums))

    
    /*
    22
    Create a function called evenNumberEvenIndex
    that accept an array of nums
    and return a new array that have the even number in even index
    
    var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
    Ex: evenNumberEvenIndex(nums) => [2,8,34]
    
    ** solve it one time using for loop and another using while loop
    **try more cases by your self
    */
    
        
//         function evenNumberEvenIndex(Array) {
//             let result = []
//             for (let i = 0; i < Array.length; i++) {
//                 if (i % 2 == 0 && Array[i] % 2 == 0) {
//                     result.push(Array[i]);
//                 }
        
//             }
//             return result;
//         }
// nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
// console.log(evenNumberEvenIndex(nums));
// whilleeeeeeeeee
// function evenNumberEvenIndex(array) {
//     let result = []
//     let i = 0;
//     while (i < array.length) {
//         if (i % 2 == 0 && array[i] % 2 == 0) {
//             result.push(array[i]);
//         }


//         i++;
//     }
//     return result;
// }
// nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
// console.log(evenNumberEvenIndex(nums));
    
    /*
    
    While Exercises 
    1
    Create a function called subtract
    that takes a single parameter n,
    and return the subtraction of all
    starting from n to 0
    Ex: subtract(2); => 2 - 1 - 0 => 1
    Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
    Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
    */
//    function subtract(x){
//     result=x;
//     i=0;

//     while(x>i){
//         result-=i;
//         // console.log(`"i result ${i}`);
//         // console.log(`"x result ${result}`);
        
//         i++
//     }
//     return result
//    }
//    console.log(subtract(2))
//    console.log(subtract(5))
//    console.log(subtract(9))
//    console.log(subtract(-5))


    
    
    /*
    2
    Create a function called factorial
    that takes a single parameter n,
    and return the product of all integers up to n starting from 1
    Ex: factorial(2); => 2 * 1 => 2
    Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
    */
    // function factorial(x){
    //         result=x;
    //         i=1;
          
        
    //      while(x>i){
    //             result= result*i;
    //             //  console.log(`"i result ${i}`);
    //             //  console.log(`"x result ${result}`);
                
    //             i++
    //         }
    //         return result
    //     }
    //         console.log(factorial(2))
    //         console.log(factorial(4))
        
        
        
    
    /*
    3
    Create a function called repeatStr
    that takes 2 parameters string and number,
    and return the string number time with space
    Important: the continue condition should be [somthing !== 0]
    ** Think how we can return nothing ???
    ** Important: You should dint have extra space at the end
    Ex: repeatStr("to",2); => "to to"
    Ex: repeatStr("to",4); => "to to to to"
    */
//     function repeatStr(string,x){
//    i = 0;
//    str=""
//     while(i<x){
//         if(i<x-1){
//             str+= `${string} `}
//         else{
//             str+=`${string}`
//         }
//         i++
//         }
//         return  ` "${str}"`
//         }
          
//         console.log(repeatStr("hello",5))
// Retuned
    /*
    4
    Create a function called sum2
    that take two parameter
    and will return the sumation from the first number to the second number
    Ex: sum2(4, 5); => 4 + 5 => 9
    Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
//     */
// function sum2(x,y){
//         sum=0
//      while(x<=y){
//        sum+=x
//        x++ }
//    return sum
//     }
//     console.log(sum2(4, 5))
//     console.log(sum2(3, 6))
    /*
    5
    Create a function called multiOf
    that takes 3 parameters,
    and return the first number mutiple by
    (the second one ^ the third number)
    ** Important: dont use **
    Ex: multiOf(4,10,3); => 4000
    Ex: multiOf(6,3,2); => 54
    Ex: multiOf(6,2,3); => 48
    */
    // function multiOf(x,y,z){
    //     let i = 0;
    //     let numberRaised = 1
    //     while (i < z) {
    //         numberRaised *= y;
    //         i++;
    //     }
    //     return x * numberRaised
    // }
    // console.log(multiOf(4, 10, 3))
    // console.log(multiOf(6, 3, 2))
    // console.log(multiOf(6, 2, 3))
    
    /*
    6
    Create a function called muti2
    that take two parameter
    and will return the multiplication
    from the first number to the second number
    Ex: muti2(4, 5); => 4 * 5 => 20
    Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
    */
    // function muti2(x, y) {
    //     let multi = 1;
    //     while (x <= y) {
    //         multi *= x;
    //         x++;
    
    //     }
    //     return (multi);
    // }
    // console.log(muti2(4, 5));
    // console.log(muti2(3, 6))
    /*
    7
    Create a function called numberBetweenUs
    that take 2 parameters
    and return the number between them
    ** Important: You should't have extra space at the end and comma
    ** Important: the stop condition should [num1!==num2-1]
    ** hint: maybe you will have 2 if statment
    numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
    numberBetweenUs(1,3) => "2"
    */
//    function numberBetweenUs(x,y){
//  i = x;d = "";
//  while(x<y){if(i==x || x==y){}else{d += ` ${x} `}
// x++}
// return `"${d}"`
// }
// console.log(numberBetweenUs(2,8))
// console.log(numberBetweenUs(1,3))
    
    /*
    8
    Write a function called countDown
    that takes one parameter
    and return a string represent the count down from the number
    that insert to 0
    instead of 0 you shoulf have "done"
    between each number a comma and space
    ** you need to use recursion
    ** Important: You should't have extra space at the end and comma
    countDown(5)
    => "5, 4, 3, 2, 1, done"
    countDown(2)
    => "2, 1, done"
    countDown(7)
    => "7, 6, 5, 4, 3, 2, 1, done"
    */
    
    // function countDown(x){
    //     let i=x;
    //     let txt='';
    //     while(i>=0){
    //         if(i!==0){
    //             txt+=i+', ';
    //         }else{
    //             txt+='done';
    //         }
    
    //         i--;
    //     }
    //     console.log(txt)
    // }
    // countDown(5)
    // countDown(2)
    // countDown(7)    
    /*
    * Exercise 1: 
    * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
    *
    * Test Case:
    *    Test Case 1: doubleValues([1,2,3]) 
    *    Test Case 2: doubleValues([5,1,2,3,10])  
    *
    * Result: 
    * Test Case 1:  [2,4,6]
    * Test Case 2: [10,2,4,6,20]
    *
    *
    */
    
    // function doubleValues(array){
    //     let doubled =[];
    //     for (let i = 0; i < array.length; i++) {
    //         doubled.push(array[i]*2);
            
    //     }
    //     console.log(doubled)
    // }
    // doubleValues([1,2,3])
    // doubleValues([5,1,2,3,10])
    
    /*
    * Exercise 2:
    * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
    *
    * Test Cases:
    *   onlyEvenValues([1,2,3]) 
    *   onlyEvenValues([5,1,2,3,10]) 
    * 
    * Result:
    *  Test Case 1:  [2]
    *  Test Case 2: [2,10]
    */
    // function onlyEvenValues(array){
    //     elements = []
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i]%2 == 0) {
    //             elements.push(array[i]) ;
    //         } 
    
            
    //     }
    //     console.log(elements)
    // }
    // onlyEvenValues([1,2,3]) 
    // onlyEvenValues([5,1,2,3,10]) 
    
    /*
    * Exercise 3:
    * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
    *
    * Test Case:
    *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
    *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
    *  
    * Result:
    * Test Case 1: ["ct", "mt", "tm", "uy"]
    * Test Case 2: ['hi', 'ge', 'se']
    *
    */
    // function showFirstAndLast(arr){
    //     var newArr = [];
    //     arr.forEach(function(value) {
    //         if(typeof value === "string"){
    //             newArr.push(value[0] + value[value.length-1]);
    //         }
    //     });
    //     return newArr;
    // }
    // console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']) )
    // console.log((['hi', 'goodbye', 'smile'])  )
    /*
    * Exercise 4:
    * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
    * to the function with the new key and value added for each object 
    * 
    * Test Cases:
    *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    *   
    * Result:
    *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
    *
    */
    // function addKeyAndValue(arr,key,value){
    //     arr.forEach(function(val){
    //         val[key] = value;
    //     });
    //     return arr;
    // }
    // console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') )

    
    
    /*
    * Exercise 5:
    * Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
    * values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
    * 
    * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
    * Test Cases 2:  vowelCount('Tim') // {i:1};
    * Test Cases 3:  vowelCount('Matt') // {a:1})
    * Test Cases 4:  vowelCount('hmmm') // {};
    * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
    *
    *   
    * Result:
    * Test Cases 1: {e:2,i:1};
    * Test Cases 2: {i:1};
    * Test Cases 3: {a:1})
    * Test Cases 4: {};
    * Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
    *
    */
    // function vowelCount(str){
    //     var splitArr = str.toLowerCase().split("");
    //      var obj = {};
    //      var vowels = "aeiou";
     
    //      splitArr.forEach(function(letter){
    //          if(vowels.indexOf(letter) !== -1){
    //              if(obj[letter]){
    //                  obj[letter]++;
    //              } else{
    //                  obj[letter] = 1;
    //              }
    //          }
    //      });
    //      return obj;
    //  }
     
    // console.log(vowelCount('Elie') )
    