window.imageload = {
    normalScroll: function () {
       window.imageload.setImagesAsBackground();
    },
    setImagesAsBackground: function () {
        jQuery('.js-imageload:not(.is--loaded)').each(function () {
            var image = jQuery(this);
            var container = image.parent();
            var src = image.data('src');

            container.addClass('as--parent');
            if (verge.inViewport(container) && src != undefined) {
                container.css({
                    backgroundImage: 'url("' + image.attr('data-src') + '")'
                });

                image.attr('src', src);
                image.hide();
                image.addClass('is--loaded');
                image.one('load', function () {
                    container.addClass('is--visible');
                    container.addClass('image--loaded');

                    setTimeout(function () {
                        container.addClass('image--loaded--done');
                    }, 2000);
                });
            }
        });
      jQuery('[data-slider]:not(.is--loaded)').each(function () {
        var section = jQuery(this);
        var img = section.find('.as__background');
        var parent = img.parent();
        parent.addClass('as--parent');

        if (verge.inViewport(section)) {
          img.each(function () {
            var self = jQuery(this);
            var src = self.data('src');
            var container = self.parent();

            container.css({
              backgroundImage: 'url("' + self.attr('data-src') + '")'
            });

            self.attr('src', src);
            self.hide();
            section.addClass('is--loaded');
            self.one('load', function () {
              container.addClass('is--visible');
              container.addClass('image--loaded');
              setTimeout(function () {
                container.addClass('image--loaded--done');
              }, 1000);
            });

          });
        }
      });
    }
};
site.ready.push(function () {
    window.imageload.setImagesAsBackground();
});
site.scroll.push(function () {
    window.imageload.normalScroll();
});