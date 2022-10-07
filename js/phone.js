function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phn-number-field');
    const phoneNumberValue = parseInt(phoneNumberField.value);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = phoneNumberValue + 1;
    }
    else {
        newPhoneNumber = phoneNumberValue - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phonePriceElement = document.getElementById('phn-price');
    phonePriceElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phn-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateTotal();
})
document.getElementById('btn-phn-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateTotal();
})