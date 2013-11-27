$(document).ready(function() {
	$('form').on('change', ':checkbox', function(){
		$(this).parent().toggleClass('checked');
	});
	$('#add').click(function() {
		if($(':text').val() != "" && $(':text').val() != " ") {
			$('form').append('<p><input type="checkbox">' + $(':text').val() + '</p>');
		}
	});
});