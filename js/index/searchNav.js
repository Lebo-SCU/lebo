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
    $('.navDyn').each(function(){
        $(this).bind('click', function() {
           transData = {};
           transData.lab = $(this).text();
           transData.labTy="productionDynasty";
        });    
    });
    $('.navLoc').each(function(){
        $(this).bind('click', function() {
           transData = {};
           transData.lab = $(this).text();
           transData.labTy="location";
        });    
    });
    $('.navMater').each(function(){
        $(this).bind('click', function() {
           transData = {};
           transData.lab = $(this).text();
           transData.labTy="materials";
        });    
    });

    $(function () { $('#collapseTwo').collapse('show')});
    $(function () { $('#collapseThree').collapse('show')});
    $(function () { $('#collapseFour').collapse('show')});
    $(function () { $('#collapseFive').collapse('show')});
    $(function () { $('#collapseSix').collapse('show')});

});