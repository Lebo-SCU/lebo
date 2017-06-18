

$(".submit").bind("click",function(){
    searchResData = {};

	searchResData.qes = $("input[name='search']").val();
	switch($("input[name='search_content']").val()){
		case "1":
			if (searchResData.qes == "") {searchResData.qes="*"};
			searchResData.qes = "name:"+searchResData.qes;
		break;

		case "2":
			if (searchResData.qes == "") {searchResData.qes="*"};
			searchResData.qes = "museum_name:"+searchResData.qes;
		break;

		case "3":
			if (searchResData.qes == "") {searchResData.qes="*"};
			searchResData.qes = "location:"+searchResData.qes;
		break;

		default :

		break;
	}
	if ($("input[name='sort']").checked) {
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
});


$('button').bind('click', function() {
});