document.addEventListener("DOMContentLoaded", function () {
    let billAmt = document.getElementById("billAmount");
    let percentageTip = document.getElementById("percentageTip");
    let tipAmt = document.getElementById("tipAmount");
    let totalAmt = document.getElementById("totalAmount");
    let errorMsg = document.getElementById("errorMessage");

    document.getElementById("calculateButton").addEventListener("click", function () {
        if (billAmt.value.trim() === "" || percentageTip.value.trim() === "") {
            errorMsg.textContent = "Please Enter A Valid Input.";
        } else {
            errorMsg.textContent = "";
            let calculateTip = (parseFloat(percentageTip.value) / 100) * parseFloat(billAmt.value);
            tipAmt.value = calculateTip.toFixed(2);
            let totalAmount = parseFloat(billAmt.value) + calculateTip;
            totalAmt.value = totalAmount.toFixed(2);
        }
    });
});
