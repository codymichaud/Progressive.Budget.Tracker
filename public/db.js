const { response } = require("express");

let budgetDb;

const request = indexedDB.open('budget', 1);
request.onupgradeneeded = function (event) {
    let budgetDb = event.target.result;
    budgetDb.createObject('newData', { autoIncrement });
};