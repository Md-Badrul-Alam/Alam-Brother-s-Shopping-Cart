
function updateProductNumber(product, price, isIncreasing){
    const plusInout = document.getElementById(product +'-input');
    let plusNumber = parseInt(plusInout.value);
    if(isIncreasing == true){
        plusNumber = plusNumber + 1;
    }else if(plusNumber > 0){
        plusNumber = plusNumber - 1;
    } 
   

    plusInout.value = plusNumber;


    const onionTotal = document.getElementById(product +'-total');
    onionTotal.innerText = parseFloat(plusNumber * price).toFixed(2);

    calculateTotal()
}

function getInputValue(product) {
    const productInput = document.getElementById(product +'-input');
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}



function calculateTotal() {
    const phoneTotal = getInputValue('Onion') * 49.99;
    const caseTotal = getInputValue('Potatoes') * 29.99;
    const gingerTotal = getInputValue('ginger') * 149.99;
    const subTotal = (phoneTotal + caseTotal + gingerTotal).toFixed(2);
    const tax = (subTotal / 10).toFixed(2);
    const totalPrice = parseFloat((subTotal) + (tax)).toFixed(2);
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
  

}



function removeProduct(item) {
    document.getElementById(item + '-display').style.display = 'none';
}



// Onion-button-plus

document.getElementById('Onion-button-plus').addEventListener('click', function(){

    updateProductNumber('Onion', 49.99, true);
})

// Onion-button-minus

document.getElementById('Onion-button-minus').addEventListener('click', function(){
   
    updateProductNumber('Onion', 49.99, false);

})

// Potatoes-button-plus

document.getElementById('Potatoes-button-plus').addEventListener('click', function(){

    updateProductNumber('Potatoes', 29.99, true);

})

// Potatoes-button-minus

document.getElementById('Potatoes-button-minus').addEventListener('click', function(){

    updateProductNumber('Potatoes', 29.99, false);


})
document.getElementById('ginger-button-plus').addEventListener('click', function(){

    updateProductNumber('ginger', 149.99, true);

})

// Potatoes-button-minus

document.getElementById('ginger-button-minus').addEventListener('click', function(){

    updateProductNumber('ginger', 149.99, false);


})
document.getElementById('Potatoes-remove').addEventListener('click', function () {
    removeProduct('Potatoes');
});
document.getElementById('Onion-remove').addEventListener('click', function () {
    removeProduct('Onion');
});
document.getElementById('ginger-remove').addEventListener('click', function () {
   removeProduct('ginger');
});


// check out
document.getElementById("check-btn").addEventListener('click', function () {
    alert('successful');
});

