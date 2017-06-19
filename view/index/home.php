<link rel="stylesheet" href="css/index/home.css">
<div data-role="page" id="home">
	<div data-role="header">
		<h1>乐博Lebo</h1>
	</div>

	<div data-role="main" class="ui-content">
		<div class="homeBg">
			<img class="homeBgImg" src="images/bg.png" width="200" align="center">
		</div>
		<input type="search" name="homeSer" id="homeSer" placeholder="搜索内容...">

		<h4> 
			<a class="daohang" id="taoqi" href="#searchRes">
				<span class="label label-info">陶器</span>
			</a>
			<a class="daohang" id="shufa" href="#searchRes">
				<span class="label label-success">书法</span>
			</a>
			<a class="daohang" id="jiagu" href="#searchRes">
				<span class="label label-warning">甲骨</span>
			</a>
		</h4>


	
	</div>

	<div data-role="footer" style="text-align:center;">
    	<div data-role="controlgroup" data-type="horizontal">
      		<a href="#searchNav" class="ui-btn ui-corner-all ui-shadow ui-icon-navigation ui-btn-icon-left" data-transition="fade">搜索导航</a>
			<a href="#complex-search" class="ui-btn ui-corner-all ui-shadow ui-icon-search ui-btn-icon-left"  data-transition="fade">高级搜索</a>  
  		</div>
  	</div>

</div>
<script src="js/index/home.js"></script>
