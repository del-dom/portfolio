/*A small JS snippet for making the footer stick to the bottom.
referenced from http://foundation.zurb.com/forum/posts/629-sticky-footer
Just need the footer wrapped like <div id="footer"> <!-- Your footer here --> </div>
*/


var stickyFooter = function() {
	var footer = $(".pageFooter");
	var pos = footer.position();
	var height = $(window).height();
	height = height - pos.top;
	height = height - footer.height();
	if (height > 0) {
		footer.css({
			'margin-top': height + 'px'
		});
	}
	footer.removeClass('invisible')
};

stickyFooter()

$(window).resize(function(){
	stickyFooter()
});

