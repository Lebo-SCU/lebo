var $homeTemplate = $(document).find('.home-item');
var $homeItems = $(document).find('.home-items');
    

$(document).on("pagebeforeshow","#home",function(){ 
	$("li.home-item").remove();
});


$(document).on("pageshow","#home",function(){
	
    for ( var i = 0; i<3;i++){
        var random_list = {};
        
        var random = parseInt(Math.random()*100000%13404);
        var homeUrl = "http://120.76.144.46:8080/solr/lebojson/select?indent=on&wt=json&q=*:*&start="+random;
        main.doAjax({
        
            url:homeUrl,

            success:function(ret) { 
            
                console.log(ret.response.docs[0]);
                random_list = ret.response.docs[0];
            

        
        console.log(random_list);
        var $item = $homeTemplate.clone(true);
        var myimg = "http://kydww.sach.gov.cn" + random_list.img[0];
        $item.find('.homeMyimg').attr('src', myimg);
        $item.find('.homeRelName').text(random_list.name);
        $item.find('.home-dyn').text(random_list.productionDynasty);
        $item.find('.home-level').text(main.getTypeDesc(random_list.level));
        $item.find('.home-musName').text(random_list.museum_name);
        $homeItems.append($item);
        $item.bind("click", function(){
            //transData = {};
            searchDet = random_list;
            $.mobile.changePage("#searchDetails"); 

        });

            }
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