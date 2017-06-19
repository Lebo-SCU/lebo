$(document).on("pageshow","#searchDetails",function(){ // 当进入页面二时

	console.log(searchDet);
	var myimg = "http://kydww.sach.gov.cn" + searchDet.img[0];
	$('.pa-avatar').attr('src', myimg);
	$('.sd_relName').text(searchDet.name);
	$('.sd_level').text(main.getTypeDesc(searchDet.level));
	$('.sd_dyn').text(searchDet.productionDynasty);
	if (searchDet.measurement_volumne != null) {
		$('.sd_vol').text(searchDet.measurement_volumne[0]);
	}
	if (searchDet.measurement_size != null) {
		$('.sd_size').text(searchDet.measurement_size[0]);
	}
	if (searchDet.materials != null) {
		$('.sd_mater').text(searchDet.materials);
	}
	$('.sd_typ').text(searchDet.propertyType);
	$('.sd_musName').text(searchDet.museum_name);
	$('.sd_musNum').text(searchDet.number_museum[0]);
	$('.sd_loc').text(searchDet.location);
	$('.sd_sysNum').text(searchDet.number_system[0]);

});
