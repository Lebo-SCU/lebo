        var random_list0 = {};
        var random_list1 = {};
        var random_list2 = {};



$(document).on("pageshow","#home",function(){
	


        var random_url = main.getRandomUrl();
        main.doAjax({
        
            url:random_url,

            success:function(ret) { 
            
                random_list0 = ret.response.docs[0];
		        var $item = $(document).find('.homeItem0');
		        var myimg = "http://kydww.sach.gov.cn" + random_list0.img[0];
		        $item.find('.homeMyimg').attr('src', myimg);
		        $item.find('.homeRelName').text(random_list0.name);
		        $item.find('.homeDyn').text(random_list0.productionDynasty);
		        $item.find('.homeLevel').text(main.getTypeDesc(random_list0.level));
		        $item.find('.homeMusName').text(random_list0.museum_name);


            }
        }); 

        random_url = main.getRandomUrl();
        main.doAjax({
        
            url:random_url,

            success:function(ret) { 
            
                random_list1 = ret.response.docs[0];
		        var $item = $(document).find('.homeItem1');
		        var myimg = "http://kydww.sach.gov.cn" + random_list1.img[0];
		        $item.find('.homeMyimg').attr('src', myimg);
		        $item.find('.homeRelName').text(random_list1.name);
		        $item.find('.homeDyn').text(random_list1.productionDynasty);
		        $item.find('.homeLevel').text(main.getTypeDesc(random_list1.level));
		        $item.find('.homeMusName').text(random_list1.museum_name);


            }
        }); 

        random_url = main.getRandomUrl();
        main.doAjax({
        
            url:random_url,

            success:function(ret) { 
            
                random_list2 = ret.response.docs[0];
		        var $item = $(document).find('.homeItem2');
		        var myimg = "http://kydww.sach.gov.cn" + random_list2.img[0];
		        $item.find('.homeMyimg').attr('src', myimg);
		        $item.find('.homeRelName').text(random_list2.name);
		        $item.find('.homeDyn').text(random_list2.productionDynasty);
		        $item.find('.homeLevel').text(main.getTypeDesc(random_list2.level));
		        $item.find('.homeMusName').text(random_list2.museum_name);


            }
        }); 

});

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
        transData.qes = "山西木雕"
    });

    $('.homeSer').bind('click', function() {
        $.mobile.changePage("#normal-search");
    });

	$(document).find('.homeItem0').bind("click", function(){
	    searchDet = {};
	    searchDet = random_list0;
	    $.mobile.changePage("#searchDetailsForHome"); 

	});

	$(document).find('.homeItem1').bind("click", function(){
	    searchDet = {};
	    searchDet = random_list1;
	    $.mobile.changePage("#searchDetailsForHome"); 

	});


	$(document).find('.homeItem2').bind("click", function(){
	    searchDet = {};
	    searchDet = random_list2;
	    $.mobile.changePage("#searchDetailsForHome"); 

	});


