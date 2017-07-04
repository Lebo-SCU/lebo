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
var $template = $(document).find('.all-item');
var $items = $(document).find('.all-items');
var facet_list_label = $(document).find('.levle-label');
var facet_list_checkbox = $(document).find('.levle-checkbox');
var facet_list2_label = $(document).find('.materials-label');
var facet_list2_checkbox = $(document).find('.materials-checkbox');
var total_page = 0;





$(document).on("pageinit","#searchRes",function(){
    var mainData = main.doSea(transData);
    
});


$(document).on("pagebeforeshow","#searchRes",function(){ 
    $(".all-item").remove();
    transData.start = 1;
});


$(document).on("pageshow","#searchRes",function(){

    var mainData = main.doSea(transData);
    // $(document).find('.all-item').remove();
    $(document).find('.searchTag').text(mainData.searchTag);

    // setAttribute("for",xxx);
    // setAttribute("value",xxx);


    //分面页面
    $('.sr-facet').bind('click', function() {
    
            var mainData = main.doSea(transData);
            //文物等级分面
            var facetLevelUrl = mainData.urlList + "&facet.field=level&facet=on&";
            main.doAjax({

                url:facetLevelUrl,
                success:function(ret) { 
                    $('.sr-level-list').remove();
                    $('.levle-label').remove();
                    console.log(ret.facet_counts.facet_fields.level);
                    
                    var levels = ret.facet_counts.facet_fields.level;
                    var length = levels.length/2;
                    for (var i = 0; i < length; i++) {
                        if (levels[i*2+1] != 0) {
                            var list_label = facet_list_label.clone(true);
                            var list_checkbox = facet_list_checkbox.clone(true);
                            list_label.attr("for",levels[i*2]);         
                            list_label.text(levels[i*2]);         
                            list_label.append('<span class="ui-li-count">'+levels[i*2+1]+'</span>'); 
                            list_checkbox.attr("id",levels[i*2]);         
                            list_checkbox.attr("value",levels[i*2]);  
                            // $(".level-list").append(list_checkbox);       
                            $(".level-list").append(list_label);       
                        }
                    }

                }
            }); 
        
            //材质分面
            var facetLevelUrl = mainData.urlList + "&facet.field=materials&facet=on&";
            main.doAjax({

                url:facetLevelUrl,
                success:function(ret) { 
                    $('.sr-materials-list').remove();
                    $('.materials-label').remove();
                    console.log(ret.facet_counts.facet_fields.materials);
                    
                    var materials = ret.facet_counts.facet_fields.materials;
                    var length = materials.length/2;
                    for (var i = 0; i < length; i++) {
                        if (materials[i*2+1] != 0) {
                            var list_label = facet_list2_label.clone(true);
                            var list_checkbox = facet_list2_checkbox.clone(true);
                            list_label.attr("for",materials[i*2]);         
                            list_label.text(materials[i*2]);         
                            list_label.append('<span class="ui-li-count">'+materials[i*2+1]+'</span>'); 
                            list_checkbox.attr("id",materials[i*2]);         
                            list_checkbox.attr("value",materials[i*2]);  
                            // $(".materials-list").append(list_checkbox);       
                            $(".materials-list").append(list_label);       
                        }

                    }

                }
            }); 

    });




    //分面的搜索
    $('.sr-submit').bind('click', function() {
    
            transData.start = 1;

            var obj=document.getElementsByName('sr-level');   
            var level =new Array();
            for(var i=0; i<obj.length; i++){    
                if(obj[i].checked)  level.push(obj[i].value);  
            } 
            searchResData.level = level;




            $(".all-item").remove();
            var mainData = main.doSea(transData);
            main.doAjax({

                url:mainData.urlList,
                success:function(ret) { 
                    $("#total_page").text(ret.response.start+"/"+total_page+"页");    

                    ret.response.docs.forEach(function (res) {
                        
                        var $item = $template.clone(true);
                        var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                        $item.find('.myimg').attr('src', myimg);
                        $item.find('.relName').html(res.name);
                        $item.find('.dyn').html(res.productionDynasty);
                        $item.find('.level').text(main.getTypeDesc(res.level));
                        $item.find('.musName').html(res.museum_name);
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


    main.doAjax({

        url:mainData.urlList,
        success:function(ret) { 
                console.log(ret);
            total_page = Math.ceil(ret.response.numFound/10);
            $("#total_page").text(ret.response.start+"/"+total_page+"页");    

            ret.response.docs.forEach(function (res) {
                
                var $item = $template.clone(true);
                var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                $item.find('.myimg').attr('src', myimg);
                $item.find('.relName').html(res.name);
                $item.find('.dyn').html(res.productionDynasty);
                $item.find('.level').html(main.getTypeDesc(res.level));
                $item.find('.musName').html(res.museum_name);
                $items.append($item);
                $item.bind("click", function(){
                    //transData = {};
                    searchDet = res;
                    $.mobile.changePage("#searchDetails"); 

                });


            });
            

        }
    }); 


    // //文物等级降序
    $('.lower').bind('click', function() {
    
            transData.sortlev = 'lower';
            transData.start = 1;
            $(".all-item").remove();
            var mainData = main.doSea(transData);
            main.doAjax({

                url:mainData.urlList,
                success:function(ret) { 
                    $("#total_page").text(ret.response.start+"/"+total_page+"页");    

                    ret.response.docs.forEach(function (res) {
                        
                        var $item = $template.clone(true);
                        var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                        $item.find('.myimg').attr('src', myimg);
                        $item.find('.relName').html(res.name);
                        $item.find('.dyn').html(res.productionDynasty);
                        $item.find('.level').text(main.getTypeDesc(res.level));
                        $item.find('.musName').html(res.museum_name);
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

    // //文物等级降序
    $('.upper').bind('click', function() {
    
            transData.sortlev = 'upper';
            transData.start = 1;
            $(".all-item").remove();
            var mainData = main.doSea(transData);
            main.doAjax({

                url:mainData.urlList,
                success:function(ret) { 
                    $("#total_page").text(ret.response.start+"/"+total_page+"页");    

                    ret.response.docs.forEach(function (res) {
                        
                        var $item = $template.clone(true);
                        var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                        $item.find('.myimg').attr('src', myimg);
                        $item.find('.relName').html(res.name);
                        $item.find('.dyn').html(res.productionDynasty);
                        $item.find('.level').text(main.getTypeDesc(res.level));
                        $item.find('.musName').html(res.museum_name);
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



    //下一页跳转
    $('.next_page').bind('click', function() {
        if (!transData.start ) {
            transData.start = 1;
        }
        if (transData.start < total_page) {
            transData.start += 1;
            $(".all-item").remove();
            var mainData = main.doSea(transData);
            main.doAjax({

                url:mainData.urlList,
                success:function(ret) { 
                    $("#total_page").text(ret.response.start+"/"+total_page+"页");    

                    ret.response.docs.forEach(function (res) {
                        
                        var $item = $template.clone(true);
                        var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                        $item.find('.myimg').attr('src', myimg);
                        $item.find('.relName').html(res.name);
                        $item.find('.dyn').html(res.productionDynasty);
                        $item.find('.level').text(main.getTypeDesc(res.level));
                        $item.find('.musName').html(res.museum_name);
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


    });

    //上一页跳转
    $('.last_page').bind('click', function() {
        if (transData.start) {
            if (transData.start > 1) {
                $(".all-item").remove();
                transData.start -= 1;
                var mainData = main.doSea(transData);
                main.doAjax({

                    url:mainData.urlList,
                    success:function(ret) { 
                        $("#total_page").text(ret.response.start+"/"+total_page+"页");    

                        ret.response.docs.forEach(function (res) {
                            
                            var $item = $template.clone(true);
                            var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                            $item.find('.myimg').attr('src', myimg);
                            $item.find('.relName').html(res.name);
                            $item.find('.dyn').text(res.productionDynasty);
                            $item.find('.level').html(main.getTypeDesc(res.level));
                            $item.find('.musName').html(res.museum_name);
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

