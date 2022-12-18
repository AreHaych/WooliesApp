"use strict";

let itemObjectArray = []; //array of objects which represnt an item and its aisle number location

//MAP KEY/VALUE PAIRS THAT REPRESENT AN AISLE NUMBER AND AN ITEM NAME
const aislesAndItemsMap = 
[
    [0, 'test for 0'], [1, 'Bread'], [1, 'Cereal'], [1,'Cakes?'], [1, 'Crumpets'], [1, 'Health care (vitamins, foods)'], [1, 'Honey'], [1, 'Nutella'], [1, 'High Quality Peanutbutter'],[1, 'Specialty Jams'], [1, 'Muffins'], [1, 'Muesli and oats'], 
    [2, 'Biscuits'], [2, 'Condensed milk'], [2, 'Coffee'], 
    [3, 'Batteries'], [3, 'Cards and wrap'], [3, 'Chips'], [3, 'Chocolate'], [3, 'Confectionary'],[3, 'Electrical goods (extension cords)'], 
    [4, 'Cordial'], [4, 'Energy drinks'], 
    [5, 'Asian food'], [5, 'Bread crumbs'], [5, 'Canned fish'], [5, 'Canned vegetables'], [5, 'Cook in sauces'], [5, 'Cooking oil'], [5, 'English foods'], 
    [6, 'Aluminium foil'], [6, 'Kitchen appliances'], [6, 'Baked beans and spaghetti'], [6, 'Bins'], [6, 'Bread mix'], [6, 'Cooking chocolate'], [6, 'Cakemix'],
    [6, 'Canned fruit'], [6, 'Canned meats (ham, chicken)'], [6, 'Crockery (plates, bowls)'], [6, 'Custard'], [6, 'Cuttlery'], [6, 'Dried fruits & nuts'], 
    [6, 'Desserts'], [6, 'Flour'], [6, 'Plastic Wrap/Lunch bags'], [6, 'Glassware (tumblers)'],[7,'Bandaids'], [7,'Body lotion'], [7,'Cosmetics (Nail polish, mascara)'], [7,'Cotton wool balls'], [7,'Deodorant'], 
    [8,'Baby needs (wipes, bibs, food)'], [8,'Bathroom towels'], [8,'BBQ needs (Heatbeads/foil trays)'], [8,'Brushes and brooms'], [8,'Buttons'],
    [8,'Chlorine'], [8,'Coathangers'], [8,'Cotton thread'], [8,'Firelighters'], [8,'Garbage bags'], [8,'Garden needs'], 
    [9, 'Air freshener'], [9, 'Bird seed'], [9, 'Bleach'], [9, 'Cat food'], [9, 'Cat litter'], [9, 'Cleaners (Kitchen, Bathroom)'], [9, 'Dishwashing detergents'],
    [9, 'Disinfectants'], [9, 'Dog foog'], [9, 'Fabric care (softeners)'], 
    [10, 'Eggs'], [11, 'test for 11'], [54, 'test for 54']
];

aislesAndItemsMap.forEach(function(item) {
    makeItemObject(item);
})

//future: is there a way to detect variable types and add into object dependign on type?

/**
 * The makeItemObject function
 * The function takes an array and uses destructuring to use the data to create an object...
 * ...In this instance, it is taking data from the aislesAndItemsMap
 * The object it creates represents an item at Woolworths and it's aisle location
 * The object will be added to the itemObjectArray
 * @param {array} 
 */
function makeItemObject([aisle, name]) {
    itemObjectArray.push(
        {
            itemName: name,
            itemAisle: aisle
        }
    )
}

/**
 * The getRandomNumber function
 * This function is used to provide a random integer to use as an index to retrieve objects from an array
 * These random objects are what will be used to test a users knowledge on item's aisle location
 * @returns A random number between 0 and length of the itemObjectArray
 */
function getRandomNumber() {
    return Math.floor(Math.random() * itemObjectArray.length) + 1; //issue   
}
 

let incorrectItemArray = []; //contains the objects of items that were incorrectly answered when prompted
let points = 0; //number variable that increases when they correctly answer questions prompted
let currentItemIndex = getRandomNumber();
let currentItem = itemObjectArray[currentItemIndex]; //get a random object from itemObjectArray


//DOM elements that will be used
let pointsEle = document.getElementById('points').innerHTML = `Points: ${points}`;
let currentItemMessageEle = document.getElementById('current-item-message').innerHTML = `What aisle is ${currentItem.itemName} located?`;
let userInput = document.getElementById('user-input');
let userFeedbackEle = document.getElementById('user-feedback');

function userInputCheck() {
    if(userInput.value) {
        if(userInput.value == currentItem.itemAisle) {
            points++;
            userFeedbackEle.innerText = 'Correct';
            itemObjectArray.splice(currentItemIndex, 1)[0];
            resetValues();
        } else {
            userFeedbackEle.innerText = `Incorrect, ${currentItem.itemName} is located in aisle ${currentItem.itemAisle}`;
            userFeedbackEle.style = 'color: red';
            itemObjectArray.splice(currentItemIndex, 1)[0];
            incorrectItemArray.push(itemObjectArray.splice(currentItemIndex, 1))[0];
            resetValues();
        }
    } else {
        console.log('You need to provide a value.')
    }
}

function resetValues() {
    currentItemIndex = getRandomNumber();
    currentItem = itemObjectArray[currentItemIndex];
    currentItemMessageEle = document.getElementById('current-item-message').innerHTML = `What aisle is ${currentItem.itemName} located?`;
    pointsEle = document.getElementById('points').innerHTML = `Points: ${points}`;
    userInput.value = '';
}


// function evaluateUserInput() {
//     while(points < itemObjectArray.length) {
//         currentItemIndex = getRandomNumber();
//         currentItem = itemObjectArray[currentItemIndex];
//         // let response = window.prompt(`What aisle is ${currentItem.itemName} located in?`);
//         document.getElementById('current-item-message').innerText = `What aisle is ${currentItem.itemName} located in?`;
//         let response = document.getElementById('user-input').value;     
//         if(response) {
//             if(response == currentItem.itemAisle) {
//                 //adds one point to the points variable
//                 points++;
//                 console.log('Correct')
//                 itemObjectArray.splice(currentItemIndex, 1)[0];
//                 console.log('Deleted ' + currentItem.itemName)
//             } else {
//                 //adds the current item to incorrect item array (to show as feedback to user later)
//                 // incorrectItemArray.push(currentItem);
//                 console.log(`Incorrect, ${currentItem.ItemName} is located in aisle ${currentItem.itemAisle}`)
//                 incorrectItemArray.push(itemObjectArray.splice(currentItemIndex, 1))[0];
//                 console.log('Deleted ' + currentItem.itemName)
//             }
//         }
//     }   
// }

/**
 * The promptLoop function
 * This function starts a loop which will continuously prompt the user
 * The user input will then be checked with the evaluateUserInput function
//  */
// function promptLoop() {
//     evaluateUserInput();
// }

// promptLoop();




// //IMPORTANT!!!!
// //eventually we want to remove all of the item objects from the array...
// //... so when the array has a length of 0, we can know when the test is finished

