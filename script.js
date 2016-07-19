	


$(document).ready(function() {
$('.resume').hide();

$('button').on('click', function () {
var showResume = $('<span>View My Resume</span>');

$('.resume').show();
$('.span').append(showResume);
$('button').remove();

});



});



 