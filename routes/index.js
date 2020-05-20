var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/', function(req, res, next) {
  
  db.ref('lab9-prueba-1/DatosFinal').once('value', (snapshot) => {
    data = snapshot.val();  
    console.log(data);
    res.render('index',{Data: data});
  });


  
});

const admin = require('firebase-admin')

var serviceAccount = require("../lab9-prueba-1-firebase-adminsdk-y25rd-30472a4e70.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lab9-prueba-1.firebaseio.com/'
});
const db = admin.database();


module.exports = router;
