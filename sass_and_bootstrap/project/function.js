$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
    trigger: "hover"
  });

  $("#top10").on('hide.bs.collapse', function(){
    $("a[data-toggle='collapse'] span").removeClass("glyphicon-minus").addClass("glyphicon-plus");
  });

  $("#top10").on('show.bs.collapse', function(){
    $("a[data-toggle='collapse'] span").removeClass("glyphicon-plus").addClass("glyphicon-minus");
  });

  $("[data-toggle='tooltip']").tooltip();

  $("#nav_test").affix({
    offset: {
      top: $("#nav_test").offset().top - 70,
      bottom: function () {
        return $(".pj_footer").outerHeight(true) + 20;
      }
    }
  });
});
