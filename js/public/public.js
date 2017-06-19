var main = {};
var searchResData={};
var transData ={};
var searchDet = {};
main.clickme =function(){
	alert("hey");
}

main.doAjax = function(params) {
	$.ajax({
    	url:params.url,
    	type:'GET',
    	dataType:'json',
		success:function(response) {
			console.log(response);
			console.log(params.url);

			//返回成功
			if (response.responseHeader) {
				//如果有回调则执行回调
				if (params.success) {

                    main.doLighting(response);
					params.success(response);
				}
			}
			//返回失败
			else {
				console.log(response);
				//如果有回调则执行回调
				if (params.error) {
					params.error(response);
				}
				//没有则直接弹出错误信息
				else {
					alert(response.msg);
				}
			}
		},
		error:function(response) {
			console.log(response);
			if (params.error) {
				params.error(response);
			}
		}
    });
}

main.avatar_error = function() {
	var img = event.srcElement; 
	img.src = "images/wrong.jpeg"
}

main.getTypeDesc = function(type) {
	type = parseInt(type);
	switch (type) {
		case 1:
			return '[一级]';
		case 2:
			return '[二级]';
		case 3:
			return '[三级]';
		
		default:
			return '[未定级]';
	}
}


main.doLighting =function(response) {
    if (response.highlighting != undefined) {
        
        console.log(response.highlighting[n]);

        for (var i = 0; i < response.response.docs.length; i++) {

            if (response.highlighting.(response.response.docs[i].id) != undefined){

                if (response.highlighting.(response.response.docs[i].id).name != undefined) {
                    response.response.docs[i].name = response.highlighting.(response.response.docs[i].id).name;
                }
            }

        }
    }

}




main.doSea = function(searchResData) {
        var data = {};
        console.log(searchResData);
        var searchTag = "首页>搜索";
        var urlList = "http://120.76.144.46:8080/solr/lebojson/select?indent=on&wt=json";
        
        if(searchResData.qes != undefined){
            searchTag = searchTag + '>' + searchResData.qes;
            urlList = urlList + "&q=" + searchResData.qes;

        }else{
            urlList = urlList + "&q=*:*";
        }
        if(searchResData.lab != undefined){
            searchTag = searchTag + '>' + searchResData.lab;
            urlList = urlList + "&fq=" + searchResData.labTy + ":" + searchResData.lab;
        }
        if(searchResData.loc != undefined){
            searchTag = searchTag + '>行政区划：' + searchResData.loc;
            urlList = urlList + "&fq=location:" + searchResData.loc;
        }
        if(searchResData.relName != undefined){
            searchTag = searchTag + '>文物名：' + searchResData.relName;
            urlList = urlList + "&fq=name:" + searchResData.relName;
        }
        if(searchResData.musName != undefined){
            searchTag = searchTag + '>博物馆名：' + searchResData.musName;
            urlList = urlList + "&fq=museum_name:" + searchResData.musName;
        }
        if(searchResData.dyn != undefined){
            searchResData.dyn.forEach(function(dyn){
                searchTag = searchTag + '>' + dyn;
                urlList = urlList + "&fq=productionDynasty:" + dyn;
            });
        }
        if(searchResData.level != undefined){
            searchTag = searchTag + '>' + searchResData.level;
            urlList = urlList + "&fq=level:" + searchResData.level;
        }
        if(searchResData.mater != undefined){
            searchResData.mater.forEach(function(mater){
                searchTag = searchTag + '>' + mater;
                urlList = urlList + "&fq=materials:" + mater;
            });
            
        }
        // if(searchResData.typ[0] != undefined){
        //     searchResData.typ.forEach(function(typ){
        //         searchTag = searchTag + '>' + typ;
        //         urlList = urlList + "&fq=propertyType:" + typ;
        //     });
        // }
        if(searchResData.sortlev!= undefined){
            searchTag = searchTag + '>' + searchResData.sortlev;
            urlList = urlList + "&sort=" + searchResData.sortlev+" asc";
        }
        if(searchResData.start != undefined){
            urlList = urlList + "&start=" + searchResData.start;
        }
        console.log(urlList);
        
        data['urlList'] = urlList;
        data['searchTag'] = searchTag;
        
        return data;
        
    }