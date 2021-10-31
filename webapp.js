//Retrieving DOM elements
let brutoBedragElem = document.getElementById("brutoBedragEntry");
let nettoWinstElem = document.getElementById("nettoWinst");
let clothesCostElem = document.getElementById("clothesCostEntry");
let makeupCostElem = document.getElementById("makeupCostEntry");
let decorCostElem = document.getElementById("decorCostEntry");
let softwareCostElem = document.getElementById("softwareCostEntry");

let hoursWorkElem = document.getElementById("hoursWorkEntry");
let moneyNextColourElem = document.getElementById("moneyUntilNextColour");

let goBtnElem = document.getElementById("goBtn");
let storeInDbElem = document.getElementById("storeInDB");

let resultArray = [];

//methods
function nettoStartCalc() {
  return (netAmount = brutoBedragElem.value * 0.8);
}

function updateClothesCostDisplay() {
  clothesCostDisplay.innerHTML = clothesCostElem.value;
}

function updateMakeupCostDisplay() {
  makeupCostDisplay.innerHTML = makeupCostElem.value;
}

function updateDecorCostDisplay() {
  decorCostDisplay.innerHTML = decorCostElem.value;
}

function updateSoftwareCostDisplay() {
  softwareCostDisplay.innerHTML = softwareCostElem.value;
}

function calculateProfit() {
  let netProfitResult =
    nettoStartCalc() -
    clothesCostElem.value -
    makeupCostElem.value -
    decorCostElem.value -
    softwareCostElem.value;

  calculateProfitPerHour(netProfitResult);
}

function calculateProfitPerHour(netProfitResult) {
  let hoursWork = hoursWorkElem.value;
  //1st result for the DB
  resultArray.push(hoursWork);
  let netProfitPerHour = netProfitResult / hoursWork;
  //1.25 calculates the netto money back to bruto, because that's what you start off with
  let moneyUntilNextColour = Math.ceil(
    (hoursWork * 30 - netProfitPerHour * hoursWork) * 1.25
  );

  if (netProfitPerHour < 20) {
    nettoWinstElem.style.color = "red";
    moneyNextColourElem.style.display = "inline";
    moneyNextColourElem.innerHTML = `Vraag ${moneyUntilNextColour} euro extra om voldoende winst te maken op deze opdracht.`;
  } else if (netProfitPerHour < 30) {
    nettoWinstElem.style.color = "orange";
    moneyNextColourElem.style.display = "inline";
    moneyNextColourElem.innerHTML = `Vraag ${moneyUntilNextColour} euro extra om voldoende winst te maken op deze opdracht.`;
  } else {
    nettoWinstElem.style.color = "green";
    moneyNextColourElem.style.display = "none";
  }
  let nettoWinst = Math.floor(netProfitResult);
  //2nd result for the DB
  resultArray.push(nettoWinst);
  nettoWinstElem.innerHTML = nettoWinst;
  confirmToStoreInDB();
}

function confirmToStoreInDB() {
  if (!confirm("Wil je deze factuur opslaan in de administratie ?")) {
    return;
  }
  askForDate();
}

function askForDate() {
  let date = prompt(
    "Op welke datum begint de opdracht ? Antwoord graag in blokjes van 2 cijfers, bijv. 05-01-22"
  );
  //3rd result for the DB
  resultArray.push(date);

  askForCompanyNameAndReturnDBInput();
}

function askForCompanyNameAndReturnDBInput() {
  let companyName = prompt("Hoe heet het bedrijf ?");
  //4th result for the DB
  resultArray.push(companyName);
  console.log(resultArray);
  return resultArray;
}

//oninput to make the slider update dynamically
clothesCostElem.oninput = updateClothesCostDisplay;
makeupCostElem.oninput = updateMakeupCostDisplay;
decorCostElem.oninput = updateDecorCostDisplay;
softwareCostElem.oninput = updateSoftwareCostDisplay;

//Calculate the colour based on the net profit result
goBtnElem.addEventListener("click", calculateProfit);

//Store the data from index.html form & DB form in the database
//storeInDbElem.addEventListener("click", sampleFunction);
