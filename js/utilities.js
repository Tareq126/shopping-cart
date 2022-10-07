function getTotalProductPrice(elementId) {
    const totalProductElement = document.getElementById(elementId);
    const totalProductPrice = parseInt(totalProductElement.innerText);
    return totalProductPrice;
}

function setElementValueById(elementId, value) {
    const setTotalElement = document.getElementById(elementId);
    setTotalElement.innerText = value;

}

function calculateTotal() {
    //calculate sub total
    const currentPhoneTotal = getTotalProductPrice('phn-price');
    const currentCaseTotal = getTotalProductPrice('case-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setElementValueById('sub-total', currentSubTotal);

    //calculate tax
    const taxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
    setElementValueById('tax-total', taxAmount);

    //calculate final amount
    const finalAmount = currentSubTotal + taxAmount;
    setElementValueById('final-total', finalAmount);
}

