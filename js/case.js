function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberValue = parseInt(caseNumberField.value);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = caseNumberValue + 1;
    }
    else {
        newCaseNumber = caseNumberValue - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateTotal();
})