let selectedItemsPrice = [];
let totalPrice = 0;
let discount = 0;
let grandTotal = 0;




function displayValue(idName, value) {
    const tag = document.getElementById(idName);
    tag.innerText = value;
}


function addSelectedItemsEntry(itemsType, itemPrice) {
    const selectedItems = document.getElementById('select-item');
    const count = selectedItems.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.classList.add('font-bold');
    p.classList.add('text-xl');
    p.innerHTML = `${count + 1}. ${itemsType}`;
    selectedItems.appendChild(p);
    selectedItemsPrice.push(parseFloat(itemPrice));
    updateTotalPrice();
}


function updateTotalPrice() {
    for (let i = 0; i < selectedItemsPrice.length; i++) {
        totalPrice += selectedItemsPrice[i];
    }
    displayValue('total-price', totalPrice.toFixed(2));
    updateGrandTotal();
}


function couponCode() {
    const couponCodeInput = document.getElementById('coupon-code-input');
    const promoCode = couponCodeInput.value;
    couponCodeInput.value = '';
    if (totalPrice > 200 && promoCode === 'SELL200') {
        discount = 20 * totalPrice / 100;
        displayValue('discount', discount.toFixed(2));
    }
    else if (promoCode !== 'SELL200') {
        alert('Please enter a valid coupon code');
    }
    else {
        alert('You have to purchased over 200 TK to use the coupon code "SELL200"');
    }
}


function updateGrandTotal() {
    grandTotal = totalPrice - discount;
    displayValue('total', grandTotal.toFixed(2));
}


function resetValues() {
    totalPrice = 0;
    discount = 0;
    grandTotal = 0;
    selectedItemsPrice = [];
}


const goHomeButton = document.getElementById('go-home-button').addEventListener('click', function () {
    resetValues();
    displayValue('total-price', totalPrice.toFixed(2));
    displayValue('discount', discount.toFixed(2));
    displayValue('total', grandTotal.toFixed(2));
    displayValue('select-item', '');
});


const couponCodeApply = document.getElementById('coupon-button').addEventListener('click', function () {
    couponCode();
    updateGrandTotal();
});


const kitchenAccessories = document.getElementById('k-accessories').addEventListener('click', function () {
    addSelectedItemsEntry('k-Accessories', '39.00');
});

const cuttingBoardKitchenware = document.getElementById('cutting-board').addEventListener('click', function () {
    addSelectedItemsEntry('cutting-board', '25.00');
});

const homeCookerKitchenware = document.getElementById('home-cooker').addEventListener('click', function () {
    addSelectedItemsEntry('home-cooker', '49.00');
});

const sportCapSportswear = document.getElementById('sport-cap').addEventListener('click', function () {
    addSelectedItemsEntry('sport-cap', '49.00');
});

const fullJerseySportswear = document.getElementById('jersey-set').addEventListener('click', function () {
    addSelectedItemsEntry('jersey-set', '69.00');
});

const sportsCatesSportswear = document.getElementById('sports-cates').addEventListener('click', function () {
    addSelectedItemsEntry('sports-cates', '159.00');
});

const singleRelaxChairFurniture = document.getElementById('relax-chair').addEventListener('click', function () {
    addSelectedItemsEntry('relax-chair', '185.00');
});

const childrenPlayFurniture = document.getElementById('children-play').addEventListener('click', function () {
    addSelectedItemsEntry('children-play', '299.00');
});

const flexibleSofaFurniture = document.getElementById('flexible-sofa').addEventListener('click', function () {
    addSelectedItemsEntry('flexible-sofa', '399.00');
});