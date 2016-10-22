$(document).ready(function() {
  $(".message").click(function(event){
    event.preventDefault();
    $(this).hide();
    $(".mail-content").show(2000);
  });
});
