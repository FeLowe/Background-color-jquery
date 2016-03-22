$(function(){
  $("button#light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
    $("body").addClass("dark-text");
  });

  $("button#dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("light-text");
  });

  $("button#original").click(function(){
    $("body").removeClass();
  });

  $("p").click(function() {
    $("p").addClass("highlight");
    $("p").removeClass("highlight");
    $("p").addClass("highlight");

  });
});
