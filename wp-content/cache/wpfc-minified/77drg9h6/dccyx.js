// source --> https://cspcursos.online/wp-content/plugins/learnpress-woo-payment/assets/script.js 
;jQuery(function ($) {
    function get_cart_option() {
        return LP_WooCommerce_Payment.woocommerce_cart_option;
    }

    $('form.purchase-course').submit(function (event) {
    	event.preventDefault();
        var $form = $(this),
            $button = $('button.purchase-button, button.button-add-to-cart , button.button-purchase-course', this),
            $view_cart = $('.view-cart-button', this),
            $clicked = $form.find('input:focus, button:focus'),
            addToCart = $clicked.hasClass('button-add-to-cart'),
            errorHandler = function () {
                $button.removeClass('loading');
                $('body, html').css('overflow', 'visible');
            };
            
        $button.removeClass('added').addClass('loading');
        $form.find('#learn-press-wc-message, input[name="purchase-course"]').remove();

        var ajax_url = '';
        if ($form.find('input[name="course_url"]').length) {
            ajax_url = $form.find('input[name="course_url"]').val();
            var concat_sign = '&';
            if (/\?/.test(ajax_url) == false) {
                concat_sign = '?';
            }
            ajax_url += concat_sign + 'r=' + Math.random();
        } else {
            ajax_url = window.location.href.addQueryVar('r', Math.random());// Do not cache this page
        }
        $.ajax({
            url: ajax_url,// Do not cache this page
            data: $(this).serialize(),
            error: errorHandler,
            dataType: 'text',
            success: function (response) {
                response = LP.parseJSON(response);
                if (response.added_to_cart == 'yes') {
                	var $form = $('form.purchase-course input[name="add-to-cart"][value="'+response.course_id+'"]').parent("form");
                    if (response.message && !response.single_purchase) {
                        var $message = $(response.message).addClass('woocommerce-message');
                        $form.parent('.lp-course-buttons').prepend($('<div id="learn-press-wc-message"></div>').append($message));
                    }
                    if ( response.redirect ) {
                        LP.reload( response.redirect );
                    } else {
                        $form.hide();
                    }

                    $('body, html').css('overflow', 'visible');
                    $(document.body).trigger('wc_fragment_refresh');
                } else {
                    errorHandler();
                }
            }
        });
        return false;
    });

    var x = $('#learn-press-checkout')
        .on('learn_press_checkout_place_order', function () {

            var $form = $(this),
                chosen = $('input[type="radio"]:checked', $form);
            $form.find('input[name="woocommerce_chosen_method"]').remove();
            if (chosen.val() == 'woocommerce') {
                $form.append('<input type="hidden" name="woocommerce_chosen_method" value="' + chosen.data('method') + '"/>');
            }
        });

});
// source --> https://cspcursos.online/wp-content/plugins/js_composer/assets/js/vendors/woocommerce-add-to-cart.js 
(function ( $ ) {
	'use strict';

	$( document ).ready( function () {
		$( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
			if ( $button && $button.hasClass( 'vc_gitem-link' ) ) {
				$button
					.addClass( 'vc-gitem-add-to-cart-loading-btn' )
					.parents( '.vc_grid-item-mini' )
					.addClass( 'vc-woocommerce-add-to-cart-loading' )
					.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
			}
		} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
			if ( 'undefined' === typeof ($button) ) {
				$button = $( '.vc-gitem-add-to-cart-loading-btn' );
			}
			if ( $button && $button.hasClass( 'vc_gitem-link' ) ) {
				$button
					.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
					.parents( '.vc_grid-item-mini' )
					.removeClass( 'vc-woocommerce-add-to-cart-loading' )
					.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
			}
		} );
	} );
})( window.jQuery );
// source --> https://cspcursos.online/wp-content/plugins/woo-boleto-paghiper/assets/js/libs/jquery.mask/jquery.mask.min.js 
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,a,e){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"==typeof Meteor?module.exports=t(require("jquery")):t(a||e)}(function(o){function i(u,y,M){var b={invalid:[],getCaret:function(){try{var t=0,a=u.get(0),e=document.selection,a=a.selectionStart;return e&&-1===navigator.appVersion.indexOf("MSIE 10")?((e=e.createRange()).moveStart("character",-b.val().length),t=e.text.length):!a&&"0"!==a||(t=a),t}catch(t){}},setCaret:function(t){try{var a;u.is(":focus")&&((a=u.get(0)).setSelectionRange?a.setSelectionRange(t,t):((a=a.createTextRange()).collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select()))}catch(t){}},events:function(){u.on("keydown.mask",function(t){u.data("mask-keycode",t.keyCode||t.which),u.data("mask-previus-value",u.val()),u.data("mask-previus-caret-pos",b.getCaret()),b.maskDigitPosMapOld=b.maskDigitPosMap}).on(o.jMaskGlobals.useInput?"input.mask":"keyup.mask",b.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){u.keydown().keyup()},100)}).on("change.mask",function(){u.data("changed",!0)}).on("blur.mask",function(){r===b.val()||u.data("changed")||u.trigger("change"),u.data("changed",!1)}).on("blur.mask",function(){r=b.val()}).on("focus.mask",function(t){!0===M.selectOnFocus&&o(t.target).select()}).on("focusout.mask",function(){M.clearIfNotMatch&&!s.test(b.val())&&b.val("")})},getRegexMask:function(){for(var t,a,e,n,s,r=[],o=0;o<y.length;o++)(e=w.translation[y.charAt(o)])?(t=e.pattern.toString().replace(/.{1}$|^.{1}/g,""),a=e.optional,(e=e.recursive)?(r.push(y.charAt(o)),n={digit:y.charAt(o),pattern:t}):r.push(a||e?t+"?":t)):r.push(y.charAt(o).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return s=r.join(""),n&&(s=s.replace(new RegExp("("+n.digit+"(.*"+n.digit+")?)"),"($1)?").replace(new RegExp(n.digit,"g"),n.pattern)),new RegExp(s)},destroyEvents:function(){u.off(["input","keydown","keyup","paste","drop","blur","focusout",""].join(".mask "))},val:function(t){var a=u.is("input")?"val":"text",a=0<arguments.length?(u[a]()!==t&&u[a](t),u):u[a]();return a},calculateCaretPosition:function(t){var a=b.getMasked(),e=b.getCaret();if(t!==a){for(var n=u.data("mask-previus-caret-pos")||0,s=a.length,t=t.length,r=0,o=0,i=0,l=0,c=0,c=e;c<s&&b.maskDigitPosMap[c];c++)o++;for(c=e-1;0<=c&&b.maskDigitPosMap[c];c--)r++;for(c=e-1;0<=c;c--)b.maskDigitPosMap[c]&&i++;for(c=n-1;0<=c;c--)b.maskDigitPosMapOld[c]&&l++;t<e?e=10*s:e<=n&&n!==t?b.maskDigitPosMapOld[e]||(t=e,e-=l-i,e-=r,b.maskDigitPosMap[e]&&(e=t)):n<e&&(e+=i-l,e+=o)}return e},behaviour:function(t){t=t||window.event,b.invalid=[];var a=u.data("mask-keycode");if(-1===o.inArray(a,w.byPassKeys)){var e=b.getMasked(),a=b.getCaret(),n=u.data("mask-previus-value")||"";return setTimeout(function(){b.setCaret(b.calculateCaretPosition(n))},o.jMaskGlobals.keyStrokeCompensation),b.val(e),b.setCaret(a),b.callbacks(t)}},getMasked:function(t,a){for(var e,n,s=[],r=void 0===a?b.val():a+"",o=0,i=y.length,l=0,c=r.length,u=1,f="push",p=-1,d=0,k=[],h=M.reverse?(f="unshift",u=-1,e=0,o=i-1,l=c-1,function(){return-1<o&&-1<l}):(e=i-1,function(){return o<i&&l<c});h();){var v=y.charAt(o),m=r.charAt(l),g=w.translation[v];g?(m.match(g.pattern)?(s[f](m),g.recursive&&(-1===p?p=o:o===e&&o!==p&&(o=p-u),e===p&&(o-=u)),o+=u):m===n?(d--,n=void 0):g.optional?(o+=u,l-=u):g.fallback?(s[f](g.fallback),o+=u,l-=u):b.invalid.push({p:l,v:m,e:g.pattern}),l+=u):(t||s[f](v),m===v?(k.push(l),l+=u):(n=v,k.push(l+d),d++),o+=u)}a=y.charAt(e);i!==c+1||w.translation[a]||s.push(a);a=s.join("");return b.mapMaskdigitPositions(a,k,c),a},mapMaskdigitPositions:function(t,a,e){var n=M.reverse?t.length-e:0;b.maskDigitPosMap={};for(var s=0;s<a.length;s++)b.maskDigitPosMap[a[s]+n]=1},callbacks:function(t){function a(t,a,e){"function"==typeof M[t]&&a&&M[t].apply(this,e)}var e=b.val(),n=e!==r,s=[e,t,u,M];a("onChange",!0==n,s),a("onKeyPress",!0==n,s),a("onComplete",e.length===y.length,s),a("onInvalid",0<b.invalid.length,[e,t,u,b.invalid,M])}};u=o(u);var s,w=this,r=b.val();y="function"==typeof y?y(b.val(),void 0,u,M):y,w.mask=y,w.options=M,w.remove=function(){var t=b.getCaret();return w.options.placeholder&&u.removeAttr("placeholder"),u.data("mask-maxlength")&&u.removeAttr("maxlength"),b.destroyEvents(),b.val(w.getCleanVal()),b.setCaret(t),u},w.getCleanVal=function(){return b.getMasked(!0)},w.getMaskedVal=function(t){return b.getMasked(!1,t)},w.init=function(t){if(t=t||!1,M=M||{},w.clearIfNotMatch=o.jMaskGlobals.clearIfNotMatch,w.byPassKeys=o.jMaskGlobals.byPassKeys,w.translation=o.extend({},o.jMaskGlobals.translation,M.translation),w=o.extend(!0,{},w,M),s=b.getRegexMask(),t)b.events(),b.val(b.getMasked());else{M.placeholder&&u.attr("placeholder",M.placeholder),u.data("mask")&&u.attr("autocomplete","off");for(var a=0,e=!0;a<y.length;a++){var n=w.translation[y.charAt(a)];if(n&&n.recursive){e=!1;break}}e&&u.attr("maxlength",y.length).data("mask-maxlength",!0),b.destroyEvents(),b.events();t=b.getCaret();b.val(b.getMasked()),b.setCaret(t)}},w.init(!u.is("input"))}o.maskWatchers={};function a(){var t=o(this),a={},e="data-mask-",n=t.attr("data-mask");if(t.attr(e+"reverse")&&(a.reverse=!0),t.attr(e+"clearifnotmatch")&&(a.clearIfNotMatch=!0),"true"===t.attr(e+"selectonfocus")&&(a.selectOnFocus=!0),l(t,n,a))return t.data("mask",new i(this,n,a))}var l=function(t,a,e){e=e||{};var n=o(t).data("mask"),s=JSON.stringify,r=o(t).val()||o(t).text();try{return"function"==typeof a&&(a=a(r)),"object"!==(void 0===n?"undefined":_typeof(n))||s(n.options)!==s(e)||n.mask!==a}catch(t){}};o.fn.mask=function(t,a){a=a||{};function e(){if(l(this,t,a))return o(this).data("mask",new i(this,t,a))}var n=this.selector,s=o.jMaskGlobals,r=s.watchInterval,s=a.watchInputs||s.watchInputs;return o(this).each(e),n&&""!==n&&s&&(clearInterval(o.maskWatchers[n]),o.maskWatchers[n]=setInterval(function(){o(document).find(n).each(e)},r)),this},o.fn.masked=function(t){return this.data("mask").getMaskedVal(t)},o.fn.unmask=function(){return clearInterval(o.maskWatchers[this.selector]),delete o.maskWatchers[this.selector],this.each(function(){var t=o(this).data("mask");t&&t.remove().removeData("mask")})},o.fn.cleanVal=function(){return this.data("mask").getCleanVal()},o.applyDataMask=function(t){((t=t||o.jMaskGlobals.maskElements)instanceof o?t:o(t)).filter(o.jMaskGlobals.dataMaskAttr).each(a)};var t,e,n,s={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&(t="input",n=document.createElement("div"),(e=(t="on"+t)in n)||(n.setAttribute(t,"return;"),e="function"==typeof n[t]),n=null,e),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};o.jMaskGlobals=o.jMaskGlobals||{},(s=o.jMaskGlobals=o.extend(!0,{},s,o.jMaskGlobals)).dataMask&&o.applyDataMask(),setInterval(function(){o.jMaskGlobals.watchDataMask&&o.applyDataMask()},s.watchInterval)},window.jQuery,window.Zepto);
// source --> https://cspcursos.online/wp-content/plugins/woo-boleto-paghiper/assets/js/frontend.min.js 
"use strict";function checkForTaxIdFields(){var c=document.querySelectorAll('[name="billing_cpf"], [name="billing_cnpj"]'),o=document.querySelectorAll('[name="billing_first_name"], [name="billing_company"]'),e=document.querySelectorAll(".wc-paghiper-form");[].forEach.call(e,function(e){var n=e.querySelector(".paghiper-taxid-fieldset"),t=e.querySelector(".paghiper-payername-fieldset"),a=!1,i=!1;n&&(0<c.length?n.classList.add("paghiper-hidden"):(n.classList.remove("paghiper-hidden"),a=!0)),t&&(0<o.length?t.classList.add("paghiper-hidden"):(t.classList.remove("paghiper-hidden"),i=!0)),a||i?e.classList.remove("paghiper-hidden"):e.classList.add("paghiper-hidden")})}function copyPaghiperEmv(){var e=document.querySelector(".paghiper-pix-code"),n=e.querySelector("textarea"),e=e.querySelector("button");n.select(),n.setSelectionRange(0,99999),document.execCommand("copy"),document.getSelection().collapseToEnd(),e.dataset.originalText=e.innerHTML,e.innerHTML="Copiado!",setTimeout(function(e){var n=e.dataset.originalText;e.innerHTML=n},2e3,e)}jQuery(document).ready(function(e){var n;"function"==typeof e(".paghiper_tax_id").mask&&(n=function(){function i(e){return 11<e.replace(/\D/g,"").length?"00.000.000/0000-00":"000.000.000-009"}e(".paghiper_tax_id").mask(i,{clearIfNotMatch:!0,placeholder:"___.___.___-__",onKeyPress:function(e,n,t,a){t.mask(i.apply({},arguments),a)}})},e(document.body).on("updated_checkout",function(e){n()}),n()),e(document.body).on("updated_checkout",function(e){checkForTaxIdFields()}),checkForTaxIdFields()});