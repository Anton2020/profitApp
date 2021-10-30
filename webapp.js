//Retrieving DOM elements
let brutoBedragElem = document.getElementById("brutoBedragEntry");
let nettoWinstElem = document.getElementById("nettoWinst");
let clothesCostElem = document.getElementById("clothesCostEntry");
let hoursWorkElem = document.getElementById("hoursWorkEntry");
let goBtnElem = document.getElementById("goBtn");

//methods
function nettoStartCalc() {
  return (netAmount = brutoBedragElem.value * 0.8);
}

function updateClothesCostDisplay() {
  let clothesCostEntered = clothesCostElem.value;
  clothesCostDisplay.innerHTML = clothesCostEntered;
}

function nettoEndCalcAndShow() {
  let netProfitResult = nettoStartCalc() - clothesCostElem.value;

  let hoursWork = hoursWorkElem.value;
  if (netProfitResult / hoursWork < 20) {
    nettoWinstElem.style.color = "red";
  } else if (netProfitResult / hoursWork < 30) {
    nettoWinstElem.style.color = "orange";
  } else {
    nettoWinstElem.style.color = "green";
  }
  nettoWinstElem.innerHTML = netProfitResult;
}

//Event Listeners
goBtnElem.addEventListener("click", nettoEndCalcAndShow);

//oninput to make the slider update dynamically
clothesCostElem.oninput = updateClothesCostDisplay;
