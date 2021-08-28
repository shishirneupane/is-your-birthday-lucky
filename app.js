var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var outputText = document.querySelector("#output-text");

checkButton.addEventListener("click", checkButtonHandler);

function checkButtonHandler() {
  var dateOfBirthValue = dateOfBirth.value;
  var luckyNumberValue = parseInt(luckyNumber.value);

  if ((dateOfBirthValue !== "") && (luckyNumberValue !== "")) {

    if (Math.sign(luckyNumberValue) !== 1) {
      showOutputText("Lucky Number input must be a positive number.");
    } else {
      sumAllDigits(dateOfBirthValue, luckyNumberValue);
    }

  } else if ((dateOfBirthValue === "") || (luckyNumberValue === "")) {
    showOutputText("Enter both date of birth and lucky number.");
  }
}

function sumAllDigits(dateOfBirthValue, luckyNumberValue) {
  var cleanedDOBValue = dateOfBirthValue.replaceAll('-', '');
  var sumOfDigits = 0;

  for (let value of cleanedDOBValue) {
    sumOfDigits = sumOfDigits + parseInt(value);
  }

  checkLuckyNumber(sumOfDigits, luckyNumberValue);
}

function checkLuckyNumber(sumOfDigits, luckyNumberValue) {
  if ((sumOfDigits % luckyNumberValue === 0)) {
    // if perfectly divisible by lucky number
    outputText.style.display = "block";
    outputText.innerHTML = "<span>🎉</span> <span>🎉</span> <span>🎉</span> Yayyyyy! Your birthday is lucky. <span>🎉</span> <span>🎉</span> <span>🎉</span>";
    outputText.style.background = "";
  } else {
    outputText.style.display = "block";
    outputText.innerHTML = "Sorry! Your birthday is not so lucky. <span>😕</span>";
  }
}

function showOutputText(msg) {
  outputText.style.display = "block";
  outputText.innerText = msg;
}