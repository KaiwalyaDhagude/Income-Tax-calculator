var basicPay=0.00;
var HRA=0.00;
var DA=0.00;
var taxablePay=0.00;
var tax=0.00;
var schoolTax=0.00;
var totalIncome=0.00;
var totalTA=0.00;
var totalPay=0.00;
var month=1;
var holidays=0.00;
var DA1=0.00;
var DA2=0.00;
var DA3=0.00;

$(".calculateButton").on("click",function(){
    holidays=parseFloat($("#totalHolidays").val());
    basicPay=parseFloat($("#basicPay").val());
    DA1=parseFloat($("#DA1").val());
    DA2=parseFloat($("#DA2").val());
    DA3=parseFloat($("#DA3").val());
    tax=0;
    schoolTax=0;
    totalIncome=0;
    totalPay=0;

    month = 1;
    while(month<13) {
        totalPay1();
        if(month>=12){break;}
        month++;
    }
    tax1();

    $(".totalIncome").text("Your Total income is - "+totalIncome.toFixed(0)); 
    $(".schoolTax").text("Total School Tax is - "+schoolTax.toFixed(0));
    $(".totalTax").text("Total Tax you need to pay is - "+ tax.toFixed(0));
});

function calculateBasicPay(){
    if(month==1){
        basicPay=Math.round(basicPay/100)*100;
    }
    
    if(month==5){
        basicPay=Math.round((basicPay+(basicPay*3/100))/100)*100;
    }
}
function calculateHRA(){
    HRA=(basicPay*9/100);
}
function calculateDA(){
    if(month==1){
        DA=Math.round(DA1/100)*100;}  
    else if(month==5){
        DA=DA+(Math.round(DA2/100))*100;}
    else if(month==11){
        DA=DA+(Math.round(DA3/100))*100;}
    DA=basicPay*DA/100;
}

function totalPay1( ){
    calculateBasicPay();
    calculateHRA();
    calculateDA();
    totalPay=totalPay+basicPay+HRA+DA;
    console.log("totalPay: " + totalPay);
    console.log("totalTA: " + totalTA);
    console.log("totalIncome: " + totalIncome);
    if (month==12){
        totalTA = 16200-(holidays*45);
        totalIncome = totalPay+totalTA;

    }
}
function tax1(){
    if (totalPay>1500000){
        taxablePay=totalPay-1500000;
        tax=taxablePay*25/100;
        totalPay=totalPay-taxablePay;
    }
    if (totalPay>1200000){
        taxablePay=totalPay-1200000;
        tax=tax+(taxablePay*20/100);
        totalPay=totalPay-taxablePay;
    }

    if (totalPay>900000) {
        taxablePay = totalPay - 900000;
        tax = tax+(taxablePay*15/100);
        totalPay = totalPay - taxablePay;
    }
    if (totalPay>600000) {
        taxablePay = totalPay - 600000;
        tax = tax+(taxablePay*10/100);
        totalPay = totalPay - taxablePay;
    }
    if (totalPay>300000) {
        taxablePay = totalPay - 300000;
        tax = tax+(taxablePay*5/100);
        totalPay = totalPay - taxablePay;
    }
    schoolTax=tax*4/100;
    tax=tax+schoolTax;
}