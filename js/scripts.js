
  $(function(){
    $(alert("Hello"));

    // hides previous results on submit
    $(".results").hide();
    $(".childOne").hide();
    $(".childTwo").hide();
    $(".childThree").hide();

    var work = parseInt($("#work").val());
    var interest = parseInt($("#interest").val());
    var development = parseInt($("#development").val());
    var computer = parseInt($("#computer").val());
    var projects = parseInt($("#projects").val());

    var output = function() {
      parseInt($(work + interest + development + computer + projects));
      return output;
    };
    output();



    $("#output").submit(function(event) {
      event.preventDefault();




      if (output === 0) {
        console.log(here);
        $(".notADeveloper").show();
      }
      // if (output >= 11 || <= 27) {
      //   $(".cSharpTrack").show();
      // }
      // if (output >= 28 || <= 44) {
      //   $(".rubyTrack").show();
      // }
      // if (output >= 45 || <=60) {
      //   $(".reactTrack").show();
      // }
    });
  });

// questions and answers for form
// work || Where do you want to work? startup, small company, large corporation
// interest || What Interests you most? how things look, how things work, both
// development || What type of development interests you? back end, front end, both
// computer || are you a windows or mac person? windows, mac, either
// projects || what types of development projects do you like? Business projects, mobile app, both business and mobile
