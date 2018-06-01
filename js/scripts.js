
  $(function(){
    $("#epicodusTrack").submit(function(event) {
      event.preventDefault();
      var height = parseInt($("input:radio[name=interest]:checked").val());
      $(".parentDiv").show();
      $(".childOne").hide();
      $(".childTwo").hide();
      $(".childThree").hide();

      if (output < 4) {
        $(".rubyTrack").show();
      }
      if (output >= 4) {
        $(".cSharpTrack").show();
      }
      if (output >= 7) {
        $(".reactTrack").show();
      }
    });
  });
