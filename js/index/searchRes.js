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
    var searchTag = main.doSea(transData).searchTag;
    var searchResData = main.doSea(transData).data;

    $(document).find('.searchTag').text(searchTag);

    var $template = $(document).find('.all-item');
    var $items = $(document).find('.all-items');

    $(document).find('.all-item').remove();

    searchResData.forEach(function (res) {
                    
        var $item = $template.clone(true);
        var myimg = "http://kydww.sach.gov.cn" + res.img[0];
        $item.find('.myimg').attr('src', myimg);
        $item.find('.relName').text(res.name);
        $item.find('.dyn').text(res.productionDynasty);
        $item.find('.level').text(main.getTypeDesc(res.level));
        $item.find('.musName').text(res.museum_name);
        $items.append($item);

    });

    $('button').bind('click', function() {
        console.log(transData);
    });
