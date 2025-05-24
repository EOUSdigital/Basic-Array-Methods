//TODO Module 3 - Lesson 03.01: Basic Arrays Methods

//TODO 📘 Step 1: Theoretical Overview

//* 🔁 .map() – Transform every item in the array
//  • Takes an array and returns a new array.
//  • Applies a function to every element.
//  • Same length, but different values.

//! Example

const num = [1, 2, 3];
const doubled = num.map(n => n * 2);
console.log(doubled);

//* 🔍 .filter() – Keep only items that match a condition
//  • Returns a new array.
//  • Removes items that do not pass a test.

//! Example

const num2 = [1, 2, 3, 4, 5];
const evens = num2.filter(n => n % 2 === 0);
console.log(evens);

//* 🎯 .find() – Return the first item that matches
//  • Returns the actual value (not an array).
//  • Stops after it finds the first match.

//! Example

const names = ['Sam', 'Alex', 'Jordan'];
const result = names.find(n => n.startsWith('A'));
console.log(result);

//* 🔁 Summary Table

//? Method              What It Does                        Returns
//  .map()              Transforms every element            New array
//  .filter()           Filters items based on condition    New array (shorter or same)
//  .find()             Finds the first matching item       A single value (or undefined)

//* 💬 Turn — logic-first question:

//  👉 We can think of one real-world example where we might:
//  • Use .map() to transform data
//  • Use .filter() to exclude something
//  • Use .find() to locate something?

//! Solution

//* 🧠 Rocket Analogy & Array Methods:

//? 1️⃣ "Double the speed if using a second engine"

//  This is exactly like .map()
//  • We are transforming each engine's speed:

const engines = [1000, 2000, 1500];
const boosted = engines.map(speed => speed * 2);

console.log(boosted);

//  ✔️ You take existing data and enhance it across the board.

//? 2️⃣ "Count double as power only if an engine works at full power"

//  This is a classic .filter() use case!
//  • We only keep engines running at full power:

const engines2 = [
    { name: 'Engine A', power: 100 },
    { name: 'Engine B', power: 75 },
    { name: 'Engine C', power: 100 },
];

const fullPowerEngine = engines2.filter(engine => engine.power === 100);

console.log(fullPowerEngine);

// We are selecting engines based on a condition — leaving weaker ones out of the mission.

//? 3️⃣ "Find the right engine from the right supplier"

//  This is pure .find()
//  • Locate the first engine from a trusted supplier:

const engines3 = [
    { name: 'X1', supplier: 'NovaTech' },
    { name: 'X2', supplier: 'GalaxyCorp' },
    { name: 'X3', supplier: 'NovaTech' },
];

const selected = engines3.find(engine => engine.supplier === 'NovaTech');

console.log(selected);

// ✔️ We search and stop when you find the first match — mission ready!

//* 🎯 Summary:
// We connected array methods to:
//  • 🚀 Speed transformation → .map()
//  • ⚡ Power efficiency → .filter()
//  • 🎯 Supplier targeting → .find()


//TODO 🔍 Step 2: Real-World Analogies

//* 🔁 .map() ➔ The Assembly Line Transformer

//  Imagine a car factory:
//  • Cars roll down the assembly line.
//  • Each car gets a paint job.
//  • The number of cars stays the same — but now they’re all transformed!

const cars = ['Car A', 'Car B', 'Car C'];
const paintedCars = cars.map(car => car + ' (Red)')

console.log(paintedCars);

//? Before                  After
//  Car A                   Car A (Red)
//  Car B                   Car B (Red)
//  Car C                   Car C (Red)

//!  🧠 Key Idea: Same number of items, but each one is changed.

//* 🔍 .filter() ➔ Security Guard at the Door

//  We are hosting a private event:
//  • Guests arrive at the door.
//  • The security guard only lets in people wearing VIP badges.
//  • The list gets shorter, keeping only those who qualify.

const guests = ['VIP-John', 'Alex', 'VIP-Maria', 'Sam'];
const vipGuests = guests.filter(name => name.startsWith('VIP'));

console.log(vipGuests);

//? Original List           After Filter
//  VIP-John                VIP-John
//  Alex	
//  VIP-Maria               VIP-Maria
//  Sam	

//!  🧠 Key Idea: We keep only what passes the test.

//* 🎯 .find() ➔ Lost & Found Desk

//  Someone lost their phone:
//  • The staff searches the box of items.
//  • They stop once they find the first phone.
//  • No need to keep searching after that!

const lostItems = ['wallet', 'keys', 'phone', 'book', 'iphone'];
const firstPhone = lostItems.find(item => item === 'phone');

console.log(firstPhone);

//! 🧠 Key Idea: We are just looking for the first match.

//* 🎯 Quick Recap:
//? Method                  Real-World Analogy                  Outcome
//  .map()                  Assembly line transformation        New array (same length)
//  .filter()               Security guard filtering            array (shorter)
//  .find()                 Lost & Found search                 Single item (or undefined)


//TODO 🧪 Step 3: Practical Examples

// Let’s begin with .map(), focusing on clarity:

//* 🔧 Example 1: Transform Prices with .map()
// We run an online store and want to apply a 10% discount to all product prices.

//! Example

const prices = [100, 250, 50, 400];
const discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices);

// 🧠 Logic:
//  • We are not removing or finding — we are modifying every item.

//* Exercise .map()

const usernames = ['alice', 'bob', 'charlie'];

//  Use .map() to capitalize the first letter of each name.
//  Expected Output:

['Alice', 'Bob', 'Charlie'];

//! Solution

const capitalizeUsernames = usernames.map(user => user.charAt(0).toUpperCase() + user.slice(1)); 
console.log(capitalizeUsernames);

//* Exercise .filter()

const numbers = [4, 15, 8, 23, 42, 7];

//  Use .filter() to return only the numbers greater than 10.
//  Expected Output:

[15, 23, 42];

//! Solution

const numbersGrater10 = numbers.filter(num => num > 10);
console.log(numbersGrater10);

//* Exercise .find()

const cities = ['London', 'Paris', 'New York', 'Berlin', 'Tokyo'];

//  Use .find() to return the first city that starts with 'B'.
//  Expected Output:

//! Solution

const firstCity = cities.find(city => city.startsWith('B'));
console.log(firstCity);
