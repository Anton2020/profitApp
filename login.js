var firebaseConfig = {
  apiKey: "AIzaSyD3ttOyGH7AmjFbWsLR_wwRqCyK1Fxn090",

  authDomain: "profitapp-d0aeb.firebaseapp.com",

  databaseURL:
    "https://profitapp-d0aeb-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "profitapp-d0aeb",

  storageBucket: "profitapp-d0aeb.appspot.com",

  messagingSenderId: "891381824235",

  appId: "1:891381824235:web:e185e27bc1801901f1dcae",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const database = app.database();

//Register function
function register() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  MacDo_or_KFC = document.getElementById("MacDo_or_KFC").value;

  if (!email.endsWith("fitriani@gmail.com")) {
    alert("Het ingevoerde e-mailadres is ongeldig.");
    return;
  } else if (!validate_password) {
    alert("Wachtwoord is te kort");
    return;
  } else if (
    MacDo_or_KFC !='KFC'
  ) {
    alert(
      "Vul alsjeblieft in of je liever MacDo of KFC eet."
    );
  } else {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async function () {
        var user = auth.currentUser;

        //Add user to Firebase DB
        var database_ref = database.ref();

        //Create user data
        var user_data = {
          email: email,
          MacDo_or_KFC: MacDo_or_KFC,
          last_login: Date.now(),
        };
        await user.sendEmailVerification();

        //save new user to the DB
        database_ref.child("users/" + user.uid).set(user_data);

        alert(
          "De account is aangemaakt, open de link in je e-mail om deze te activeren."
        );
      })
      .catch(function (error) {
        var error_code = error.error_code;
        var error_message = error.message;
        alert(error_message);
      });
  }
}

function login() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  MacDo_or_KFC = document.getElementById("MacDo_or_KFC").value;

  if (!validate_email) {
    alert("Het ingevoerde e-mailadres is ongeldig.");
    return;
  } else if (!validate_password) {
    alert("Wachtwoord is te kort");
    return;
  } else if (
    MacDo_or_KFC !='KFC'
  ) {
    alert(
      "Vul alsjeblieft in of je liever MacDo of KFC eet."
    );
  return;}

  //pass in the e-mail and password set during registration
  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser;
      //Check if user is already verified
      if (!user.emailVerified) {
        alert("Activeer alsjeblieft eerst je account via de mail");
        return;
      }
      var database_ref = database.ref();

      var user_data = {
        last_login: Date.now(),
      };

      //this was set during registering, now it is updated
      database_ref.child("users/" + user.uid).update(user_data);

      sessionStorage.setItem("AuthenticationState", "Authenticated");
      sessionStorage.setItem(
        "AuthenticationExpires",
        //30 means 30 minutes, 60000 to go from ms to minutes
        new Date().getTime() + 15 * 60000
      );
      window.open(
        "index.html",
        "_self"
      );
    })
    .catch(function (error) {
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}
function validate_email(email) {
  //source: https://newbedev.com/regular-expression-validate-gmail-addresses
  let expression = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/i;
  return email.match(expression);
}

function validate_password(password) {
  return password < 6 ? false : true;
}
