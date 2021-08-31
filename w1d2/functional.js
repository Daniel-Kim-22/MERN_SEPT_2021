const data = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];
console.log("hello11111111111111111111111111111111111111111111")
const people = [
    {name: "bob", age: 40},
    {name: "john", age: 45},
    {name: "maria", age:23}
]

const newPeople = people.filter( (unicorn, idx) => unicorn.age > 30);
const yy = newPeople.map( person => person.age++);

console.log(newPeople);



// const filteredData = data.filter( (x, i) => x.includes("o")) // must return t/f
// const filteredData = data.filter( (x, i) => x.includes("o")).map( (elem, idx) => elem + " contains an 'o'")
const filteredData = data.filter( (x, i) => {
    // console.log(i+1);
    return x.includes("o")
    }).map( (elem, idx) => elem + " contains an 'o'")
// console.log(filteredData);


const x = data.map( (elem, idx) => {
    return `${idx+1} - ${elem} is cool`;
})

const x1 = data.map( (elem, idx) => elem + " is cool " + idx );

// const x2 = animals.forEach( animal => console.log(animal + " is cool"));


// console.log(x2);