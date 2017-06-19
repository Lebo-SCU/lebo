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
			<a class="homeTag" id="taoqi" href="#searchRes">
				<span class="label label-info">陶器</span>
			</a>
			<a class="homeTag" id="shufa" href="#searchRes">
				<span class="label label-success">书法</span>
			</a>
			<a class="homeTag" id="jiagu" href="#searchRes">
				<span class="label label-warning">甲骨</span>
			</a>
			<a class="homeTag" id="relic" href="#searchRes">
				<span class="label label-danger">一级文物</span>
			</a>
		</h4>
		<h4>
			<a class="homeTag" id="tong" href="#searchRes">
				<span class="label label-danger">青铜方鼎</span>
			</a>
			<a class="homeTag" id="poem" href="#searchRes">
				<span class="label label-info">唐诗宋词</span>
			</a>
		</h4>


		<ul class="all-items"  data-role="listview"  data-inset="true">
            <li class="all-item list-group-item" >
                <img class="myimg" src="images/wrong.jpeg" width="280" onerror="main.avatar_error()" />
                <div class="relName"></div>
                <div class="container">
                    <div class="row">
                        <div class="details">
                            <div class="dyn col-xs-10"></div>
                            <div class="level col-xs-2"></div>
                            <div class="musName col-xs-12" ></div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>


	
	</div>

	<div data-role="footer" style="text-align:center;" data-position="fixed">
    	<div data-role="controlgroup" data-type="horizontal">
      		<a href="#searchNav" class="ui-btn ui-corner-all ui-shadow ui-icon-navigation ui-btn-icon-left" data-transition="fade">搜索导航</a>
			<a href="#complex-search" class="ui-btn ui-corner-all ui-shadow ui-icon-search ui-btn-icon-left"  data-transition="fade">高级搜索</a>  
  		</div>
  	</div>

</div>
<script src="js/index/home.js"></script>
