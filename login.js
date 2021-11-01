
var firebaseConfig = {

    apiKey: "AIzaSyD3ttOyGH7AmjFbWsLR_wwRqCyK1Fxn090",

    authDomain: "profitapp-d0aeb.firebaseapp.com",

    databaseURL: "https://profitapp-d0aeb-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "profitapp-d0aeb",

    storageBucket: "profitapp-d0aeb.appspot.com",

    messagingSenderId: "891381824235",

    appId: "1:891381824235:web:e185e27bc1801901f1dcae"

  };


  // Initialize Firebase

  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const database = app.database();

  //Register function
  function register() {
      email = document.getElementById('email').value
      password = document.getElementById('password').value
      full_name = document.getElementById('full_name').value
      favourite_song = document.getElementById('favourite_song').value
      MacDo_or_KFC = document.getElementById('MacDo_or_KFC').value

      if (validate_email == false) {
          alert("Het ingevoerde e-mailadres is ongeldig.");
          return;
      } else if (!validate_password) {
          alert("Wachtwoord is te kort");
          return;
      } else if (!validate_field(full_name) || !validate_field(favourite_song) || !validate_field(MacDo_or_KFC)) {
          alert("Vul alsjeblieft je volledige naam, lievelingsliedje en MacDo/KFC voorkeur in.");
      } else {
          auth.createUserWithEmailAndPassword(email, password)
          .then(function() {
            var user = auth.currentUser
            
            //Add user to Firebase DB
            var database_ref = database.ref();

            //Create user data
            var user_data = {
                email: email,
                full_name : full_name,
                favourite_song : favourite_song,
                MacDo_or_KFC : MacDo_or_KFC,
                last_login : Date.now()
                //password not stored here, but in auth ?
            }

            //save new user to the DB
            database_ref.child('users/' + user.uid).set(user_data);

            alert('Gebruiker aangemaakt')
          })
          .catch(function(error) {
              var error_code = error.error_code
              var error_message = error.message
              alert(error_message)
          }) 
      }
  }

  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    return (expression.test(email) == true) ? true : false
  }

  function validate_password(password) {
    return (password < 6) ? false : true
  }

  function validate_field(field) {
      return (field.length <= 0) ? false : true
  }

