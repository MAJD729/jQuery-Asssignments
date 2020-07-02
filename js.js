$( "#fBtn" ).click(function() {
    $( "#firstP" ).fadeOut( "slow", function() {
    });
});
$( "#sBtn" ).click (function() {
    $("#secondP").append("<br>new lorem ipsum")
});

    $( "#tBtn" ).click (function() {
    $( "#thirdP").css( "color", "teal" );
  });