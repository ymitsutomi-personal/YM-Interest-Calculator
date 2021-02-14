function compute()
{
    var principal = document.getElementById("principal").value;

    if ((principal == "") || (principal <= 0)){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var today = new Date();
    var futureYear = today.getFullYear() + parseInt(years);

    
    document.getElementById("result").innerHTML = 
        "If you deposit " + principal + ","
        + "<br/>at an interest rate of " + rate + "%."
        + "<br/>You will receive an amount of " + interest + ","
        + "<br/>in the year " + futureYear;
}

function showRate()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("labelRate").innerHTML = rate + " %";
}
        