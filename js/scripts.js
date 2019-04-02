$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var incrementNum = parseInt($("input#input1").val());
    var ceilingNum = parseInt($("input#input2").val());
    // var ceilingNum = parseInt(input2);
    // var incrementNum = parseInt(input1);
    console.log(typeof(incrementNum));
    console.log(typeof(ceilingNum));
    if (incrementNum === ' ' || incrementNum < 0 || incrementNum > ceilingNum || (isNaN(incrementNum)) || ceilingNum === ' ' || ceilingNum < 0 || ceilingNum > ceilingNum || (isNaN(ceilingNum)) ) {
    alert("Please try again!");
    }
    for (var index = 0; index <= ceilingNum; index += incrementNum) {
      console.log(index);
    }
    event.preventDefault();
  });
});
