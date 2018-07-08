window.iframeLoad = {
    normalScroll: function(){
        if ( !window.simplified.smoothscrollVersion() ) {
            window.iframeLoad.setImagesAsBackground();
        }
    },
    setImagesAsBackground: function() {

        jQuery('.section-vrtour-360 iframe:not(.is-loaded)').each(function() {

            var iframe = jQuery(this);

            var bg = iframe.closest('.background-container');
            // var container = image.parent();
            var src = iframe.data('src');
            if ( verge.inViewport( iframe ) && src != undefined ) {
                // console.log(image);
                // container.css({backgroundImage:'url("'+image.attr('data-src')+'")'});

                iframe.attr('src', src);

                // remove attr
                iframe.removeAttr('data-src');
                // image.hide();
                iframe.addClass('is-loaded');
                iframe.one('load', function() {
                    iframe.addClass('is-visible');
                    bg.addClass('is-hide');
                });
            }
        });
    }
};
site.ready.push(function() {
    window.iframeLoad.setImagesAsBackground();
});
site.load.push(function() {
    window.iframeLoad.normalScroll();
});

site.scroll.push(function() {
    window.iframeLoad.normalScroll();
});
