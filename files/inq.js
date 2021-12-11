// JavaScript source code
const inquirer = require('inquirer');

module.exports = {
    createquestion: (name, type, message) => {
        const question = {
            name: name,
            type: type,
            message: message,
            validate: function (value) {
                if (value.length) {
                    return true;
                }
                else {
                    return message;
                }
            }
        }
        return question;
    },

    launch: () => {
        const questions = [
            {
                name: 'action',
                type: 'list',
                message: 'Hello! What would you like to do?',
                choices: ['Log In', 'Register', 'Browse Bookstore', new inquirer.Separator(), 'Exit Program']
            }
        ];
        return inquirer.prompt(questions);
    },

    register: () => {
        const questions = [
            {
                name: 'email',
                type: 'input',
                message: 'E-mail: ',
                validate: function (value) {
                    if (value.length <= 50) {
                        return true;
                    }
                    else {
                        return 'E-mail: ';
                    }
                }
            },
            {
                name: 'username',
                type: 'input',
                message: 'Username: ',
                validate: function (value) {
                    if (value.length <= 30) {
                        return true;
                    }
                    else {
                        return 'Username: ';
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Password: ',
                mask: '*',
                validate: function (value) {
                    if (value.length <= 30) {
                        return true;
                    }
                    else {
                        return 'Password: ';
                    }
                }
            },
            {
                name: 'card_num',
                type: 'input',
                message: 'Billing Details - Card Number: ',
                validate: function (value) {
                    if (value.length == 16 && !isNaN(value)) {
                        return true;
                    }
                    else {
                        return 'Billing Details - Card Number: ';
                    }
                }
            },
            {
                name: 'cvv',
                type: 'input',
                message: 'Billing Details - CVV: ',
                validate: function (value) {
                    if (value.length == 3 && !isNaN(value)) {
                        return true;
                    }
                    else {
                        return 'Billing Details - CVV: ';
                    }
                }
            },
            {
                name: 'bill_first',
                type: 'input',
                message: 'Billing Details - First Name: ',
                validate: function (value) {
                    if (value.length <= 20) {
                        return true;
                    }
                    else {
                        return 'Billing Details - First Name: ';
                    }
                }
            },
            {
                name: 'bill_last',
                type: 'input',
                message: 'Billing Details - Last Name: ',
                validate: function (value) {
                    if (value.length <= 20) {
                        return true;
                    }
                    else {
                        return 'Billing Details - Last Name: ';
                    }
                }
            },
            {
                name: 'bill_street',
                type: 'input',
                message: 'Billing Details - Street: ',
                validate: function (value) {
                    if (value.length <= 40) {
                        return true;
                    }
                    else {
                        return 'Billing Details - Street: ';
                    }
                }
            },
            {
                name: 'bill_streetNum',
                type: 'input',
                message: 'Billing Details - Street Number: ',
                validate: function (value) {
                    if (value.length <= 4 && !isNaN(value)) {
                        return true;
                    }
                    else {
                        return 'Billing Details - Street Number: ';
                    }
                }
            },
            {
                name: 'bill_postal',
                type: 'input',
                message: 'Billing Details - Postal Code: ',
                validate: function (value) {
                    if (value.length == 6) {
                        return true;
                    }
                    else {
                        return 'Billing Details - Postal Code: ';
                    }
                }
            },
            {
                name: 'bill_city',
                type: 'input',
                message: 'Billing Details - City: ',
                validate: function (value) {
                    if (value.length <= 40) {
                        return true;
                    }
                    else {
                        return 'Billing Details - City: ';
                    }
                }
            },
            {
                name: 'bill_province',
                type: 'input',
                message: 'Billing Details - Province: ',
                validate: function (value) {
                    if (value.length <= 40) {
                        return true;
                    }
                    else {
                        return 'Billing Details - Province: ';
                    }
                }
            },
            {
                name: 'bill_country',
                type: 'input',
                message: 'Billing Details - Country: ',
                validate: function (value) {
                    if (value.length <= 40) {
                        return true;
                    }
                    else {
                        return 'Billing Details - Country: ';
                    }
                }
            },
            {
                name: 'ship_street',
                type: 'input',
                message: 'Shipping Details - Street: ',
                validate: function (value) {
                    if (value.length <= 40) {
                        return true;
                    }
                    else {
                        return 'Shipping Details - Street: ';
                    }
                }
            },
            {
                name: 'ship_streetNum',
                type: 'input',
                message: 'Shipping Details - Street Number: ',
                validate: function (value) {
                    if (value.length <= 4 && !isNaN(value)) {
                        return true;
                    }
                    else {
                        return 'Shipping Details - Street Number: ';
                    }
                }
            },
            {
                name: 'ship_postal',
                type: 'input',
                message: 'Shipping Details - Postal Code: ',
                validate: function (value) {
                    if (value.length == 6) {
                        return true;
                    }
                    else {
                        return 'Shipping Details - Postal Code: ';
                    }
                }
            },
            {
                name: 'ship_city',
                type: 'input',
                message: 'Shipping Details - City: ',
                validate: function (value) {
                    if (value.length <= 40) {
                        return true;
                    }
                    else {
                        return 'Shipping Details - City: ';
                    }
                }
            },
            {
                name: 'ship_province',
                type: 'input',
                message: 'Shipping Details - Province: ',
                validate: function (value) {
                    if (value.length <= 40) {
                        return true;
                    }
                    else {
                        return 'Shipping Details - Province: ';
                    }
                }
            },
            {
                name: 'ship_country',
                type: 'input',
                message: 'Shipping Details - Country: ',
                validate: function (value) {
                    if (value.length <= 40) {
                        return true;
                    }
                    else {
                        return 'Shipping Details - Country: ';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },

    login: () => {
        const questions = [
            module.exports.createquestion('user', 'input', 'Username: '),
            {
                name: 'pass',
                type: 'password',
                message: 'Password: ',
                mask: '*'
            }
        ];
        return inquirer.prompt(questions);
    },

    main: () => {
        const questions = [
            {
                name: 'action',
                type: 'list',
                message: 'What do you want to do?',
                choices: [
                    'Browse entire book collection',
                    'Search for books by genre',
                    'Search for books by publisher',
                    'Search for specific book by ISBN',
                    'Approximate search for books by title',
                    'View Cart',
                    'Track Orders',
                    'View Store Reports',
                    new inquirer.Separator(),
                    'Exit Program'
                ]
            }
        ];
        return inquirer.prompt(questions);
    },

    searchByISBN: () => {
        const questions = [
            module.exports.createquestion('isbn', 'input', 'ISBN: ')
        ];
        return inquirer.prompt(questions);
    },

    searchByGenre: () => {
        const questions = [
            module.exports.createquestion('genre', 'input', 'Genre: ')
        ];
        return inquirer.prompt(questions);
    },

    searchByTitle: () => {
        const questions = [
            module.exports.createquestion('title', 'input', 'Title: ')
        ];
        return inquirer.prompt(questions);
    },

    searchByPublisher: () => {
        const questions = [
            module.exports.createquestion('publisher', 'input', 'Publisher: ')
        ];
        return inquirer.prompt(questions);
    }
}