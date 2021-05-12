<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u949487507_cspcursos' );
/** MySQL database username */
define( 'DB_USER', 'u949487507_cspcursos' );
/** MySQL database password */
define( 'DB_PASSWORD', 'Csp@13980*' );
/** MySQL hostname */
define( 'DB_HOST', 'mysql' );
/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );
/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'vM`((?]B;CB);qp^<9]t%tPx,Zv!vr}(+g*Mj/56TVV&U`Kj+E_4N4v;,gxN6[xR' );
define( 'SECURE_AUTH_KEY',   'Wlah`5=+GV*vxqF<3$E.+;furH_T%>+UL/CW|?5V[]Do7$_-:u(u.hW37XD5!Y5U' );
define( 'LOGGED_IN_KEY',     'z7!H7~|Y9Vv:Zb)l*-K{zScgNPk9Xm>kp8SE~3SD6_oV]f8Nb4IzA/*-OHvGny=n' );
define( 'NONCE_KEY',         'rYkL/k[jy.(uky>Q]3c~KqOEX=>]@[#X%0^`P5<F|/?%{j>BGeGx{I-3[Oul&3b_' );
define( 'AUTH_SALT',         'xiCmy/#lxmG@=Q8>mS%(P@y4PVFlCaaY&F%g%?os}05(eG<u;0WR7SH<5][fcJ,w' );
define( 'SECURE_AUTH_SALT',  'OXuATO*FP.$.FDANhMXDr)z_RRlA7%/2t*3#eEEFlU4%yhY0Tt/VXe=4g(<]yAF@' );
define( 'LOGGED_IN_SALT',    'zSd,?saVNkW]s(!VA`Zt@ @fi(`G2!=b2n`GZN KL><jT@W7]y^cGslhvFle.=E.' );
define( 'NONCE_SALT',        '{Yv!7z3s73H:>Fk}6yuE^N^~gwzV.-[DaugfjD8tH_cPwPVLG`Y;.9iZ^oM 8>96' );
define( 'WP_CACHE_KEY_SALT', '/WRK_~U#0-i=Ve^y#~%MZcSIRWh%7Vh>E4k![Uh{_nf@#knrD=/D r|ux#.uon,0' );
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';