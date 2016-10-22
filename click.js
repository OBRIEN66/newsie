$(document).ready(function(){
  $(".message").click(function(){
    $(".message").hide();
    $(".mail-content").show();
  });
  $(".done").click(function(){
    $(".mail-content").hide();
    $(".message").show();
  });
  $(".button").click(function(){
      $.post("http://newsie.club/data",
      {
        "user": $(".user").val(),
        "pass": $(".pass").val()
      },
      function(data,status){
        var data = JSON.parse(data);
        console.log(data);
        for (var i = 0; i < data.length; i++) {

          console.log(data[i]);
        }
      });
  });
});
