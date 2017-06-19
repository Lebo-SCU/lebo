$(document).on("pageshow","#normal-search",function(){

	
	$('.normal-go').bind('click', function() {
		transData = {};
		if ($('#normal-name').val()) {
			
		transData.qes = $('#normal-name').val();
		}
		console.log(transData);
	});

	nor.showResult = function(str)
        {
            if (str.length==0)
            { 
                document.getElementById("livesearch").innerHTML="";
                document.getElementById("livesearch").style.border="0px";
                return;
            }
            if (window.XMLHttpRequest)
            {// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行
                xmlhttp=new XMLHttpRequest();
            }
            else
            {// IE6, IE5 浏览器执行
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                	//这里是xml取的值
                    // xmlhttp.response.name.foreach(function(res){
                    //     document.getElementById("livesearch").innerHTML=res;
                    //     document.getElementById("livesearch").style.border="1px solid #A5ACB2";
                    // });
                    
                }
            }
            
            xmlhttp.open("GET","http://120.76.144.46:8080/solr/lebojson/select?fl=name&indent=on&q=name:"+str+"~0.8&spellcheck=on&wt=xml",true);
            xmlhttp.send();
        }

});