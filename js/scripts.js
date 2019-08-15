

$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var age = parseFloat($("input#age").val());
    console.log(age);
    var desire = $("input:checkbox[name=desire]:checked").val();
    console.log(desire);
    if (age >= 18 && desire==="Y") {
      $("#pass-age").show();
    } else if (age<18) {$(".screen").show("Sorry you need to be 18 to adopt a furry friend. Come back when you are older!");
      }
      else if (desire==="N"){$("#no-desire").show();
      } else {
        alert('Please enter your age.');
    }
  });
  // alert is NOT working. too young screen is NOT working(else if <18). 

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
