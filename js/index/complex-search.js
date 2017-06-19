$(document).on("pageshow","#complex-search",function(){ // 当进入页面二时


	$(".submit").bind("click",function(){
	    searchResData = {};

		searchResData.data = $('#search').val();
		$(document).find('input:radio[name="search_content"]:checked').val();
		switch($(document).find('input:radio[name="search_content"]:checked').val()){
			case "1":
				if (searchResData.data != "") {
					searchResData.relName = searchResData.data;
					break;
				};
			break;

			case "2":
				if (searchResData.data != "") {
					searchResData.musName = searchResData.data;
					break;
				};
			break;

			case "3":
				if (searchResData.data != "") {
					searchResData.loc = searchResData.data;
					break;
				};
			break;

			default :

			break;
		}
		if ($(document).find("input[name='sort']").checked) {
		searchResData.sortlev = $("input[name='sort']").val();

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

