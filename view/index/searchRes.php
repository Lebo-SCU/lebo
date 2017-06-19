<link rel="stylesheet" href="css/index/searchRes.css">

<div data-role="page" id="searchRes">

    <div data-role="header" data-position="fixed">
        <a href="" data-role="button" data-rel="back">返回</a>
        <h1>乐博</h1>
    </div>

    <div data-role="main" class="ui-content">
        <table class="table table-striped">
            <tbody>
                <tr>
                    <td class="searchTag"></td>
                </tr>
            </tbody>
        </table>

        <ul class="all-items"  data-role="listview" >

                <li class="all-item list-group-item" >
                    <img class="myimg" src="images/wrong.jpeg" width="280" onerror="main.avatar_error()" />
                    <div class="relName"></div>
                    <div class="container">
                        <div class="row">
                            <div class="details">
                                <div class="dyn col-xs-10"></div>
                                <div class="level col-xs-2"></div>
                                <div class="musName col-xs-12"></div>
                            </div>
                        </div>
                    </div>
                </li>
        </ul>

    </div>
    <div data-role="footer" data-position="fixed"></div>

</div>

<script src="js/index/searchRes.js"></script>