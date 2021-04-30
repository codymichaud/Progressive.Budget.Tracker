const { response } = require("express");

let budgetDb; //creating database budgetDb
const request = indexedDB.open('budget', 1);

request.onupgradeneeded = ({ event }) => {
    let budgetDb = event.target.result;
    budgetDb.createObject('newData', { autoIncrement });
};

//Checks online and offline status
request.onsuccess = ({ event }) => {
    budgetDb = event.target.result;
    if (navigator.onLine) {
        checkDatabase();
    }
};

//if an error is present will display error in console with error code
request.onerror = ({ event }) => {
    console.log('Looks like there an error ' + event.target.errorCode);
};

//Allows for data to be saved to the database budgetDb
function saveRecord(records) {
    const transactions = budgetDb.transactions(['newData', 'readwrite']);
    const store = transactions.objectStore('newData');
}