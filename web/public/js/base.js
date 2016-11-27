$(document).on('DOMContentLoaded', function () {
    setupRoutes();
    // Initialise Firebase
    initFirebase();

    var applicantdata=null;



    $('#applicant-search').on('keypress', function (e) {
        if(e.which === 13){
            hasher.setHash('search/' + $(this).val());
            firebase.database().ref("applicants").child($(this).val()).orderByKey().limitToLast(1).once("value").then(function (snapshot) {
              applicantdata=JSON.stringify(snapshot.val());
              var parsed = JSON.parse(applicantdata);

var arr = [];

for(var x in parsed){
  arr.push(parsed[x]);
}
applicantdata="<center><h3 style=\"margin-bottom: 20px; padding: 5px; color: #3f51b5;\">We found an employee!</h3></center><h4><span class=\"glyphicon glyphicon-user\"></span> "+arr[0].name+"</h4>"+"<h4><span class=\"glyphicon glyphicon-earphone\"></span> "+arr[0].number+"</h4>";
$('#dummy').avgrund({
  height: 150,
  holderClass: 'custom',
  showClose: false,
  onBlurContainer: '.site-title-container',
  template: applicantdata
});
              $("#dummy").click();
            });

        }
    });
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
