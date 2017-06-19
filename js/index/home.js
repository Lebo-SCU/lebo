

$(document).on("pagebeforeshow","#home",function(){ 
	$("li").remove();
});


$(document).on("pageshow","#home",function(){
	var $template = $(document).find('#home .all-item');
	var $items = $(document).find('#home .all-items');
    for ( var i = 0; i<3;i++){
        var random_list = {};
        random_list = main.doRadom();
        
        console.log(random_list);
        var $item = $template.clone(true);
        var myimg = "http://kydww.sach.gov.cn" + random_list.img[0];
        $item.find('.myimg').attr('src', myimg);
        $item.find('.relName').text(random_list.name);
        $item.find('.dyn').text(random_list.productionDynasty);
        $item.find('.level').text(main.getTypeDesc(random_list.level));
        $item.find('.musName').text(random_list.museum_name);
        $items.append($item);
        $item.bind("click", function(){
            //transData = {};
            searchDet = random_list;
            $.mobile.changePage("#searchDetails"); 

        });


    }

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