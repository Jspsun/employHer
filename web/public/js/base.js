$(document).on('DOMContentLoaded', function () {
    setupRoutes();
    // Initialise Firebase
    initFirebase();
});

var setupRoutes = function () {
    crossroads.addRoute('home');
    crossroads.addRoute('search/{term}', function (term) {

    });

    //setup hasher
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash); //parse initial hash
    hasher.changed.add(parseHash); //parse hash changes
    hasher.init(); //start listening for history change
};

var initFirebase = function () {
    var config = {
        apiKey: "AIzaSyB-aHO2JYOcvFmjuifuHVDpF_GAOWRGQ58",
        authDomain: "breakinequality.firebaseapp.com",
        databaseURL: "https://breakinequality.firebaseio.com",
        storageBucket: "breakinequality.appspot.com",
        messagingSenderId: "690173784028"
    };
    firebase.initializeApp(config);
};