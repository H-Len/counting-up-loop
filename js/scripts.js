$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var incrementNum = $("input#incrementNum").val();
    var ceilingNum = $("input#ceilingNum").val();

for (var index = 0; index <= ceilingNum; index += incrementNum) {
  console.log(index);
}
