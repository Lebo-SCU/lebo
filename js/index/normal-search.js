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
            var seaUrl = "http://120.76.144.46:8080/solr/lebojson/select?fl=name&indent=on&q=name:"+str+"~0.8&spellcheck=on&wt=json";

            main.doAjax({

                url:seaUrl,
                success:function(ret) { 
                    
                    ret.response.docs.forEach(function (res) {
                        document.getElementById("livesearch").innerHTML+="<li>"+res.name+"</li>";
                        document.getElementById("livesearch").style.border="1px solid #A5ACB2";
                    });
                

                }
            }); 
        
        }

});        