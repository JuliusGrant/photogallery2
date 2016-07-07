$("#search").keyup(function(){

  var current_query = $("#search").val().toLowerCase();

  if (current_query !== ""){
    $("div.img img").hide();

    $("div.img img").each(function(){

      var current_list = $(this).attr("data-list").toLowerCase();

      if (current_list.indexOf(current_query) >= 0){
        $(this).show();
      }
    });
  } else {
    $("div.img img").show();
  }

});
