// source --> https://cspcursos.online/wp-content/plugins/learnpress-coming-soon-courses/assets/js/jquery.mb-coming-soon.min.js 
(function(e){var t;t=function(t,n,r,i,s,o,u){this.$el=e(n);this.gmt=o;this.showText=u;this.end=t;this.active=false;this.interval=1e3;this.speed=i;if(jQuery.isFunction(s))this.callBack=s;else this.callBack=null;this.localization={days:"days",hours:"hours",minutes:"minutes",seconds:"seconds"};e.extend(this.localization,this.localization,r)};t.prototype={getCounterNumbers:function(){var e={days:{tens:0,units:0,hundreds:0},hours:{tens:0,units:0},minutes:{tens:0,units:0},seconds:{tens:0,units:0}},t=1e3*60*60*24,n=1e3*60*60,r=1e3*60,i=1e3,s=0;var o=new Date;var u=o.getTimezoneOffset()/60+this.gmt;var a=this.end.getTime()-o.getTime()-u*60*6e4;if(a<=0)return e;var f=Math.min(Math.floor(a/t),999);s=a%t;e.days.hundreds=Math.floor(f/100);var l=f%100;e.days.tens=Math.floor(l/10);e.days.units=l%10;var c=Math.floor(s/n);s=s%n;e.hours.tens=Math.floor(c/10);e.hours.units=c%10;var h=Math.floor(s/r);s=s%r;e.minutes.tens=Math.floor(h/10);e.minutes.units=h%10;var p=Math.floor(s/1e3);e.seconds.tens=Math.floor(p/10);e.seconds.units=p%10;return e},updatePart:function(t){var n=this.getCounterNumbers();var r=e("."+t,this.$el);if(t=="days"){this.setDayHundreds(n.days.hundreds>0);if(r.find(".number.hundreds.show").html()!=n[t].hundreds){var i=e(".n1.hundreds",r);var s=e(".n2.hundreds",r);this.scrollNumber(i,s,n[t].hundreds)}}if(r.find(".number.tens.show").html()!=n[t].tens){var i=e(".n1.tens",r);var s=e(".n2.tens",r);this.scrollNumber(i,s,n[t].tens)}if(r.find(".number.units.show").html()!=n[t].units){var i=e(".n1.units",r);var s=e(".n2.units",r);this.scrollNumber(i,s,n[t].units)}},timeOut:function(){var e=new Date;var t=e.getTimezoneOffset()/60+this.gmt;var n=this.end.getTime()-e.getTime()-t*60*6e4;if(n<=0)return true;return false},setDayHundreds:function(t){if(t)e(".counter.days",this.$el).addClass("with-hundreds");else e(".counter.days",this.$el).removeClass("with-hundreds")},updateCounter:function(){this.updatePart("days");this.updatePart("hours");this.updatePart("minutes");this.updatePart("seconds");if(this.timeOut()){this.active=false;if(this.callBack)this.callBack(this)}},localize:function(t){if(e.isPlainObject(t))e.extend(this.localization,this.localization,t);e(".days",this.$el).siblings(".counter-caption").text(this.localization.days);e(".hours",this.$el).siblings(".counter-caption").text(this.localization.hours);e(".minutes",this.$el).siblings(".counter-caption").text(this.localization.minutes);e(".seconds",this.$el).siblings(".counter-caption").text(this.localization.seconds)},start:function(e){if(e)this.interval=e;var t=this.interval;this.active=true;var n=this;setTimeout(function(){n.updateCounter();if(n.active)n.start()},t)},stop:function(){this.active=false},scrollNumber:function(e,t,n){if(e.hasClass("show")){t.removeClass("hidden-down").css("top","-100%").text(n).stop().animate({top:0},this.speed,function(){t.addClass("show")});e.stop().animate({top:"100%"},this.speed,function(){e.removeClass("show").addClass("hidden-down")})}else{e.removeClass("hidden-down").css("top","-100%").text(n).stop().animate({top:0},this.speed,function(){e.addClass("show")});t.stop().animate({top:"100%"},this.speed,function(){t.removeClass("show").addClass("hidden-down")})}}};jQuery.fn.mbComingsoon=function(n){var r={interval:1e3,callBack:null,localization:{days:"days",hours:"hours",minutes:"minutes",seconds:"seconds"},speed:500,gmt:0,showText:1};var i={};var s='   <div class="counter-group" id="myCounter">'+'       <div class="counter-block">'+'           <div class="counter days">'+'               <div class="number show n1 hundreds">0</div>'+'               <div class="number show n1 tens">0</div>'+'               <div class="number show n1 units">0</div>'+'               <div class="number hidden-up n2 hundreds">0</div>'+'               <div class="number hidden-up n2 tens">0</div>'+'               <div class="number hidden-up n2 units">0</div>'+"           </div>"+'           <div class="counter-caption">days</div>'+"       </div>"+'       <div class="counter-block">'+'           <div class="counter hours">'+'               <div class="number show n1 tens">0</div>'+'               <div class="number show n1 units">0</div>'+'               <div class="number hidden-up n2 tens">0</div>'+'               <div class="number hidden-up n2 units">0</div>'+"           </div>"+'           <div class="counter-caption">hours</div>'+"       </div>"+'       <div class="counter-block">'+'           <div class="counter minutes">'+'               <div class="number show n1 tens">0</div>'+'               <div class="number show n1 units">0</div>'+'               <div class="number hidden-up n2 tens">0</div>'+'               <div class="number hidden-up n2 units">0</div>'+"           </div>"+'           <div class="counter-caption">minutes</div>'+"       </div>"+'       <div class="counter-block">'+'           <div class="counter seconds">'+'               <div class="number show n1 tens">0</div>'+'               <div class="number show n1 units">0</div>'+'               <div class="number hidden-up n2 tens">0</div>'+'               <div class="number hidden-up n2 units">0</div>'+"           </div>"+'           <div class="counter-caption">seconds</div>'+"       </div>"+"   </div>";var o='   <div class="counter-group" id="myCounter">'+'       <div class="counter-block">'+'           <div class="counter days">'+'               <div class="number show n1 hundreds">0</div>'+'               <div class="number show n1 tens">0</div>'+'               <div class="number show n1 units">0</div>'+'               <div class="number hidden-up n2 hundreds">0</div>'+'               <div class="number hidden-up n2 tens">0</div>'+'               <div class="number hidden-up n2 units">0</div>'+"           </div>"+"       </div>"+'       <div class="counter-block">'+'           <div class="counter hours">'+'               <div class="number show n1 tens">0</div>'+'               <div class="number show n1 units">0</div>'+'               <div class="number hidden-up n2 tens">0</div>'+'               <div class="number hidden-up n2 units">0</div>'+"           </div>"+"       </div>"+'       <div class="counter-block">'+'           <div class="counter minutes">'+'               <div class="number show n1 tens">0</div>'+'               <div class="number show n1 units">0</div>'+'               <div class="number hidden-up n2 tens">0</div>'+'               <div class="number hidden-up n2 units">0</div>'+"           </div>"+"       </div>"+'       <div class="counter-block">'+'           <div class="counter seconds">'+'               <div class="number show n1 tens">0</div>'+'               <div class="number show n1 units">0</div>'+'               <div class="number hidden-up n2 tens">0</div>'+'               <div class="number hidden-up n2 units">0</div>'+"           </div>"+"       </div>"+"   </div>";return this.each(function(){var u=e(this);var a=u.data("mbComingsoon");if(!a){if(n instanceof Date)i.expiryDate=n;else if(e.isPlainObject(n))e.extend(i,r,n);else if(typeof n=="string")i.expiryDate=new Date(n);if(!i.expiryDate)throw new Error("Expiry date is required!");a=new t(i.expiryDate,u,i.localization,i.speed,i.callBack,i.gmt,i.showText);if(i.showText){u.html(s)}else{u.html(o)}a.localize();a.start()}else if(n=="start")a.start();else if(n=="stop")a.stop();else if(e.isPlainObject(n)){if(n.expiryDate instanceof Date)a.end=n.expiryDate;if(e.isNumeric(n.interval))a.interval=n.interval;if(e.isNumeric(n.gmt))a.gmt=n.gmt;if(e.isNumeric(n.showText))a.showText=n.showText;if(e.isFunction(n.callBack))a.callBack=n.callBack;if(e.isPlainObject(n.localization))this.localize(n.localization)}})}})(jQuery)/**
 * Created by Tu on 12/1/2016.
 */;
// source --> https://cspcursos.online/wp-content/plugins/learnpress-coming-soon-courses/assets/js/coming-soon-course.js 
(function ($) {
    $.fn.lp_course_countdown = function () {
        var countdowns = this;

        for (var i = 0; i < countdowns.length; i++) {
			var _countdown = $(countdowns[i]);
			var speed = _countdown.attr('data-speed');
			var remain = parseInt(_countdown.attr('data-timestamp-remain'))*1000;
			var gmt = _countdown.attr( 'data-gmt' );
			var time = _countdown.attr('data-time');
			var showtext = _countdown.attr('data-showtext');
			var current_time = new Date();
			var expiryTime = current_time.getTime()+remain;
			var expiryDate = new Date(expiryTime);
			var gmt = -expiryDate.getTimezoneOffset() / 60;
			var options = {
				expiryDate : expiryDate,
				speed : speed ? speed : 500,
				gmt : parseFloat(gmt),
				showText : (showtext=='yes') ? 1 : 0,
                localization: {
                    days: lp_coming_soon_translation.days,
                    hours: lp_coming_soon_translation.hours,
                    minutes: lp_coming_soon_translation.minutes,
                    seconds: lp_coming_soon_translation.seconds
                }
            };
            _countdown.mbComingsoon(options);
        }
    };

    $(document).ready(function () {
        $('.learnpress-course-coming-soon').lp_course_countdown();
        if (typeof tinymce !== 'undefined') {
            setTimeout(function () {
                var $editor_cm = tinymce.get('_lp_coming_soon_msg');
                if ($editor_cm) {
                    $editor_cm.on('Change KeyUp', function (e, b) {
                        $('#' + this.settings.id).val(this.getContent())
                    });
                }
            }, 1000);
        }
    });

})(jQuery);