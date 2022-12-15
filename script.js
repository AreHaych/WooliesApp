"use strict";

let itemObjectArray = []; //array of objects which represnt an item and its aisle number location
let incorrectItemArray = []; //contains the objects of items that were incorrectly answered when prompted
let points = 0; //number variable that increases when they correctly answer questions prompted

//MAP KEY/VALUE PAIRS THAT REPRESENT AN AISLE NUMBER AND AN ITEM NAME
const aislesAndItemsMap = 
[
    [0, 'test for 0'], [1, 'Bread'], [1, 'Cereal'], [1,'Cakes?'], [1, 'Crumpets'], [1, 'Health care (vitamins, foods)'], [1, 'Honey'], [1, 'Nutella'], [1, 'High Quality Peanutbutter'],
    [1, 'Specialty Jams'], [1, 'Muffins'], [1, 'Muesli and oats'], [1, 'Fruit juice'], 
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

console.log(itemObjectArray);



function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*itemObjectArray.length); //issue
    return randomNumber
}

function evaluateUserInput() {
    while(points < itemObjectArray.length) {
        let currentItemIndex = getRandomNumber();
        let currentItem = itemObjectArray[currentItemIndex];
        let response = window.prompt(`What aisle is ${currentItem.itemName} located in?`);
        if(response) {
            if(response == currentItem.itemAisle) {
                //adds one point to the points variable
                points++;
                console.log('Correct')
                itemObjectArray.splice(currentItemIndex, 1)[0];
                console.log('Deleted ' + currentItem.itemName)
            } else {
                //adds the current item to incorrect item array (to show as feedback to user later)
                // incorrectItemArray.push(currentItem);
                console.log(`Incorrect, ${currentItem.ItemName} is located in aisle ${currentItem.itemAisle}`)
                incorrectItemArray.push(itemObjectArray.splice(currentItemIndex, 1))[0];
                console.log('Deleted ' + currentItem.itemName)
            }
        }
    }   
}


/**
 * The promptLoop function
 * This function starts a loop which will continuously prompt the user
 * The user input will then be checked to see if they provided a correct answer to the question prompted
 * If correct, the user will gain a point
 * If incorrect, no point will be gained
 * Regardless of right/wrong answer, the object will be deleted from the pool of questions,
 * and text will be printed to the console as feedback
 */
function promptLoop() {
    evaluateUserInput();
    // console.log(incorrectItemArray)
    console.log(itemObjectArray)    
}

promptLoop();




// //IMPORTANT!!!!
// //eventually we want to remove all of the item objects from the array...
// //... so when the array has a length of 0, we can know when the test is finished

