// // 1
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];


// let string = '';

// for (let friend of friends) {
//     string += friend + ",";
// }
// string = string.slice(0, -1);
// console.log("for :", string);


// string = friends.join(",");
// console.log("join(): ", string);


// 2

const cards = ["card 1", "card 2", "card 3", "card 4", "card 5"];

// Видалення
const index = cards.indexOf("card 3");

if (index !== -1) {
 cards.splice(index, 1);
}

console.log(cards);

// Додавання
cards.splice(4, 0, "card 6");
console.log(cards);

// Оновлення
cards.splice(2, 1, "card 4 v2");
console.log(cards);