$('button').on('click', function(){
  var weatherTemplate = $("#templates .forecast").html();
  var city = $('#city').val();
  var temp = "";
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&mode=json&units=imperial";
  $.ajax({
      url: url,
      type: "get",
      dataType: "json",
      success: function (data) {
          temp = data.main.temp;
          console.log("temp: " +temp);
          var forecastHtml = Robin.render(weatherTemplate, {city: city, temp: temp });
          $('.rForecast').html(forecastHtml);

      // <!!!!!!!post request!!!!!!!!>

          $.ajax({
            url: "/",
            type: "post",
            data: {name: city, temperature: temp},
            dataType: "json",
              success: function(data){
                alert("post successful")
                console.log(data);
              },
              error: function(data){
                alert("post unsuccessful")
                console.log(data);
              }

          });
      },
      error: function(xhr, status) {
        console.log("There was an error");
      }

  });

});
