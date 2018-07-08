<?php
$data = [
  'title' => 'Store Home',
  'link_url' => '#',
  'favorite' => 'Go! Favorite store',
]
?>

<section class="section main-heading-section">
  <div class="section-outer">
    <div class="section-inner">
      <div class="section-layout" data-layout-column>
          <h1 class="title"><span class="icon-home"></span><?php echo $data['title']?></h1>
        <div class="button">
          <a href="<?php echo $data['link_url']?>" class="btn btn-favorite"><span class="icon-like"></span><span class="text"><?php echo $data['favorite']?></span></a>
        </div>
      </div>
    </div>
  </div>
</section>