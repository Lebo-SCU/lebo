<link rel="stylesheet" href="css/index/searchRes.css">

<div data-role="page" id="searchRes">

    <div data-role="header" data-position="inline">
        <a href="" data-role="button" data-rel="back">返回</a>
        <h1>乐博</h1>
    </div>

    <div data-role="main" class="ui-content">
        <h5 class="searchTag"></h5>

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