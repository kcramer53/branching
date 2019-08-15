

$(document).ready(function(){
  $("#analysis").click(function(){
      var pet = $("input:radio[name=pet]:checked").val();
      if (pet==="cookie1") {
        $("#scooby2").hide();
        $("#imagine2").hide();
        $("#cookie2").show();
      }
      else if (pet==="scooby1") {
        $("#imagine2").hide();
        $("#cookie2").hide();
        $("#scooby2").show();
      }
      else {
        $("#scooby2").hide();
        $("#cookies2").hide();
        $("#imagine2").show();
      }
      event.preventDefault();
  });
});
