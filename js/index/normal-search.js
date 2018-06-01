var $nsTemp = $(document).find('#livesearch .nsItem');
var $nsItems = $(document).find('#livesearch');

$(document).on("pagebeforeshow","#normal-search",function(){ 
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
            $(document).find('#livesearch li').remove();
            if(str != ""){
                  var seaUrl = "http://120.76.144.46:8080/solr/lebojson/select?fl=name&indent=on&q=name:"+str+"*~0.9&spellcheck=on&wt=json&defType=edismax&mm=3&rows=6";

            main.doAjax({

                url:seaUrl,
                success:function(ret) { 
                    
                    ret.response.docs.forEach(function (res) {
                        
                        var $nsItem = $nsTemp.clone(true);
                        $nsItem.find('.nsName').text(res.name);
                        $nsItems.append($nsItem);
                        $nsItem.bind("click", function(){
                            transData = {};
                            transData.lab = res.name;
                            transData.labTy = "name";
                            $.mobile.changePage("#searchRes"); 
                        });
                        document.getElementById("livesearch").style.border="1px solid #A5ACB2";

                    });

                    
                }
            }); 
            }

        
        }

});        