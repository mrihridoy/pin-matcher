
// Generate Random PIN ----
function generatePin() {
    const randomPinCode = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("generatePin").value = Math.round(randomPinCode);
}


// Click All Button's Action ------
function clickButton(num) {
    document.getElementById('inputPinCode').value += num;
}

// C - Clear Button Action -----
function clickClearButton() {
    document.getElementById('inputPinCode').value = "";
    document.getElementById('matchingPinCode').style.display = 'none';
    document.getElementById('matchingNotPinCode').style.display = 'none';
}

// BackSpace Button Slice action -----
function clickBackSpaceButton() {
    const screenValue = document.getElementById('inputPinCode').value;
    document.getElementById('inputPinCode').value = screenValue.slice(0, screenValue.length - 1);
}

// Submit Button & something ----
function submitButton() {
    const generateValue = document.getElementById('generatePin').value;
    const screenValue = document.getElementById('inputPinCode').value;

    if (generateValue == screenValue) {
        document.getElementById('matchingPinCode').style.display = 'block';
        document.getElementById('matchingNotPinCode').style.display = 'none';
    } else if (generateValue == "1234" || screenValue == "") {
        alert("First Generate a PIN & Enter your PIN");
    } else {
        document.getElementById('matchingPinCode').style.display = 'none';
        document.getElementById('matchingNotPinCode').style.display = 'block';

        const trialAction = document.getElementById('trialAction').innerText;
        const trial = parseInt(trialAction);
        const trialLimit = trial - 1;

        document.getElementById('trialAction').innerText = trialLimit + " " + "try left";
        document.getElementById('trialAction').style.display = "block";

        if (trialLimit == 0) {
            document.getElementById("trialAction").innerText = 0 + "try left";
            document.getElementById("submitButton").setAttribute("disabled", "disabled");

        }
    }
}