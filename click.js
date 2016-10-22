// $(document).ready(function() {
//   $(".message").click(function(event){
//     event.preventDefault();
//     $(this).hide();
//     $(".mail-content").show();
//   });
// });

$(document).ready(function(){
  $(".message").click(function(){
    $(".message").hide();
    $(".mail-content").show();
  });
  $(".done").click(function(){
    $(".mail-content").hide();
    $(".message").show();
  });
});
