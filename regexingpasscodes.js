const checkPasscode = function () {
    let passcodeArea = document.querySelector("#passcode");
    let enteredPasscode = passcodeArea.value;
    console.log(enteredPasscode)
    let passcodeMessageBox = document.querySelector(".passcodeMessageBox");
    // set up Regex
    const validPasscode = /\d{3}[a-z]{4}\d/g;
    let isPasscodeValid = validPasscode.test(enteredPasscode);
    let result = isPasscodeValid ? "OK" : "Passcode not in the correct format."
    passcodeMessageBox.textContent =  result;
}