<?php
/**
 * Template button view cart woo
 *
 * @author  ThimPress
 * @package LearnPress/Templates
 * @version 2.2
 */

defined( 'ABSPATH' ) || exit();

if ( ! isset( $course ) ) {
	return;
}
?>

<a class="btn-lp-course-view-cart" href="<?php echo wc_get_cart_url() ?>" target="_blank">
	<button class="lp-button"><?php _e( 'View cart', 'learnpress-woo-payment' ) ?></button>
</a>