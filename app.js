var reasoninput = document.querySelector('#input-reason');
var amountinput = document.querySelector('#input-amount');
var cancelbtn = document.querySelector('#btn-cancel');
var confirmbtn = document.querySelector('#btn-confirm');
var expensesList = document.querySelector('#expenses-list');
var totalAmount = document.querySelector('#totall');
var alertCtrl = document.querySelector('ion-alert-controller');

let totalexpenses = 0;

var clear =() =>{
    reasoninput.value = '';
    amountinput.value = '';
}



confirmbtn.addEventListener('click', () => {
    var enteredReason = reasoninput.value;
    var enteredAmount = amountinput.value;
    
    if(enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        alertCtrl.create({
            message: 'please enter valid fields',
            buttons: ['Okay']
    }).then(alertElement => {
        alertElement.present();
    });
        return;
    }

    var newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalexpenses += parseInt(enteredAmount);
    totalAmount.textContent = totalexpenses
    clear();
});

cancelbtn.addEventListener('click', clear);