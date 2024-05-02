$(document).ready(function () {

	$.ajax ({
          type: 'GET',
	  url 'https://swapi-api.alx-tools.com/api/films/?format=json',
	  success: function (data) {

		  $('UL#list_movies').text(data.title);
	  }
	});
});
