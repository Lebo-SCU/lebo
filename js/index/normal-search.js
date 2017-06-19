$(document).on("pageshow","#normal-search",function(){

	$('.normal-go').bind('click', function() {
		transData = {};
		if ($('#normal-name').val()) {
			
		transData.qes = $('#normal-name').val();
		}
		console.log(transData);
	});
});