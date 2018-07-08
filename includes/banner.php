<?php
$data = [
  'theme' => 'grey',
  'image_url' => 'dist/images/banner.jpg',
  'alt' => 'uk trendy store',
  'title' => 'UK trendy store <br> <strong>2014 Fw collection</strong>',
  'sub_title' => 'Asos',
  'description' => '<p>Our Favorites Daily Look</p>',
  'link_url' => '#'
]
?>
<section class="section banner-section" data-theme-color="<?php echo $data['theme']?>">
  <div class="section-outer">
    <div class="section-inner">
      <a href="<?php echo $data['link_url']?>"></a>
      <div class="section-layout" data-layout-desktop-column>
        <div class="content-box">
          <h4 class="sub-title"><?php echo $data['sub_title'] ?></h4>
          <h3 class="title"><?php echo $data['title'] ?></h3>
          <div class="description">
            <?php echo $data['description'] ?>
          </div>
        </div>
        <div class="image-box">
          <div class="figure ratio-banner">
            <div class="figure-outer">
              <div class="figure-image">
                <img data-src="<?php echo $data['image_url']?>" alt="<?php echo $data['alt'] ?>" class="js-imageload">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>