$(document).ready(function(){
  $(".message").click(function(){
    $(".message").hide();
    $(".mail-content").show();
  });
  $(".done").click(function(){
    $(".mail-content").hide();
    $(".message").show();
  });
  $(".sign-in").click(function(){
      $.post("http://newsie.club/data",
      {
        "user": $(".user").val(),
        "pass": $(".pass").val()
      },
      function(data,status){
        var data = JSON.parse(data);
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          $(".list-group").append(`<a class="message" href="#">
            <li class="list-group-item mail-item">
              ${data[i].title} <span class="sender">${data[i].sender}</span><span class="tag tag-primary tag-pill float-xs-right">${data[i].date}</span>
            </li>
          </a>`);
        }
      });
  });
});
