
$(function(){

    var work = parseInt($("#work").val());
    var interest = parseInt($("#interest").val());
    var development = parseInt($("#development").val());
    var computer = parseInt($("#computer").val());
    var projects = parseInt($("#projects").val());

  $("#theForm").submit(function(event) {
    event.preventDefault();

    if ((work + interest + development + computer + projects) <= 10) {
      console.log("not a developer");
      $(".noResult").show();
      $(".notADeveloper").show();
    } else if ((work + interest + development + computer + projects) <= 27) {
      console.log("sharp");
      $(".cSharpResult").show();
      $(".cSharpTrack").show();
    } else if ((work + interest + development + computer + projects) <= 44) {
      console.log("Ruby");
      $(".rubyResult").show();
      $(".rubyTrack").show();
    } else if ((work + interest + development + computer + projects) <= 60) {
      console.log("React");
      $(".reactResult").show();
      $(".reactTrack").show();
    } else {
        alert("in the else");
      };
    });
  });

// questions and answers for form
// work || Where do you want to work? startup, small company, large corporation
// interest || What Interests you most? how things look, how things work, both
// development || What type of development interests you? back end, front end, both
// computer || are you a windows or mac person? windows, mac, either
// projects || what types of development projects do you like? Business projects, mobile app, both business and mobile
