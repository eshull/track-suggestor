
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

// questions and answers for form
// Where do you want to work? startup, small company, large corporation
// What Interests you most? how things look, how things work, both
// What type of development interests you? back end, front end, both
// are you a windows or mac person? windows, mac, either
// what types of development projects do you like? Business projects, mobile app, both business and mobile
