

$(document).ready(function(){
  console.log(1);
  $("#formOne").submit(function(){
    event.preventDefault();
    console.log(2);
    var age = parseFloat($("input#age").val());
    console.log(age);
    var desire = $(":checkbox").val();
    console.log(desire);

});

  $("#button").click(function(){
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
        $("#cookie2").hide();
        $("#imagine2").show();
      }
      event.preventDefault();
  });
});
