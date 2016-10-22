$(document).ready(function(){
  // $(".message").click(function(){
  //   $(".message").hide();
  //   $(".mail-content").show();
  // });
  // $(".done").click(function(){
  //   $(".mail-content").hide();
  //   $(".message").show();
  // });
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
          $(".list-group").append(`<a class="message" href="#">
            <li class="list-group-item mail-item">
              ${data[i].title} <span class="sender">${data[i].sender}</span><span class="tag tag-primary tag-pill float-xs-right">${data[i].date}</span>
            </li>
          </a>`);
          $(".total").add(`
            <div id="${data[i].id}">
              <h3>${data[i].sender}</h3>
              <h4>${data[i].title}</h4>
              <span class="tag tag-pill tag-primary">${data[i].date}</span>
              <p>
                ${data[i].body}
              </p>
            </div>
            `);
        }
      });
  });
});
