var main = {};
var searchResData={};
var transData ={};
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


main.doSea = function(searchResData) {
        var data = {};
        console.log(searchResData);
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
        console.log(urlList);
        main.doAjax({

            url:urlList,
            success:function(ret) { 

                data['data'] = ret.response.docs;
                data['searchTag'] = searchTag;

            }
        }); 
        
        return data;
        
    }