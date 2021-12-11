const clear = require('clear');
const figlet = require('figlet');
const inq = require('inquirer');
const inquirer = require('./files/inq');
const queries = require('./files/sql');
const colors = require('colors/safe');

// -- GLOBAL VARIABLES --
let curr_user = {}; // {'client_id': NULL, 'loggedIn': false}


// -- MAIN PROGRAM --

clear(); // Clearing Terminal
displayTitle(); // Displaying Title
run(); // Running the Main Program

// -- HELPER FUNCTIONS --

function displayTitle() {
	console.log(
		
			colors.blue(figlet.textSync('Look Inna Book', { horizontalLayout: 'controlled smushing' })
		
	));
}


async function run() {
	let answerObj = await inquirer.launch();
	newPage();

	if (answerObj['action'] == 'Sign-In') {
		await signIn();
		await main_flow();
	}
	else if (answerObj['action'] == 'Register') {
		await register();
		await signIn();
		await main_flow();
	}
	else if (answerObj['action'] = 'Browse Store') {
		await main_flow();
	}
	else { // Exit Program
		console.log('Goodbye!');
		return;
	}
}

function newPage() {
	new inq.Separator();
}

async function signIn() {
	console.log('Sign In Page');
	let loggedIn = false;
	let result = {};
	while (loggedIn == false) { // Prompt login until given valid credentials
		let cred = await inquirer.login();
		result = await queries.checkCredentials(cred['user'], cred['pass']);
		loggedIn = result['loggedIn'];
		if (loggedIn == false) {
			console.log('Invalid Credentials - Try Again.');
		}
		else {
			user = result;
		}
	}
	newPage();
}

async function register() {
	console.log('Registration Page');
	let isRegistered = false;
	while (isRegistered == false) {
		let newUser = await inquirer.register();
		isRegistered = await queries.registerUser(newUser);
		if (isRegistered == false) {
			console.log('Registration Unsuccessful - Try Again');
		}
		else {
			console.log('Registration Successful! Welcome to LookInnaBook');
			newPage();
		}
	}
}

function displayResults(results) {
	if (results.rows.length == 0) {
		console.log('No Results Found.');
	}
	else {
		console.table(results.rows);
	}
}

async function main_flow() {
	while (true) {
		newPage();
		let answerObj = await inquirer.main();
		if (answerObj['action'] == 'Browse entire book collection') {
			let results = await queries.searchAll();
			displayResults(results)
		}
		else if (answerObj['action'] == 'Search for books by genre') {
			let search = await inquirer.searchByGenre();
			let results = await queries.searchByGenre(search['genre']);
			displayResults(results)
		}
		else if (answerObj['action'] == 'Search for books by publisher') {
			let search = await inquirer.searchByPublisher();
			let results = await queries.searchByPublisher(search['publisher']);
			displayResults(results)
		}
		else if (answerObj['action'] == 'Search for specific book by ISBN') {
			let search = await inquirer.searchByISBN();
			let results = await queries.searchByISBN(search['isbn']);
			displayResults(results)
		}
		else if (answerObj['action'] == 'Approximate search for books by title') {
			let search = await inquirer.searchByTitle();
			let results = await queries.searchByTitleApprox(search['title']);
			displayResults(results)
		}
		else if (answerObj['action'] == 'View Cart') {
			if (curr_user['client_id']) {
				let results = await queries.displayCart(curr_user['client_id']);
				displayResults(results)
			}
			else {
				console.log('Sign-In required! Please login ');
			}
		}
		else if (answerObj['action'] == 'Track Orders') {
			if (curr_user['client_id']) {
				let results = await queries.searchOrders(curr_user['client_id']);
				displayResults(results)
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
