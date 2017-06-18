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

    function dosearch(searchResData) {

        var searchTag = "首页>搜索";
        var urlList = "http://120.76.144.46:8080/solr/lebojson/select?indent=on&wt=json";
        if(searchResData.qes != null){
            searchTag = searchTag + '>' + searchResData.qes;
            urlList = urlList + "&q=" + searchResData.qes;
        }else{
            urlList = urlList + "&q=*:*";
        }
        if(searchResData.lab != null){
            searchTag = searchTag + '>' + searchResData.lab;
            urlList = urlList + "&fq=" + searchResData.labTy + ":" + searchResData.lab;
        }
        if(searchResData.loc != null){
            searchTag = searchTag + '>' + searchResData.loc;
            urlList = urlList + "&fq=location:" + searchResData.loc;
        }
        if(searchResData.relName != null){
            searchTag = searchTag + '>' + searchResData.relName;
            urlList = urlList + "&fq=name:" + searchResData.relName;
        }
        if(searchResData.musName != null){
            searchTag = searchTag + '>' + searchResData.musName;
            urlList = urlList + "&fq=museum_name:" + searchResData.musName;
        }
        if(searchResData.dyn != null){
            searchTag = searchTag + '>' + searchResData.dyn;
            urlList = urlList + "&fq=productionDynasty:" + searchResData.dyn;
        }
        if(searchResData.level != null){
            searchTag = searchTag + '>' + searchResData.level;
            urlList = urlList + "&fq=level:" + searchResData.level;
        }
        if(searchResData.mater != null){
            searchTag = searchTag + '>' + searchResData.mater;
            urlList = urlList + "&fq=materials:" + searchResData.mater;
        }
        if(searchResData.typ != null){
            searchTag = searchTag + '>' + searchResData.typ;
            urlList = urlList + "&fq=propertyType:" + searchResData.typ;
        }
        if(searchResData.sort!= null){
            searchTag = searchTag + '>' + searchResData.sortlev;
            urlList = urlList + "&sort=" + searchResData.sort+" asc";
        }

        // $(document).find('.searchTag').text(searchTag);

        // var $template = $(document).find('.all-item');
        // var $items = $(document).find('.all-items');

        //     $(document).find('.all-item').remove();

        main.doAjax({

            url:urlList,
            success:function(ret) { 

                var data = {};
                data['data'] = ret.response.docs;
                data['searchTag'] = searchTag;
                return data;

                // ret.response.docs.forEach(function (res) {
                    
                //     var $item = $template.clone(true);
                //     var myimg = "http://kydww.sach.gov.cn" + res.img[0];
                //     $item.find('.myimg').attr('src', myimg);
                //     $item.find('.relName').text(res.name);
                //     $item.find('.dyn').text(res.productionDynasty);
                //     $item.find('.level').text(main.getTypeDesc(res.level));
                //     $item.find('.musName').text(res.museum_name);
    	           //  $items.append($item);

                // });
            }
        }); 
    }
