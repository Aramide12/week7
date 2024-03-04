const arr1 = [12,34,76,123,56,8,2,988,90,345]


max = Math.max(...arr1)
min = Math.min(...arr1)
divisible = arr1.filter(num => num % 2 === 0).length
age = arr1.length
greater = arr1.filter(num => num > 50)
order = arr1.slice().sort((a,b) => a - b);
even = arr1.every(num => num % 2 === 0)
const index = arr1.indexOf(76)
order2 = arr1.slice().reverse()

console.log(max)
console.log(min)
console.log(divisible)
console.log(age)
console.log(greater)
console.log(order)
console.log(even)
console.log(index)
console.log(order2)


const names = ["Alice", "Bob", "Charlie", "Darlington", "Emma", "Fiona", "George", "Hannah", "Joy", "Julia"]

names.sort((a,b)=> b.length - a.length)

const upper = names => names.replace(names[0], names[0].toUpperCase())

const replace = names => names.replace('Alice', 'Eleanor')

const concat = names=> names.concat(...names)

const indexOf = names => names.indexOf('Emma')

console.log(names)
console.log(names.length)