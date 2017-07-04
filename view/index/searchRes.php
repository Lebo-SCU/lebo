<link rel="stylesheet" href="css/index/searchRes.css">

<div data-role="page" id="searchRes">

    <div data-role="header" data-position="inline">
        <a href="" data-role="button" data-rel="back">返回</a>
        <h1>乐博</h1>
    </div>

    <div data-role="main" class="ui-content">
        <h5 class="searchTag"></h5>

        <!-- 这里是筛选分面页面的部分,需要实现根据搜索结果动态改变筛选栏目,并且根据选中的筛选项目改变搜索结果和面包屑 -->
        <div data-role="panel" id="myPanel" data-display="overlay" data-position-fixed="true"> 
            <h2>分面</h2>
            <h6>软件层面还未实现分面后结果再次搜索,但是solr层面的分面功能已经实现;</h6>
            <div data-role="collapsible" data-mini="true" class="level-facet" >
                <h1>文物等级</h1>
                <fieldset data-role="controlgroup" class="level-list">
                    <div class="sr-level-list">
                    <label class="levle-label" for="blue">bluee<span class="ui-li-count">7</span></label>
                    <input type="checkbox" class="level-checkbox" name="sr-level" id="blue" value="blue">
                        
                    </div>

                </fieldset>
            </div>
            <div data-role="collapsible" data-mini="true" class="materials-facet" >
                <h1>材质</h1>
                <fieldset data-role="controlgroup" class="materials-list">
                    <div class="sr-materials-list">
                        <label class="materials-label" for="red">red<span class="ui-li-count">7</span></label>
                        <input type="checkbox" class="materials-checkbox" name="sr-materials" id="red" value="red">
                    </div>
                </fieldset>
            </div>
            <button class="sr-submit">确定</button>
        </div>

        <!-- 导航栏 -->
        <div data-role="navbar">
            <ul>
                <li><a href="#myPanel" data-icon="plus" class="sr-facet">筛选</a></li>
                <li><a href="#" class="upper" data-icon="arrow-d">按等级降序</a></li>
                <li><a href="#" class="lower" data-icon="arrow-u">按等级升序</a></li>
            </ul>
        </div>
        <ul class="all-items"  data-role="listview"  data-inset="true">
                <li class="all-item list-group-item" >
                    <img class="myimg" src="images/wrong.jpeg" width="280" onerror="main.avatar_error()" />
                    <div class="relName" style="text-overflow:ellipsis;"></div>
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

    <div class="col-xs-4">
        <a data-role="button" class="last_page">上一页</a>
    </div>
    <div class="col-xs-4">
        <h4 class="text-center" id="total_page"></h4>
    </div>
    
    <div class="col-xs-4">
        <a data-role="button" class="next_page">下一页</a>
    </div>      
    <div data-role="footer" data-position="inline">


    </div>
</div>

<script src="js/index/searchRes.js"></script>