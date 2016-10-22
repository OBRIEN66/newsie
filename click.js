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
          $(".list-group").add(`<a class="message" href="#">
            <li class="list-group-item mail-item">
              ${data[i].title} <span class="subject">${data[i].subject}</span><span class="tag tag-primary tag-pill float-xs-right">${data[i].date}</span>
            </li>
          </a>`);
        }
      });
  });
});
