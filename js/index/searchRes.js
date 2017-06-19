    //searchResData.qes = "甘肃瓷器";
    //searchResData.lab = "一级";
    //searchResData.labTy = "level";
    // searchResData.loc = "甘肃省";
    // searchResData.relName = "白瓷";
    // searchResData.musName = "西河";
    // searchResData.dyn = "宋";
    //searchResData.level = "一级";
    // searchResData.mater = "瓷";
    // searchResData.typ = "瓷器";
    // searchResData.sort = "级别从高到低";
var $template = $(document).find('#searchRes .all-item');
var $items = $(document).find('#searchRes .all-items');





$(document).on("pageinit","#searchRes",function(){
    var mainData = main.doSea(transData);
    
});


$(document).on("pagebeforeshow","#searchRes",function(){ 
    $("li").remove();
    transData.start = 1;
});


$(document).on("pageshow","#searchRes",function(){

        var mainData = main.doSea(transData);
        // $(document).find('.all-item').remove();
        $(document).find('.searchTag').text(mainData.searchTag);
        main.doAjax({

            url:mainData.urlList,
            success:function(ret) { 
                    console.log(ret);
                $("#total_page").text(ret.response.start+"/"+parseInt(ret.response.numFound/10)+"页");    

                ret.response.docs.forEach(function (res) {
                    
                    var $item = $template.clone(true);
                    var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                    $item.find('.myimg').attr('src', myimg);
                    $item.find('.relName').text(res.name);
                    $item.find('.dyn').text(res.productionDynasty);
                    $item.find('.level').text(main.getTypeDesc(res.level));
                    $item.find('.musName').text(res.museum_name);
                    $items.append($item);
                    $item.bind("click", function(){
                        //transData = {};
                        searchDet = res;
                        $.mobile.changePage("#searchDetails"); 

                    });


                });
                

            }
        }); 


    //下一页跳转
    $('.next_page').bind('click', function() {
        $("li").remove();
        if (transData.start) {
            transData.start += 1;
        } else {
            transData.start = 2;
        }

        var mainData = main.doSea(transData);
        main.doAjax({

            url:mainData.urlList,
            success:function(ret) { 
                $("#total_page").text(ret.response.start+"/"+parseInt(ret.response.numFound/10)+"页");    

                ret.response.docs.forEach(function (res) {
                    
                    var $item = $template.clone(true);
                    var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                    $item.find('.myimg').attr('src', myimg);
                    $item.find('.relName').text(res.name);
                    $item.find('.dyn').text(res.productionDynasty);
                    $item.find('.level').text(main.getTypeDesc(res.level));
                    $item.find('.musName').text(res.museum_name);
                    $items.append($item);
                    $item.bind("click", function(){
                        //transData = {};
                        searchDet = res;
                        $.mobile.changePage("#searchDetails"); 

                    });


                });
                

            }
        }); 

    });

    //上一页跳转
    $('.last_page').bind('click', function() {
        if (transData.start) {
            if (transData.start > 1) {
                $("li").remove();
                transData.start -= 1;
                var mainData = main.doSea(transData);
                main.doAjax({

                    url:mainData.urlList,
                    success:function(ret) { 
                        $("#total_page").text(ret.response.start+"/"+parseInt(ret.response.numFound/10)+"页");    

                        ret.response.docs.forEach(function (res) {
                            
                            var $item = $template.clone(true);
                            var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                            $item.find('.myimg').attr('src', myimg);
                            $item.find('.relName').text(res.name);
                            $item.find('.dyn').text(res.productionDynasty);
                            $item.find('.level').text(main.getTypeDesc(res.level));
                            $item.find('.musName').text(res.museum_name);
                            $items.append($item);
                            $item.bind("click", function(){
                                //transData = {};
                                searchDet = res;
                                $.mobile.changePage("#searchDetails"); 

                            });


                        });
                        

                    }
                }); 
            }
        } 

    });
});

