const { response } = require("express");

let budgetDb;
const request = indexedDB.open('budget', 1);

request.onupgradeneeded = ({ event }) => {
    let budgetDb = event.target.result;
    budgetDb.createObject('newData', { autoIncrement });
};

request.onsuccess = ({ event }) => {
    budgetDb = event.target.result;
    if (navigator.onLine) {
        checkDatabase();
    }
};