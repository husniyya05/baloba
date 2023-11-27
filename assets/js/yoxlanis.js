const users = [
    {
        name: "Rahide",
        age: 23,
        kilo: 60,
    },
    {
        name: "Husniyye",
        age: 24,
        kilo: 50,

    },
    {
        name: "Zeka",
        age: 20,
        kilo: 70,
    }
]
console.log(users);

const list= document.querySelector("#yoxlanis-list");


for (let user of users) {
    // Create a new li element for each user
    const liElement = document.createElement("li");

    // Set the content of the li element using a property of the user object
    liElement.textContent = ` ${user.name}, ${user.age}, ${user.kilo}`;

    // Append the li element to the ul element
    list.appendChild(liElement);
}



// for (let user of users ){
//     const liElement = document.querySelector("li");
//     liElement.textContent = user;
//     list.appendChild(liElement);
// }





const arr= [1 , 2 , 3];
const sual= arr.indexof(3)*2;
