/* this function switches content in the terminal when a nav item is clicked */

$(document).ready(function(){
  $("#what").hide();
  $("#why").hide();
  $("#who").hide();
  $("#get_involved").hide();
  $(".changed:nth-child(1)").on("click", function(){
    $("#what").show();
    $("#why").hide();
    $("#who").hide();
    $("#get_involved").hide();
  });
  $(".changed:nth-child(2)").on("click", function(){
    $("#who").show();
    $("#what").hide();
    $("#why").hide();
    $("#get_involved").hide();
  });
  $(".changed:nth-child(3)").on("click", function(){
    $("#why").show();
    $("#what").hide();
    $("#who").hide();
    $("#get_involved").hide();
  });
  $(".changed:nth-child(4)").on("click", function(){
    $("#get_involved").show();
    $("#what").hide();
    $("#why").hide();
    $("#who").hide();
  });
});


