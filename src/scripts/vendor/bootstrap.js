/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

require('./bootstrap/transition.js');
require('./bootstrap/alert.js');
require('./bootstrap/button.js');
require('./bootstrap/carousel.js');
require('./bootstrap/collapse.js');
require('./bootstrap/dropdown.js');
require('./bootstrap/modal.js');
require('./bootstrap/tooltip.js');
require('./bootstrap/popover.js');
require('./bootstrap/scrollspy.js');
require('./bootstrap/tab.js');
require('./bootstrap/affix.js');