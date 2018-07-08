<?php
$data = [
  'section_title' => 'Best Store',
  'description' => '<p>This is a recommended store in each category recommended by xxx.</p>',
  'image_url' => 'dist/images/main.jpg',
  'alt' => 'CHLOE SEVIGNY',
  'name' => 'CHLOE SEVIGNY',
  'title' => 'Fashion',
  'company' => 'FRENCH CHIC A.T. Cornor',
  'object_data' => [
    [
      'image_url' => 'dist/images/skinny-01.jpg',
      'alt' => 'All That Skinny Jeans',
      'product_name' => 'All That Skinny Jeans / Denim Shorts',
      'old_price' => '565.00',
      'new_price' => '465.00',
      'discount' => '15%',
      'link_url' => '#'
    ],
    [
      'image_url' => 'dist/images/skinny-02.jpg',
      'alt' => 'All That Skinny Jeans',
      'product_name' => 'All That Skinny Jeans / Denim Shorts',
      'old_price' => '565.00',
      'new_price' => '465.00',
      'discount' => '15%',
      'link_url' => '#'
    ],
    [
      'image_url' => 'dist/images/skinny-03.jpg',
      'alt' => 'All That Skinny Jeans',
      'product_name' => 'All That Skinny Jeans / Denim Shorts',
      'old_price' => '565.00',
      'new_price' => '465.00',
      'discount' => '15%',
      'link_url' => '#'
    ],
    [
      'image_url' => 'dist/images/skinny-01.jpg',
      'alt' => 'All That Skinny Jeans',
      'product_name' => 'All That Skinny Jeans / Denim Shorts',
      'old_price' => '565.00',
      'new_price' => '465.00',
      'discount' => '15%',
      'link_url' => '#'
    ],
    [
      'image_url' => 'dist/images/skinny-02.jpg',
      'alt' => 'All That Skinny Jeans',
      'product_name' => 'All That Skinny Jeans / Denim Shorts',
      'old_price' => '565.00',
      'new_price' => '465.00',
      'discount' => '15%',
      'link_url' => '#'
    ],
    [
      'image_url' => 'dist/images/skinny-03.jpg',
      'alt' => 'All That Skinny Jeans',
      'product_name' => 'All That Skinny Jeans / Denim Shorts',
      'old_price' => '565.00',
      'new_price' => '465.00',
      'discount' => '15%',
      'link_url' => '#'
    ]
  ]
]
?>

<section class="section slider-showcase-section">
  <div class="section-outer">
    <div class="section-inner">
      <div class="section-title">
        <h2><?php echo $data['section_title']?></h2>
        <?php if(!empty($data['description']) && isset($data['description'])) { ?>
          <div class="description"><?php echo $data['description']?></div>
        <?php } ?>
      </div>
      <div class="section-layout" data-layout-desktop-column>
        <div class="main-box">
          <div class="title"><h3><?php echo $data['title']?></h3></div>
          <div class="figure ratio--case" data-image-zoom>
            <div class="figure-outer">
              <div class="figure-image">
                <img data-src="<?php echo $data['image_url']?>" alt="<?php echo $value['alt']?>" class="js-imageload">
              </div>
              <div class="overlay-title">
                <div class="info">
                  <h3 class="name"><?php echo $data['name']?></h3>
                  <span><?php echo $data['company']?></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-box">
          <div class="js-slider">
            <?php foreach ($data['object_data'] as $key => $value) { ?>
            <div class="item thumb" data-image-zoom>
              <div class="image-box">
                <div class="figure ratio--case">
                  <div class="figure-outer">
                    <a href="<?php echo $value['link_url']?>" class="figure-image">
                      <img src="<?php echo $value['image_url']?>" alt="<?php echo $value['alt']?>" class="as__background">
                    </a>
                  </div>
                </div>
              </div>
              <div class="content-box">
                <h3 class="title"><a href="<?php echo $value['link_url']?>"><?php echo $value['product_name']?></a></h3>
                <div class="price">
                  <del class="old-price del"><span class="currency">$</span><?php echo $value['old_price'] ?></del>
                  <span class="discount"><?php echo $value['discount'] ?> OFF</span>
                </div>
                <div class="price">
                  <div class="new-price"><span class="currency">$</span><?php echo $value['new_price'] ?></div>
                </div>
              </div>
            </div>
            <?php } ?>
          </div>
          <div class="arrow-nav-wrapper">
            <div class="arrow-nav arrow-prev">
              <span class="icon-arrow-prev"></span>
            </div>
            <div class="arrow-nav arrow-next">
              <span class="icon-arrow-next"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
