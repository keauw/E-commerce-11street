<!doctype html>
<html lang="en-US" dir="ltr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="google" content="notranslate">
  <meta name="language" content="en_US">
  <meta name="robots" content="NOODP">
  <meta name="msnbot" content="NOODP">
  <meta name="googlebot" content="NOODP">
  <meta name="author" content="">
  <title>Making responsive E-commerce</title>
  <meta name="description" content="">
  <meta name="keywords" content="">
  <!-- Viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="HandheldFriendly" content="true">
  <!-- Helps prevent duplicate content issues -->
  <link rel="canonical" href="">
  <?php include 'includes/critical.php' ?>
</head>
<body>
<!-- BEGIN GLOBAL CONTAINER -->
<div class="global-container">
  <!-- BEGIN PAGE CONTAINER -->
  <div class="page-container">
    <div class="wrap">
      <!-- BEGIN MAIN -->
      <main class="main" role="main">
        <div class="container">
          <?php include 'includes/main_heading.php' ?>
          <?php include 'includes/slider_showcase.php' ?>
          <?php include 'includes/banner.php' ?>
          <?php include 'includes/tabs.php' ?>
        </div>
      </main>
      <!-- END MAIN -->
    </div>
  </div>
  <!-- END PAGE CONTAINER -->
</div>
<noscript id="deferred-styles">
  <link href="dist/css/styles.min.css" rel="stylesheet">
</noscript>
<script>
  var loadDeferredStyles = function() {
    var addStylesNode = document.getElementById("deferred-styles");
    var replacement = document.createElement("div");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement)
    addStylesNode.parentElement.removeChild(addStylesNode);
  };
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
  else window.addEventListener('load', loadDeferredStyles);
</script>
<script src="dist/js/app.min.js" async ></script>
</body>
</html>
