$(document).on("pageshow","#complex-search",function(){ // 当进入页面二时


	$(".submit").bind("click",function(){
	    searchResData = {};

		searchResData.qes = $('#search').val();
		$(document).find('input:radio[name="search_content"]:checked').val();
		switch($(document).find('input:radio[name="search_content"]:checked').val()){
			case "1":
				if (searchResData.qes != "") {
					searchResData.relName = searchResData.qes;
					searchResData.qes = null;
					break;
				};
			break;

			case "2":
				if (searchResData.qes != "") {
					searchResData.musName = searchResData.qes;
					break;
				};
			break;

			case "3":
				if (searchResData.qes != "") {
					searchResData.loc = searchResData.qes;
					break;
				};
			break;

			default :

			break;
		}
		if ($(document).find('input:radio[name="sort_levell"]:checked').val()) {
		searchResData.sortlev = $("input[name='sort_levell']").val();

		}

		var obj=document.getElementsByName('dynasty');   
	  	var dyns =new Array();
	  	for(var i=0; i<obj.length; i++){    
	    	if(obj[i].checked)  dyns.push(obj[i].value);  
	  	} 
		searchResData.dyn = dyns;

	    obj=document.getElementsByName('materials');   
	  	var mater =new Array();
	  	for(var i=0; i<obj.length; i++){    
	    	if(obj[i].checked)  mater.push(obj[i].value);  
	  	} 
		searchResData.mater = mater;
		transData = searchResData;
		console.log(searchResData);
	});


	$('button').bind('click', function() {
	});


});

