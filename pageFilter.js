(function($){
  $.fn.pageFilter = function(tofilter){
    this.on('input', function (e) { //Add page filters to all selected pages.
      $(tofilter||'.toFilter').children().hide().filter(function (index, a) {
        return $(a).html().toLowerCase().indexOf(e.target.value.toLowerCase()) + 1;
      }).show();
    }).trigger('input');
  };
})(jQuery);
