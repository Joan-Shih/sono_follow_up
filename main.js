$(document).ready(function(){
    $(".sono").hide();

    $("#r1").click(function(){
      $(".sono").hide();
      $("#s1").show();
      $("#title").text("Region 1");
    });
    $("#r2").click(function(){
      $(".sono").hide();
      $("#s2").show();
      $("#title").text("Region 2");
    });
    $("#r3").click(function(){
      $(".sono").hide();
      $("#s3").show();
      $("#title").text("Region 3");
    });
    $("#r4").click(function(){
      $(".sono").hide();
      $("#s4").show();
      $("#title").text("Region 4");
    });
    $("#r5").click(function(){
      $(".sono").hide();
      $("#s5").show();
      $("#title").text("Region 5");
    });
    $("#r6").click(function(){
      $(".sono").hide();
      $("#s6").show();
      $("#title").text("Region 6");
    });

    $(".region").click(function(){
      if ($(this).css("background-color") == "rgb(240, 255, 255)"){
        $(".region").css("background-color", "rgb(240, 255, 255)");
        $(this).css("background-color", "rgb(255, 0, 0)");
      }else{
        $("#title").text("Region");
        $(".sono").hide();
        $(".region").css("background-color", "rgb(240, 255, 255)");
      }
    });



});
