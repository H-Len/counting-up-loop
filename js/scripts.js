$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var input1 = $("input#input1").val();
    var input2 = $("input#input2").val();
    var ceilingNum = parseInt(input2);
    var incrementNum = parseInt(input1);
    // console.log(typeof(incrementNum2));
    // console.log(typeof(ceilingNum2));
    for (var index = 0; index <= ceilingNum; index += incrementNum) {
      console.log(index);
    }
    event.preventDefault();
  });
});
