var $ns_tem = $(document).find('#livesearch li');

$(document).on("pagebeforeshow","#searchRes",function(){ 
    $(document).find('#livesearch li').remove();
});

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
            var seaUrl = "http://120.76.144.46:8080/solr/lebojson/select?fl=name&indent=on&q=name:"+str+"*~0.9&spellcheck=on&wt=json&defType=edismax&mm=100";

            main.doAjax({

                url:seaUrl,
                success:function(ret) { 
                    document.getElementById("livesearch").innerHTML="";
                    
                    ret.response.docs.forEach(function (res) {
                        document.getElementById("livesearch").innerHTML+="<li>"+res.name+"</li>";
                        document.getElementById("livesearch").style.border="1px solid #A5ACB2";

                    });

                    $(document).find('#livesearch li').forEach
                

                }
            }); 
        
        }

});        