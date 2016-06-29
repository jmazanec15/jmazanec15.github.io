

function bombDropper(leftPos, topPos, randomDrop) {


  if ( $(".bird").length && $(".bird").position().left === randomDrop) {
    $("main .row .col-12").append("<div class='bomb'></div>");
    var bombWidth = leftPos;
    var bombHeight = topPos;
    $(".bomb").css({left: bombWidth});
    $(".bomb").css({top: bombHeight});
    var dropped = true;
    var dropping = setInterval(drop, 20);
    function drop() {
      if ($(".bomb").length && $(".bomb").position().top >=1000) {
        $(".bomb").remove();
        clearInterval(dropping);
      } else {  
      bombHeight+=10;
      $(".bomb").css({top: bombHeight});
    }
    }
  }
}




function collisionCheck() {

  if (  $( ".bird" ).length &&
        $(".bullet").length &&
        $(".bullet").position().left >=  $(".bird").position().left &&
        $(".bullet").position().left + 5 <=  $(".bird").position().left + 20 &&
        $(".bullet").position().top >=  $(".bird").position().top &&
        $(".bullet").position().top + 5 <=  $(".bird").position().top + 20) {

        return true;
  }

}

// animating bird across screen
var myMoveAcross = function() {
  var dropped = false;
  var leftPos = 0;
  var topPos = 300 * Math.random();
  var randomDrop = Math.round((Math.random() * 1140));
  console.log(randomDrop);
  $("main .row .col-12").append("<div class='bird'></div>");
  $(".bird").css({top: topPos});
  var flying = setInterval(fly, 6);
  function fly() {
    if (dropped) {

    } else {
      bombDropper(leftPos, topPos, randomDrop);
    }
      if (leftPos>1120 || collisionCheck()) {
        $(".bird").remove();
        clearInterval(flying);
        return
      } else {
        leftPos+=1;
        $(".bird").css({left: leftPos});
      }
  }
};


function birdGenerator() {

  var counter1 = 0;
  var generating = setInterval(generate, 10000);
  function generate() {
    if (counter1 > 6) {
      clearInterval(generating);
      return
    } else {
      myMoveAcross();
      counter1++;
    }
  }
}

myMoveAcross();
birdGenerator();

var inField = false;
// animating bullet shooting
function myMoveUp(height, degrees) {
  inField = true;
  var shooting = setInterval(shoot, 6);
  var heightPos = Math.round(height * Math.cos(degrees));
  var widthPos = 535 + Math.round(height * Math.sin(degrees)); 
  function shoot() {
    $("main .row .col-12").append("<div class='bullet'></div>")
    if (heightPos>595 || widthPos> 1129 || widthPos<0) {
      $(".bullet").remove();
      clearInterval(shooting);
      inField = false;

    } else {
      heightPos+= 10 * Math.cos(degrees);
      widthPos+= 10 * Math.sin(degrees);
    $(".bullet").css({bottom: heightPos});
    $(".bullet").css({left: widthPos});
    }
  };

};





// On-click functions

var degrees = 0;

$(document).keypress(function(event){
  if (String.fromCharCode(event.which)==='m'){
    if (degrees>=85) {

    } else {
      degrees += 5;        
      $(".slingshot").css("-webkit-transform", "rotate(" + degrees + "deg)");  /* Chrome, Safari 3.1+ */
      $(".slingshot").css("-moz-transform", "rotate(" + degrees + "deg)");  /* Firefox 3.5-15 */
      $(".slingshot").css("-ms-transform", "rotate(" + degrees + "deg)");  /* IE 9 */
      $(".slingshot").css("-o-transform", "rotate(" + degrees + "deg)");  /* Opera 10.50-12.00 */
      $(".slingshot").css("transform", "rotate(" + degrees + "deg)");
    }  
  } else if (String.fromCharCode(event.which)==='b') {
    if (degrees<=-85) {

    } else {
      degrees -= 5;
      $(".slingshot").css("-webkit-transform", "rotate(" + degrees + "deg)");  /* Chrome, Safari 3.1+ */
      $(".slingshot").css("-moz-transform", "rotate(" + degrees + "deg)");  /* Firefox 3.5-15 */
      $(".slingshot").css("-ms-transform", "rotate(" + degrees + "deg)");  /* IE 9 */
      $(".slingshot").css("-o-transform", "rotate(" + degrees + "deg)");  /* Opera 10.50-12.00 */
      $(".slingshot").css("transform", "rotate(" + degrees + "deg)");
    }    
  } else if (String.fromCharCode(event.which)==='n') {
      if (inField) {

      } else if(inField === false) {
      radians = degrees * (3.14159265/180)
      myMoveUp(70, radians);
      } 
  } else if (String.fromCharCode(event.which)==='z') {
    if ($(".boat1").position().left<=0) {

    } else {
    var newLeft = $(".boat1").position().left - 10;
    $(".boat1").css({left: newLeft});
    }
  } else if (String.fromCharCode(event.which)==='x') {

    if ($(".boat1").position().left >= 401) {

    } else {
      var newRight = $(".boat1").position().left + 10;
      $(".boat1").css({left: newRight});
    }
  } else if (String.fromCharCode(event.which)==='c') {
    if ($(".boat2").position().left <= 580) {

    } else {
    var newLeft1 = $(".boat2").position().left - 10;
    $(".boat2").css({left: newLeft1});
    }
  } else if (String.fromCharCode(event.which)==='v') {
    if ($(".boat2").position().left >= 1040) {

    } else {
    var newRight1 = $(".boat2").position().left + 10;
    $(".boat2").css({left: newRight1});
    }
  };

});


