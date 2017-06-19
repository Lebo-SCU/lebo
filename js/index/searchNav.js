$(document).on("pageshow","#searchNav",function(){


    $('.navLevel').each(function() {
        $(this).bind('click', function(){
            transData = {};
            transData.lab = $(this).find('.navLevNa').text();
            transData.labTy="level";
        });
    	
    });    
    $('.navType').each(function(){
        $(this).bind('click', function() {
    	   transData = {};
    	   transData.lab = $(this).text();
    	   transData.labTy="propertyType";
        });    
    });

});