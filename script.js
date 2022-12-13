"use strict";

//items grouped in arrays according to their aisle number
let aisle1 = ['Bread', 'Cereal', 'Cakes?', 'Crumpets', 'Health care (vitamins, foods)', 'Honey', 'Nutella', 'High Quality Peanutbutter',
'Specialty Jams', 'Muffins', 'Muesli and oats', 'Fruit juice'];
const aisle2 = ['Biscuits', 'Condensed milk', 'Coffee'];
const aisle3 = ['Batteries', 'Cards and wrap', 'Chips', 'Chocolate', 'Confectionary','Electrical goods (extension cords)',];
const aisle4 = ['Cordial', 'Energy drinks'];
const aisle5 = ['Asian food', 'Bread crumbs', 'Canned fish', 'Canned vegetables', 'Cook in sauces', 'Cooking oil', 'English foods'];
const aisle6 = ['Aluminium foil', 'Kitchen appliances', 'Baked beans and spaghetti', 'Bins', 'Bread mix', 'Cooking chocolate', 'Cakemix',
                'Canned fruit', 'Canned meats (ham, chicken)', 'Crockery (plates, bowls)', 'Custard', 'Cuttlery', 'Dried fruits & nuts', 
                'Desserts', 'Flour', 'Plastic Wrap/Lunch bags', 'Glassware (tumblers)'];
const aisle7 = ['Bandaids', 'Baby lotion', 'Cosmetics (Nail polish, mascara)', 'Cotton wool balls', 'Deodorant'];
const aisle8 = ['Baby needs (wipes, bibs, food)', 'Bathroom towels', 'BBQ needs (Heatbeads/foil trays)', 'Brushes and brooms', 'Buttons',
                'Chlorine', 'Coathangers', 'Cotton thread', 'Firelighters', 'Garbage bags', 'Garden needs'];
const aisle9 = ['Air freshener', 'Bird seed', 'Bleach', 'Cat food', 'Cat litter', 'Cleaners (Kitchen, Bathroom)', 'Dishwashing detergents',
                'Disinfectants', 'Dog foog', 'Fabric care (softeners)'];
const aisle10 = ['Eggs'];
const aisle11 = [];
// const aisle54 = [];
//cordial is the latest item put in



let itemObjectArray = [];
//initialise array of all objects (item and their ailse)
// ITEM OBJECT ARRAY IITIALISED HERE
function initialiseItemObjectArray() {
    aisle1.forEach(function (itemName) {
        itemObjectArray.push( 
            {
                name: itemName,
                aisle: 1
            }
        )
    })
    aisle2.forEach(function (itemName) {
        itemObjectArray.push( 
            {
                name: itemName,
                aisle: 2
            }
        )
    })
    aisle3.forEach(function (itemName) {
        itemObjectArray.push( 
            {
                name: itemName,
                aisle: 3
            }
        )
    })
    aisle4.forEach(function (itemName) {
        itemObjectArray.push( 
            {
                name: itemName,
                aisle: 4
            }
        )
    })
    aisle5.forEach(function (itemName) {
        itemObjectArray.push( 
            {
                name: itemName,
                aisle: 5
            }
        )
    })
    aisle6.forEach(function (itemName) {
        itemObjectArray.push( 
            {
                name: itemName,
                aisle: 6
            }
        )
    })
    aisle7.forEach(function (itemName) {
        itemObjectArray.push( 
            {
                name: itemName,
                aisle: 7
            }
        )
    })
    aisle8.forEach(function (itemName) {
        itemObjectArray.push( 
            {
                name: itemName,
                aisle: 8
            }
        )
    })
    aisle9.forEach(function (itemName) {
        itemObjectArray.push( 
            {
                name: itemName,
                aisle: 9
            }
        )
    })
}

initialiseItemObjectArray();

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*itemObjectArray.length);
    return randomNumber
}

//array of items incorrectly answered
let incorrectItemArray = [];


//Variables that will change with user interaction
let currentItemIndex = getRandomNumber();
let currentItem = itemObjectArray[currentItemIndex];
let points = 0;
let response = window.prompt(`What aisle is ${currentItem.name} located in?`);


//IMPORTANT!!!!
//eventually we want to pop off all of the item objects from the array...
//... so when the array has a length of 0, we can know when the test is finished


//check if user input is correct aisle...
//...if correct, add 1 point
//...if incorrect, don't add a point, but add object to incorrect items array (to provide feedback)
if(response) {
    if(response == currentItem.aisle) {
        //adds one point to the points variable
        points++;
        console.log('Correct')
    } else {
        //adds the current item to incorrect item array (to show as feedback to user later)
        incorrectItemArray.push(currentItem);
        console.log(`Incorrect, ${currentItem.name} is located in aisle ${currentItem.aisle}`)
    }
}

