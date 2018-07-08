window.tools = {
  keys: {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  },
  globalViewportW: '',
  globalViewportH: '',
  globalWW: '',
  isIpadProPortrait: '',
  isIpadProLandscape: '',
  isMobile: '',
  init: function() {

    // document.body.style.cursor = 'none';

    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    if ( iOS ) {
      jQuery('html').addClass('real--ios');
    }

    // $('input, textarea').placeholder();

    $('a[href="#"]').click(function(e) {
      e.preventDefault()
    });

    $('p').each(function() {
      var $this = $(this);
      if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
      $this.remove();
    });

    $("a").hover(function(){
      // Get the current title
      var title = $(this).attr("title");

      // Store it in a temporary attribute
      $(this).attr("tmp_title", title);

      // Set the title to nothing so we don't see the tooltips
      $(this).attr("title","");
    },
    function() { // Fired when we leave the element

      // Retrieve the title from the temporary attribute
      var title = $(this).attr("tmp_title");

      // Return the title to what it was
      $(this).attr("title", title);
    });

  },
  calculateGlobalValues: function() {
    window.tools.globalWW = $(window).width(),
    window.tools.globalViewportW = verge.viewportW(),
    window.tools.globalViewportH = verge.viewportH();
  },
  checkDeviceType: function() {
    if( (verge.viewportW() >= 1024 && verge.viewportH() <= 1366) && (verge.viewportH() >= verge.viewportW()) ) {
      window.tools.isIpadProPortrait = true;
      window.tools.isIpadProLandscape = false;
      // console.log(window.tools.isIpadProPortrait);
    } else if ( (verge.viewportW() >= 1366 && verge.viewportH() <= 1024) && (verge.viewportW() >= verge.viewportH()) ) {
      window.tools.isIpadProPortrait = false;
      window.tools.isIpadProLandscape = true;
      // console.log(window.tools.isIpadProPortrait);
    }

    if (window.Modernizr.tablet || window.Modernizr.mobile) {
      window.tools.isMobile = true;
    } else {
      window.tools.isMobile = false;
    }
  },
  preventDefault: function(e) {
    e = e || window.event,
    e.preventDefault && e.preventDefault(),
    e.returnValue = !1
  },
  preventDefaultForScrollKeys: function(e) {
    if (window.tools.keys[e.keyCode])
    return window.tools.preventDefault(e),
    !1
  },
  disableScroll: function() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", window.tools.preventDefault, !1),
    window.onwheel = window.tools.preventDefault,
    window.onmousewheel = document.onmousewheel = window.tools.preventDefault,
    window.ontouchmove = window.tools.preventDefault,
    document.onkeydown = window.tools.preventDefaultForScrollKeys
  },
  enableScroll: function() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", window.tools.preventDefault, !1),
    window.onmousewheel = document.onmousewheel = null,
    window.onwheel = null,
    window.ontouchmove = null,
    document.onkeydown = null
  }
};

site.ready.push(function(){
  window.tools.init();
  window.tools.calculateGlobalValues();
  window.tools.checkDeviceType();
});
site.resize.push(function(){
  window.tools.calculateGlobalValues();
  window.tools.checkDeviceType();
});
