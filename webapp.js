//Retrieving DOM elements
let nettoBedragElem = document.getElementById("nettoBedrag");
let nettoWinstElem = document.getElementById("nettoWinst");
let clothesCostElem = document.getElementById("clothesCostEntry")
let goBtnElem = document.getElementById("goBtn");

//methods
function nettoStartCalcAndShow() {  
  let brutoBedrag = document.getElementById("brutoBedragEntry").value;
  nettoBedragElem.innerHTML = brutoBedrag * 0.8;
}

function updateClothesCostDisplay() {
  let clothesCostEntered = clothesCostElem.value;
  clothesCostDisplay.innerHTML = clothesCostEntered;
}

function nettoEndCalcAndShow() {
  nettoWinstElem.innerHTML = nettoBedragElem.innerHTML - clothesCostElem.value;
}

//Event Listeners
nettoBedragElem.addEventListener("click", nettoStartCalcAndShow);
goBtnElem.addEventListener("click", nettoEndCalcAndShow);

//oninput to make the slider update dynamically
clothesCostElem.oninput = updateClothesCostDisplay;


