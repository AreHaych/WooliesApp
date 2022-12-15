"use strict";

let itemObjectArray = []; //array of objects which represnt an item and its aisle number location
let points = 0; //number variable that increases when they correctly answer questions prompted

//ITEM NAMES GROUPED BY AISLE LOCATION
const aisle1Items = ['Bread', 'Cereal', 'Cakes?', 'Crumpets', 'Health care (vitamins, foods)', 'Honey', 'Nutella', 'High Quality Peanutbutter',
'Specialty Jams', 'Muffins', 'Muesli and oats', 'Fruit juice'];
const aisle0Items = ['test for 0'];
const aisle2Items = ['Biscuits', 'Condensed milk', 'Coffee'];
const aisle3Items = ['Batteries', 'Cards and wrap', 'Chips', 'Chocolate', 'Confectionary','Electrical goods (extension cords)',];
const aisle4Items = ['Cordial', 'Energy drinks'];
const aisle5Items = ['Asian food', 'Bread crumbs', 'Canned fish', 'Canned vegetables', 'Cook in sauces', 'Cooking oil', 'English foods'];
const aisle6Items = ['Aluminium foil', 'Kitchen appliances', 'Baked beans and spaghetti', 'Bins', 'Bread mix', 'Cooking chocolate', 'Cakemix',
'Canned fruit', 'Canned meats (ham, chicken)', 'Crockery (plates, bowls)', 'Custard', 'Cuttlery', 'Dried fruits & nuts', 
'Desserts', 'Flour', 'Plastic Wrap/Lunch bags', 'Glassware (tumblers)'];
const aisle7Items = ['Bandaids', 'Body lotion', 'Cosmetics (Nail polish, mascara)', 'Cotton wool balls', 'Deodorant'];
const aisle8Items = ['Baby needs (wipes, bibs, food)', 'Bathroom towels', 'BBQ needs (Heatbeads/foil trays)', 'Brushes and brooms', 'Buttons',
'Chlorine', 'Coathangers', 'Cotton thread', 'Firelighters', 'Garbage bags', 'Garden needs'];
const aisle9Items = ['Air freshener', 'Bird seed', 'Bleach', 'Cat food', 'Cat litter', 'Cleaners (Kitchen, Bathroom)', 'Dishwashing detergents',
'Disinfectants', 'Dog foog', 'Fabric care (softeners)'];
const aisle10Items = ['Eggs'];
const aisle11Items = ['test for 11'];
const aisle54Items = ['test for 54'];

//USES A FOREACH METHOD ON EACH ARRAY, CREATES OBJECTS BASED ON THE ITEM NAME AND AISLE, ADDS THEM TO ITEM OBJECT ARRAY
function initialiseItemObjectArray() {
    aisle0Items.forEach(item => itemObjectArray.push({itemName: item, itemAisle: 0}));
    aisle1Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 1})});
    aisle2Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 2})});
    aisle3Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 3})});
    aisle4Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 4})});
    aisle5Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 5})});
    aisle6Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 6})});
    aisle7Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 7})});
    aisle8Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 8})});
    aisle9Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 9})});
    aisle10Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 10})});
    aisle11Items.forEach(item => { itemObjectArray.push( { itemName: item, itemAisle: 11})});
    aisle54Items.forEach(item => {itemObjectArray.push( { itemName: item, itemAisle: 54})});
}
initialiseItemObjectArray();


console.log(itemObjectArray) //error checking


function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*itemObjectArray.length); //issue
    return randomNumber
}


let incorrectItemArray = new Array(); //contains the objects of items that were incorrectly answered when prompted

/**
 * The promtLoop function
 * 
 * This function starts a loop which will continuously prompt the user
 * The user input will then be checked to see if they provided a correct answer to the question prompted
 * If correct, the user will gain a point
 * If incorrect, no point will be gained
 * Regardless of right/wrong answer, the object will be deleted from the pool of questions,
 * and text will be printed to the console as feedback
 */
function promptLoop() {
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
        // console.log(incorrectItemArray)
        console.log(itemObjectArray) 
    }
}

promptLoop();




// //IMPORTANT!!!!
// //eventually we want to pop off all of the item objects from the array...
// //... so when the array has a length of 0, we can know when the test is finished

