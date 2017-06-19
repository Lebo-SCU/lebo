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

$(document).on("pagebeforeshow","#searchRes",function(){ // 当进入页面二时
                    $("li").remove();
        });


$(document).on("pageshow","#searchRes",function(){

        var mainData = main.doSea(transData);
        $(document).find('.searchTag').text(mainData.searchTag);

        // $(document).find('.all-item').remove();

        main.doAjax({

            url:mainData.urlList,
            success:function(ret) { 

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
                        //这里需要一个页面跳转的方法
                        // $(document).on("pagebeforeshow", "#searchDetails", function(){
                        //     searchDet = res;
                        // });
                    });


                });
                

            }
        }); 



    $('button').bind('click', function() {
        $.mobile.changePage("#complex-search", "slideup");
        console.log(transData);
    });
});

