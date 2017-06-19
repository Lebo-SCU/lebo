
<div data-role="page" id="complex-search">

    <div data-role="header">
        <a href="" data-role="button" data-rel="back">返回</a>
        <h1>这是高级搜索页面</h1>
    </div>

    <div data-role="main" class="ui-content">


        <div class="ui-field-contain">

                <input type="text" name="search" id="search" placeholder="搜索内容..." />

 
                <a class="submit" data-role="button" href="#searchRes" >Go</a>

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
            <input type="radio" name="sort_levell" id="grade" value="level">

        </fieldset>

        <div data-role="collapsible">
            <h1>年代</h1>
            <fieldset data-role="controlgroup">
                <label for="shang">商</label>
                <input type="checkbox" name="dynasty" id="shang" value="商"> 

                <label for="qin">秦</label>
                <input type="checkbox" name="dynasty" id="qin" value="秦"> 

                <label for="han">汉</label>
                <input type="checkbox" name="dynasty" id="han" value="汉"> 

                <label for="sanguo">三国</label>
                <input type="checkbox" name="dynasty" id="sanguo" value="三国"> 

                <label for="tang">唐</label>
                <input type="checkbox" name="dynasty" id="tang" value="唐"> 

                <label for="song">宋</label>
                <input type="checkbox" name="dynasty" id="song" value="宋"> 

                <label for="xixia">西夏</label>
                <input type="checkbox" name="dynasty" id="xixia" value="西夏">

                <label for="ming">明</label>
                <input type="checkbox" name="dynasty" id="ming" value="明"> 

                <label for="qing">清</label>
                <input type="checkbox" name="dynasty" id="qing" value="清"> 

                <label for="zhonghuaminguo">中华民国</label>
                <input type="checkbox" name="dynasty" id="zhonghuaminguo" value="中华民国"> 
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

                <label for="jin">金</label>
                <input type="checkbox" name="materials" id="jin" value="金"> 
                
                <label for="tong">铜</label>
                <input type="checkbox" name="materials" id="tong" value="铜"> 
                
                <label for="tie">铁</label>
                <input type="checkbox" name="materials" id="tie" value="铁"> 
                
                <label for="mianma">棉麻</label>
                <input type="checkbox" name="materials" id="mianma" value="棉麻"> 
                
                <label for="ci">瓷</label>
                <input type="checkbox" name="materials" id="ci" value="瓷"> 
                

            </fieldset>
        </div>







    </div>

           
    <div data-role="footer" data-position="fixed">
        <h1></h1>
    </div>

  </div>


</div>



<script src="js/index/complex-search.js"></script>
