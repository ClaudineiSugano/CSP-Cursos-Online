;(function ($) {
	var $el_form_lp_woo_add_course_to_cart;

	$.fn._add_course_to_cart = function () {
		if (!$el_form_lp_woo_add_course_to_cart.length) {
			return;
		}

		$el_form_lp_woo_add_course_to_cart.submit(function (event) {
			// = $(this);
			var el_btn_add_course_to_cart_woo = $el_form_lp_woo_add_course_to_cart.find('.btn-add-course-to-cart');

			var data = $(this).serialize();
			data += '&action=lpWooAddCourseToCart';

			$.ajax({
				url       : localize_lp_woo_js.url_ajax,// Do not cache this page
				data      : data,
				method    : 'post',
				dataType  : 'json',
				success   : function (rs) {
					if (rs.code == 1) {
						if (undefined != rs.redirect_to && rs.redirect_to != '') {
							// window.location = rs.redirect_to;
							window.location.replace(rs.redirect_to);
						} else {
							$el_form_lp_woo_add_course_to_cart.closest('.wrap-btn-add-course-to-cart').append(rs.button_view_cart);
							$el_form_lp_woo_add_course_to_cart.remove();
						}
					} else {
						alert(rs.message);
					}
				},
				beforeSend: function () {
					el_btn_add_course_to_cart_woo.append('<span class="fa fa-spinner"></span>');
				},
				complete  : function () {
					el_btn_add_course_to_cart_woo.find('span').removeClass('fa fa-spinner');
				},
				error     : function (e) {
					console.log(e);
				}
			});
			return false;
		});
	};

	$(document).ready(function () {
		$el_form_lp_woo_add_course_to_cart = $('form[name=form-add-course-to-cart]');

		$.fn._add_course_to_cart();
	});
})(jQuery);
