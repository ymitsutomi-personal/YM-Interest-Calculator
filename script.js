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
        "If you deposit <span class=resnum>" + principal + "</span>,"
        + "<br/>at an interest rate of <span class=resnum>" + rate + "%</span>."
        + "<br/>You will receive an amount of <span class=resnum>" + interest + "</span>,"
        + "<br/>in the year <span class=resnum>" + futureYear + "</span>";
}

function showRate()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("labelRate").innerHTML = rate + " %";
}
        