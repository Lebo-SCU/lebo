$(document).on("pageshow","#home",function(){


    $('#taoqi').bind('click', function() {
    	transData = {};
    	transData.lab ="陶器";
    	transData.labTy="propertyType";
    });    
    $('#shufa').bind('click', function() {
    	transData = {};
    	transData.lab ="书法";
    	transData.labTy="propertyType";
    });    
    $('#jiagu').bind('click', function() {
    	transData = {};
    	transData.lab ="甲骨";
    	transData.labTy="propertyType";
    });
    $('#relic').bind('click', function() {
        transData = {};
        transData.lab ="1";
        transData.labTy="level";
    });
    $('#tong').bind('click', function() {
        transData = {};
        transData.qes ="青铜方鼎";
    });
    $('#poem').bind('click', function() {
        transData = {};
        transData.qes = "唐诗宋词"
        transData.lab ="书法、绘画";
        transData.labTy="propertyType";
    });

    $('#homeSer').bind('click', function() {
        $.mobile.changePage("#normal-search");
    });
});