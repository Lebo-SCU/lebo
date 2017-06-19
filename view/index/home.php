<link rel="stylesheet" href="css/index/home.css">
<div data-role="page" id="home">
	<div data-role="header">
		<h1>这是乐博主页</h1>
	</div>

	<div data-role="main" class="ui-content">
	<div class="homeBg">
	<img class="homeBgImg" src="images/bg.png" width="200" align="center">
	<!-- <h1><p class="text-center">乐博</p></h1>
	<h3><p class="text-center">Lebo</p></h3> -->
	</div>
	<input type="search" name="homeSer" id="homeSer" placeholder="搜索内容...">

	<div class="col-xs-10" >
		<a class="daohang" id="taoqi" href="#searchRes">陶器</a>
		<a class="daohang" id="shufa" href="#searchRes">书法</a>
		<a class="daohang" id="jiagu" href="#searchRes">甲骨</a>
	</div>
	<div class="col-xs-2">
		<a href="#complex-search" data-transition="fade" class="ui-btn ui-btn-inline">高级</a>
	</div>
	<div class="col-xs-2">
		<a href="#searchNav" data-transition="fade" class="ui-btn ui-btn-inline">导航</a>
	</div>
	</div>
	<!-- <a href="#searchDetails" data-transition="fade" class="ui-btn ui-btn-inline">搜索</a> -->
	<div data-role="footer" data-position="fixed"></div>
</div>
<script src="js/index/home.js"></script>
