﻿<div data-role="page" id="normal-search">
	<div data-role="header">
		<a href="#home" data-role="button" data-rel="back">返回</a>
		<h1>普通搜索</h1>
	</div>

	<div data-role="main" class="ui-content">
		<form>
			
			<ul data-role="listview" data-inset="true">
				<input type="text" name="normal-name" id="normal-name" size="30" placeholder="搜索内容..." onkeyup="nor.showResult(this.value)">
				<div id="livesearch">
					<li class="nsItem list-group-item">
						<div class="nsName"></div>
					</li>
				</div>
			</ul>
		</form>
		<div class="col-xs-4">
			<a href="#searchRes" data-transition="fade" class="ui-btn ui-btn-inline normal-go">Go</a>
		</div>
	</div>
	<!-- <a href="#searchDetails" data-transition="fade" class="ui-btn ui-btn-inline">搜索</a> -->
	<div data-role="footer" data-position="fixed"></div>
</div>
<script src="js/index/normal-search.js"></script>