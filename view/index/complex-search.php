
<div data-role="page" id="complex-search">

    <div data-role="header">
        <a href="" data-role="button" data-rel="back">返回</a>
        <h1>这是高级搜索页面</h1>
    </div>

    <div data-role="main" class="ui-content">


        <div class="ui-field-contain">
            <div class="col-xs-10">
                <input type="text" name="search" id="search" placeholder="搜索内容..." />
            </div>
            <div class="col-xs-2">
                <a class="submit" data-role="button" href="#searchRes" >Go</a>
                <!-- <button class="submit" >Go</button> -->
            </div>

        </div>

        <fieldset data-role="controlgroup" data-type="horizontal">
            <legend>搜索</legend>
            <label for="wenwu">文物</label>
            <input type="radio" name="search_content" id="wenwu" value=1>
            <label for="bowuguan">博物馆</label>
            <input type="radio" name="search_content" id="bowuguan" value=2>
            <label for="didian">地点</label>
            <input type="radio" name="search_content" id="didian" value=3>  
        </fieldset>

        <fieldset data-role="controlgroup" data-type="horizontal">
            <legend>排序方式</legend>
            <label for="grade">文物等级</label>
            <input type="checkbox" name="sort" id="grade" value="level">

        </fieldset>

        <div data-role="collapsible">
            <h1>年代</h1>
            <fieldset data-role="controlgroup">
                <label for="tang">唐</label>
                <input type="checkbox" name="dynasty" id="tang" value="唐">
                <label for="xixia">西夏</label>
                <input type="checkbox" name="dynasty" id="xixia" value="西夏">
                <label for="ming">明</label>
                <input type="checkbox" name="dynasty" id="ming" value="明"> 
            </fieldset>
        </div>

        <div data-role="collapsible">
            <h1>材质</h1>
            <fieldset data-role="controlgroup">
                <label for="mu">木</label>
                <input type="checkbox" name="materials" id="mu" value="木">
                <label for="zhi">纸</label>
                <input type="checkbox" name="materials" id="zhi" value="纸">
                <label for="yin">银</label>
                <input type="checkbox" name="materials" id="yin" value="银"> 
            </fieldset>
        </div>







    </div>

           
    <div data-role="footer" data-position="fixed">
        <h1>底部文本</h1>
    </div>

  </div>


</div>



<script src="js/index/complex-search.js"></script>
