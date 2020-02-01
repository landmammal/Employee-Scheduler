// Branden has firebase control
var firebaseConfig = {
  apiKey: firebase.apiKey,
  authDomain: "employee-scheduler-402b9.firebaseapp.com",
  databaseURL: "https://employee-scheduler-402b9.firebaseio.com",
  projectId: "employee-scheduler-402b9",
  storageBucket: "employee-scheduler-402b9.appspot.com",
  messagingSenderId: "336373202513",
  appId: "1:336373202513:web:d24ebf56b4a074ffd74270"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var employee = {
  name: "Branden Patten",
  phoneNumber: "(239)-699-2087",
  email: "patte.branden@gmail.com",
  age: 26,
  roles: ["baker", "bakery clerk", "cake decorator", "cashier"],
  account: {
  username: "username",
  password: "badplaintextpassword"}
}

function addUser() {
  var timestamp = firebase.database.ServerValue.TIMESTAMP
  database.ref().child('employee').push({

    fullName: employee.name,
    email: employee.email,
    age: employee.age,
    phoneNumber: employee.phoneNumber,
    roles: employee.roles,
    username: employee.account.username,
    password: employee.account.password,
    dateAdded: timestamp
  })


  // database.ref("/login").push({
  //   dateAdded: timestamp
  // })
}
addUser()


