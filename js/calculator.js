const bill = document.querySelector("#bill");
const btnTip = document.querySelectorAll("#tippersentase button");
const customTip = document.querySelector("#customtip");
const tipContainer = document.querySelector("#tippersentase");
const inputPeople = document.querySelector("#inputpeople");
const totalTip = document.querySelector("#totaltip");
const totalBillpeople = document.querySelector("#totalbillpeople");
const butonReset = document.querySelector("#reset");
const cantZero = document.querySelector("#cantbezero");

bill.oninput = getTotal;

tipContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-tip")) {
        btnTip.forEach(function(button) {
            button.classList.remove("btn-color-active");
        });
        e.target.classList.toggle("btn-color-active");
        customTip.value = "";
        getTotal();
    }
});

customTip.addEventListener("click", function(e) {
    btnTip.forEach(function(button) {
        button.classList.remove("btn-color-active");
    });
});

customTip.oninput = getTotal;

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function getTotal() {
    const btnTipSelected = document.querySelector(".btn-color-active");
    if (bill.value != "" && inputPeople.value != "") {
        if (customTip.value == "") {
            const tip = roundToTwo(
                (bill.value * (btnTipSelected.value / 100)) / inputPeople.value
            );
            totalTip.innerHTML = `$${tip}`;
            totalBillpeople.innerHTML = `$${roundToTwo(
        bill.value / inputPeople.value + tip
      )}`;
        } else if (customTip != "") {
            const tip = roundToTwo(
                (bill.value * (customTip.value / 100)) / inputPeople.value
            );
            totalTip.innerHTML = `$${tip}`;
            totalBillpeople.innerHTML = `$${roundToTwo(
        bill.value / inputPeople.value + tip
      )}`;
        }
    }
}

inputPeople.addEventListener("input", function(e) {
    if (inputPeople.value != "") {
        cantZero.classList.remove("text-colors-orange-500");
        inputPeople.classList.remove("outline-colors-orange-500");
        inputPeople.classList.add("outline-strong-cyan");
    } else {
        cantZero.classList.add("text-colors-orange-500");
        inputPeople.classList.remove("outline-strong-cyan");
        inputPeople.classList.add("outline-colors-orange-500");
    }
    getTotal();
});