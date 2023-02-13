/*
1. add event handler with withdraw button
2. get the withdraw amount from the withdraw input field
2.5. also make sure to convent the input into a number by using parseFloat

3. get provious withdraw total

4. calculate total withdraw amount
4-5. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
6-5: set the new balance total


7. clear the input field
*/

// sthep-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
 // step-2:
 const withDrawfield = document.getElementById('withdraw-field');
 const newWithDrawAmountString = withDrawfield.value;
 const newWithDrawAmount = parseFloat(newWithDrawAmountString);
 console.log(newWithDrawAmount);
 

  // step-7
 withDrawfield.value = '';

 if(isNaN(newWithDrawAmount)){
    alert('please provide a valid number');
    return;
 }

 // step-3
 const withdrawTotalElement = document.getElementById('withdraw-total');
 const previousWithdrawTotalString = withdrawTotalElement.innerText;
 const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step-4
 const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
 withdrawTotalElement.innerText = currentWithdrawTotal;
 // step-5
 const balanceTotalElement = document.getElementById('balance-total');
 const previousBalanceTotalString =balanceTotalElement.innerText;
 const previousBalanceTotal = parseFloat(previousBalanceTotalString);


 if(newWithDrawAmount > previousBalanceTotal){
    alert('Your acount is insufficient');
    return;
 }

 // step-6
 const newbalanceTotal = previousBalanceTotal - newWithDrawAmount;
 balanceTotalElement.innerText = newbalanceTotal;

}); 
