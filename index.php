<?php 
include "view/public/header.php"; 
?>

<?php
//包含各个页面的php
include "view/index/home.php";
include "view/index/complex-search.php";
include "view/index/searchRes.php";

?>


<script>
$.mobile.changePage("#searchRes");//
  try {
    App.restore();
} catch (err) {
    App.load('home');
}

</script>





<?php include "view/public/footer.php"; ?>