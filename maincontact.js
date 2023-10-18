// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDVM0cpiAUR3VVF7VeDzc95nn3wIEGyJq8",
    authDomain: "iitj-chroniclw.firebaseapp.com",
    databaseURL: "https://iitj-chroniclw-default-rtdb.firebaseio.com",
    projectId: "iitj-chroniclw",
    storageBucket: "iitj-chroniclw.appspot.com",
    messagingSenderId: "186100887368",
    appId: "1:186100887368:web:c26108d4a20d60d13e4d7d",
    measurementId: "G-SFCZKTZTP0"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, subject, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, subject, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      subject:subject,
      email:email,
      message:message
    });
  }