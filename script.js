

var currLevel = 5;
var buttSeq = [];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

$("#start-button").click(function () {

  var input1 = this;
  input1.disabled = true;
  $(this).html("Watch the order!");
  playRandomSequence(currLevel);

});

async function playRandomSequence(lng) {

  for (var i=0; i<lng; i++) {

    var randButton = Math.random() * 4 + 1;
    randButton = Math.floor(randButton);

    buttSeq.push(randButton);

    await sleep(1000); // 1000 ms

    flashButton(randButton);

  };

  await sleep(1000); // 1000 ms

  $("#start-button").html("Your turn: Repeat the order!");

  checkUserInput(buttSeq,currLevel);

};

function checkUserInput (seq,stepNum) {

  var userPushCount = 0;
  var userSeq = [];

  $(".green-button").click(function () {
    userSeq.push(1);
    userPushCount++;
    $(this).animate({opacity: 0.5});
    $(this).animate({opacity: 1.0});
    if (userPushCount==stepNum && buttSeq==seq) {
      $("#start-button").html("Correct! You win!!!");
    } else if (userPushCount==stepNum) {
      $("#start-button").html("Wrong order!! Failure!");
    } else {
      $("#start-button").html("Make your next guess!");
    };
  });
  $(".red-button").click(function () {
    userSeq.push(2);
    userPushCount++;
    $(this).animate({opacity: 0.5});
    $(this).animate({opacity: 1.0});
    if (userPushCount==stepNum && buttSeq==seq) {
      $("#start-button").html("Correct! You win!!!");
    } else if (userPushCount==stepNum) {
      $("#start-button").html("Wrong order!! Failure!");
    } else {
      $("#start-button").html("Make your next guess!");
    };
  });
  $(".yellow-button").click(function () {
    userSeq.push(3);
    userPushCount++;
    $(this).animate({opacity: 0.5});
    $(this).animate({opacity: 1.0});
    if (userPushCount==stepNum && userSeq==seq) {
      $("#start-button").html("Correct! You win!!!");
    } else if (userPushCount==stepNum) {
      $("#start-button").html("Wrong order!! Failure!");
    } else {
      $("#start-button").html("Make your next guess!");
    };
  });
  $(".blue-button").click(function () {
    userSeq.push(4);
    userPushCount++;
    $(this).animate({opacity: 0.5});
    $(this).animate({opacity: 1.0});
    if (userPushCount==stepNum && buttSeq==seq) {
      $("#start-button").html("Correct! You win!!!");
    } else if (userPushCount==stepNum) {
      $("#start-button").html("Wrong order!! Failure!");
    } else {
      $("#start-button").html("Make your next guess!");
    };
  });

  //return console.log(userSeq)

};



function flashButton(num) {

  $("button").eq(num).animate({opacity: 0.5}).animate({opacity: 1.0});

};

//$("button").click(function () {
//  $(this).animate({opacity: 0.5});
//  $(this).animate({opacity: 1.0});
//});
