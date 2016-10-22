function showit(id) {
  $(id).show();
  $(".top").hide();
}

function hideit(id) {
  $(id).hide();
  $(".top").show();
}

$(document).ready(function(){
  $(".inbox-title").hide();
  $(".email-content").hide();
  $(".loading").hide();
  $(".button").click(function(){
      $.post("http://newsie.club/data",
      {
        "user": $(".user").val(),
        "pass": $(".pass").val()
      },

      function(data,status){
        $("#place-holder").remove();
        $(".inbox-title").show();
        $(".loading").show();
        var data = JSON.parse(data);
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          $(".loading").remove();
          $(".list-group").append(`<a onclick="showit('#${data[i].id}')" class="message" href="#">
            <li class="list-group-item mail-item">
            <tr>
              <td>${data[i].title}<td>
              <td>${data[i].sender}</td>
              <td><span class="tag tag-primary tag-pill float-xs-right">${data[i].date}</span></td>
            </tr>
            </li>
          </a>`);
          $(".total").append(`
            <div id="${data[i].id}" class="email-content">
              <h3>${data[i].sender}</h3>
              <h4>${data[i].title}</h4>
              <span class="tag tag-pill tag-primary">${data[i].date}</span>
              <p>
                ${data[i].body}
              </p>
              <a class="done btn btn-primary" onclick="hideit('#${data[i].id}')">Done? Head home</a>
            </div>
          `);
        }
      });
  });
});
