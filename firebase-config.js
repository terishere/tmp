let firebaseConfig = {
  apiKey: "AIzaSyDwG8xnwg7X7RKgw-aNvjElYcagdUsziZ0",
  authDomain: "ltnc-77779.firebaseapp.com",
  databaseURL: "https://ltnc-77779-default-rtdb.firebaseio.com",
  projectId: "ltnc-77779",
  storageBucket: "ltnc-77779.appspot.com",
  messagingSenderId: "263920792600",
  appId: "1:263920792600:web:434fc6a6b574bd83aeff6d",
  measurementId: "G-DTCGQ7N1HD"
  };

  firebase.initializeApp(firebaseConfig);

  let messagesRef = firebase.database().ref("Info");

  document
    .getElementById("contactForm")
    .addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    // Get values
    let name = getInputVal("name");
    let email = getInputVal("email");

    saveMessage(name, email);
    document.getElementById("contactForm").reset();
  }

  // Function to get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, email) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
    });
  }
  