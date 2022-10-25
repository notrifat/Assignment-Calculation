
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click",function(){
const depositAmountId = document.getElementById("depositAmountId").value;//input
const depositNumber = parseFloat(depositAmountId);
const currantDepositId = document.getElementById("currantDepositId").innerText;//span
const currentdepositNumber = parseFloat(currantDepositId);
 
const totaldeposit = depositNumber + currentdepositNumber;
document.getElementById("currantDepositId").innerText = totaldeposit;


const balanceAmount = document.getElementById("balanceAmount").innerText;
const balanceNumber = parseFloat(balanceAmount);

const totalBalance =  balanceNumber + depositNumber;
document.getElementById("balanceAmount").innerText = totalBalance;

document.getElementById("depositAmountId").value = "";

})


const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function(){
    
 const withdrawAmount = document.getElementById("withdrawAmount").value;
 const withdrawNumber = parseFloat(withdrawAmount);
   
 const withdrawBtnAmount = document.getElementById("withdrawBtnAmount").innerText;
 const withdrawMoney = parseFloat(withdrawBtnAmount);
  
 const totalWithdraw = withdrawNumber +  withdrawMoney;
 document.getElementById("withdrawBtnAmount").innerText = totalWithdraw;

 const reduceBalance = document.getElementById("balanceAmount").innerText;
 const reduceNumber = parseFloat(reduceBalance);
 const reduceTotalBalance = reduceNumber - withdrawNumber;
 document.getElementById("balanceAmount").innerText = reduceTotalBalance;

document.getElementById("withdrawAmount").value ="";
})
