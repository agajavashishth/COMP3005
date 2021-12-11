const inquirer = require('./files/inq');
const queries = require('./files/sql');
const { newPage, displayResults, curr_user } = require("./app");

async function main_flow() {
    while (true) {
        newPage();
        let answerObj = await inquirer.main();
        if (answerObj['action'] == 'Browse entire book collection') {
            let results = await queries.searchAll();
            displayResults(results);
        }
        else if (answerObj['action'] == 'Search for books by genre') {
            let search = await inquirer.searchByGenre();
            let results = await queries.searchByGenre(search['genre']);
            displayResults(results);
        }
        else if (answerObj['action'] == 'Search for books by publisher') {
            let search = await inquirer.searchByPublisher();
            let results = await queries.searchByPublisher(search['publisher']);
            displayResults(results);
        }
        else if (answerObj['action'] == 'Search for specific book by ISBN') {
            let search = await inquirer.searchByISBN();
            let results = await queries.searchByISBN(search['isbn']);
            displayResults(results);
        }
        else if (answerObj['action'] == 'Approximate search for books by title') {
            let search = await inquirer.searchByTitle();
            let results = await queries.searchByTitleApprox(search['title']);
            displayResults(results);
        }
        else if (answerObj['action'] == 'View Cart') {
            if (curr_user['client_id']) {
                let results = await queries.displayCart(curr_user['client_id']);
                displayResults(results);
            }
            else {
                console.log('Sign-In required! Please login ');
            }
        }
        else if (answerObj['action'] == 'Track Orders') {
            if (curr_user['client_id']) {
                let results = await queries.searchOrders(curr_user['client_id']);
                displayResults(results);
            }
            else {
                console.log('Sign-In required! Please login ');
            }
        }
        else if (answerObj['action'] == 'View Store Reports') {
            console.log('Functionality to be implemented');
        }
        else {
            break;
        }
    }
}
exports.main_flow = main_flow;
