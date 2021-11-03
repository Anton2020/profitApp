let companyNameEntry = document.getElementById("companyNameEntry");
let hoursWorkedEntry = document.getElementById("hoursWorkedEntry");
let searchCompaniesBtnElem = document.getElementById("searchCompanies");
let searchHoursBtnElem = document.getElementById("searchHours");
let outputElem = document.getElementById("output");

searchCompaniesBtnElem.addEventListener("click", connectToDBShowByCompanyName);
searchHoursBtnElem.addEventListener("click", connectToDBShowByEarnedHours);

function makeDateLegible(dateValue) {
  let month = dateValue.substring(5, 7);
  let monthWordsArr = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
  ];
  let monthNumsArr = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let monthWord = "";

  for (let i = 0; i < monthWordsArr.length; i++) {
    if (month === monthNumsArr[i]) {
      monthWord = monthWordsArr[i];
      break;
    }
  }

  return (
    dateValue.substring(9) + " " + monthWord + " " + dateValue.substring(0, 4)
  );
}

function connectToDBShowByCompanyName() {
  let companyName = companyNameEntry.value;

  const query =
    "SELECT hoursWorked, netAmountEarned, invoice_date, companyName FROM invoices HAVING companyName = " +
    companyName +
    "ORDER BY invoice_date DESC";

  MySql.Execute(
    "sql11.freemysqlhosting.net", //host
    "sql11448055", //username
    "DS7RpH5Mtf", //password
    "sql11448055", //database
    query,
    function (data) {
      let output = "";
      let newLine = "<br />";
      for (res in data.Result) {
        let date = data.Result[res].invoice_date.substring(0, 10);
        let outputDate = makeDateLegible(date);
        output += `Op ${outputDate} verdiende je ${data.Result[res].netAmountEarned} euro bij dit bedrijf. ${newLine}`;
      }
      outputElem.innerHTML = output;
    }
  );
}

function connectToDBShowByEarnedHours() {
  let hoursWorked = parseInt(hoursWorkedEntry.value);

  const query = `SELECT hoursWorked, netAmountEarned, companyName 
  FROM invoices WHERE hoursWorked = ${hoursWorked} ORDER BY netAmountEarned DESC, companyName`;

  MySql.Execute(
    "sql11.freemysqlhosting.net", //host
    "sql11448055", //username
    "DS7RpH5Mtf", //password
    "sql11448055", //database
    query,
    function (data) {
      let companyName = "";
      let output = "";
      let newLine = "<br />";
      for (res in data.Result) {
        companyName = data.Result[res].companyName;
        output += `Bij ${companyName} kan je met ${hoursWorked} uur werk ${data.Result[res].netAmountEarned} euro netto verdienen. ${newLine}`;
      }
      outputElem.innerHTML = output;
    }
  );
}
