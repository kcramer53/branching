

$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var age = parseFloat($("input#age").val());
    console.log(age);
    var desire = $("input:checkbox[name=desire]:checked").val();
    console.log(desire);
    // if (age >= 18 && desire = ""      ) {
    //
    // }


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
