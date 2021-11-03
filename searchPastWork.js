let companyNameEntry = document.getElementById("companyNameEntry");
let hoursWorkedEntry = document.getElementById("hoursWorkedEntry");
let searchCompaniesBtnElem = document.getElementById("searchCompanies");
let searchHoursBtnElem = document.getElementById("searchHours");

searchCompaniesBtnElem.addEventListener("click", connectToDBShowByCompanyName);
searchHoursBtnElem.addEventListener("click", connectToDBShowByEarnedHours);

function connectToDBShowByCompanyName() {
  let companyName = companyNameEntry.value;

  const query =
    "SELECT hoursWorked, netAmountEarned, invoice_date, companyName FROM invoices HAVING companyName = " +
    companyName;

  MySql.Execute(
    "sql11.freemysqlhosting.net", //host
    "sql11448055", //username
    "DS7RpH5Mtf", //password
    "sql11448055", //database
    query,
    function (data) {
      console.log(data);
      for (val in data) {
        console.log(val.hoursWorked);
      }
    }
  );
}

function connectToDBShowByEarnedHours() {
  let hoursWorked = parseInt(hoursWorkedEntry.value);

  const query = `SELECT hoursWorked, netAmountEarned, companyName 
  FROM invoices WHERE hoursWorked = ${hoursWorked} ORDER BY netAmountEarned, companyName`;

  MySql.Execute(
    "sql11.freemysqlhosting.net", //host
    "sql11448055", //username
    "DS7RpH5Mtf", //password
    "sql11448055", //database
    query,
    function (data) {
      console.log(data);
      for (res in data.Result) {
        let hoursWorked = data.Result[0].hoursWorked;
      }
    }
  );
}
