// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Function to single array of a credit card number:
const validateCred = (array) => {
    let checkDigit = array[(array.length - 1)];
    let newArray = array.slice(0, (array.length -1));
    newArray.reverse();
    let sumOfDigits = 0;
    for (let i = 0; i < newArray.length; i++) { 
        if ((i+1) % 2 !== 0) {
            let secondDoubled = newArray[i] * 2;
            if (secondDoubled > 9){
                sumOfDigits = sumOfDigits + (secondDoubled - 9);
            }   
            else sumOfDigits = sumOfDigits + secondDoubled; 
        } 
        else { sumOfDigits = sumOfDigits + newArray[i];
        } 
    } 
    sumOfDigits = sumOfDigits + checkDigit
    if (sumOfDigits % 10 === 0){
        return 'valid';
    } 
    else return 'invalid'; 
}

//Test functions:
console.log(validateCred(valid1)) //Should print valid
console.log(validateCred(invalid2)) //Should print invalid


//Function to check if a nested array of credit card numbers are valid or not

const invalidCardsArray = []
const findInvalidCards = (nestedArray) => {
    for (let j = 0; j < nestedArray.length; j++) {
        let nestedArrayCheck = validateCred(nestedArray[j]);
        if (nestedArrayCheck === 'invalid') {
            invalidCardsArray.push(nestedArray[j]);
        }
    } 
    return invalidCardsArray;
};

//Test Function
findInvalidCards(batch);
console.log(invalidCardsArray);

//Function to identify the credit card companies related to the invalid card numbers


const idInvalidCardCompanies = (invalidArray) => {
    const companiesInvalidNumbers = [];
    for (let i = 0; i < invalidArray.length; i++) {
        let invalidArrayCheck = invalidArray[i];
        if (invalidArrayCheck[0] === 3) {
            if (companiesInvalidNumbers.includes('AMEX') !== true) {
                companiesInvalidNumbers.push('AMEX');
            }
        } 
        else if (invalidArrayCheck[0] === 4) {
            if (companiesInvalidNumbers.includes('Visa') !== true) {
                companiesInvalidNumbers.push('Visa');
            }
        }
        else if (invalidArrayCheck[0] === 5) {
            if (companiesInvalidNumbers.includes('Mastercard') !== true) {
                companiesInvalidNumbers.push('Mastercard');
            }
        }
        else if (invalidArrayCheck[0] === 6) {
            if (companiesInvalidNumbers.includes('Discover') !== true) {
                companiesInvalidNumbers.push('Discover');
            }
        }
        else companiesInvalidNumbers.push('Company not found');
    } 
    return companiesInvalidNumbers;
}

//Test Function
console.log(idInvalidCardCompanies(invalidCardsArray));
