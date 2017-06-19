$(document).on("pageshow","#searchDetails",function(){ // 当进入页面二时

	console.log(transData);
	var myimg = "http://kydww.sach.gov.cn" + transData.img[0];
	$('.pa-avatar').attr('src', myimg);
	$('.sd_relName').text(transData.name);
	$('.sd_level').text(main.getTypeDesc(transData.level));
	$('.sd_dyn').text(transData.productionDynasty);
	if (transData.measurement_volumne != null) {
		$('.sd_vol').text(transData.measurement_volumne[0]);
	}
	if (transData.measurement_size != null) {
		$('.sd_size').text(transData.measurement_size[0]);
	}
	if (transData.materials != null) {
		$('.sd_mater').text(transData.materials);
	}
	$('.sd_typ').text(transData.propertyType);
	$('.sd_musName').text(transData.museum_name);
	$('.sd_musNum').text(transData.number_museum[0]);
	$('.sd_loc').text(transData.location);
	$('.sd_sysNum').text(transData.number_system[0]);

});
