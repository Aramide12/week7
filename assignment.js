const arr = [12,34,76,123,56,8,2,988,90,345]

//sum of all the numbers in the array
function sumArr(arr){
return arr.reduce((a,b)=>a+b,0)
}

//largest number in the array
function largestNum(arr){
return Math.max(...arr)
}

function largeNum2(arr){
    return arr.sort((a,b))
}
function smallNum(arr){
return arr.sort((a,b)=>a-b)[0]
}

//divisible by 2
function even(arr){
return arr.filter(num => num % 2 == 0).length + `numbers`
}

//average
function avgArr(arr){
const len = arr.length
const sum =(arr.reduce((q,w)=>q+w,0))
return (sum/len).toFixed(2)
}

//new array with numbers greater than 50
function fifty(arr){
    return arr.filter (num =>num > 50)
}

//even numbers in the array
function isEven(arr){
    return arr.map(num => num % 2 == 0 ? 'is Even' : 'isOdd')
}

//index of the number 76
function anyNum(arr, num){
    return arr.indexOf(num)
}

console.log(isEven(arr))


const names = ["Alice", "Bob", "Charlie", "Darlington", "Emma", "Fiona", "George", "Hannah", "Joy", "Julia"]

//sum of all the names in the array
console.log(names.length)

//is "charlie" included in the array
function findname(names){
    return (names.includes('Charlie'));
}

//longest name in the array
function longestNm(names){
    return names.sort((a,b)=>b.length - a.length)[0]
}

//shortest name in the array
function shortNm(names){
    return names.sort((a,b) => a.length - b.length)[0]
}

//new array returning all the names in uppercase letters
function newArr (names){
    return names.map(a => a.toUpperCase())
}

//sort the names in alphabetical order
function order (names){
    return names.sort()
}

//check if all array contains five character
function five(names){
    return names.filter(names.length < 5)
}

//replace alice with eleanor
function add(names){
    return names.map(names => names === 'Alice' ? 'Eleanor' : names )
}

//index of emma
function emma(names){
    return names.indexOf ('Emma')
}

//concatenate all names into single string separated by ,
function con(names){
    return names.join(0)
}

console.log(findname(names))
console.log(longestNm(names))
console.log(shortNm(names))
console.log(newArr(names))
console.log(order(names))
console.log(five(names))
console.log(add(names))
console.log(emma(names))
console.log(con(names))