<?php 
include "view/public/header.php"; 
?>

<div data-role="page" id="index">

</div>
<script src="js/index/index.js"></script>
<?php
//包含各个页面的php
include "view/index/home.php";
include "view/index/complex-search.php";
include "view/index/normal-search.php";
include "view/index/searchRes.php";
include "view/index/searchDetails.php";
include "view/index/searchDetailsForHome.php";
include "view/index/searchNav.php";
?>


<!-- <script>
$.mobile.changePage("#searchRes");//
  try {
    App.restore();
} catch (err) {
    App.load('home');
}

</script> -->





<?php include "view/public/footer.php"; ?>