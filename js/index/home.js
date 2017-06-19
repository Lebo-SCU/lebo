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
});