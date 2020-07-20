<?php
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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'heisenbu_wp1' );

/** MySQL database username */
define( 'DB_USER', 'heisenbu_wp1' );

/** MySQL database password */
define( 'DB_PASSWORD', 'F,6D[6gMxM64~eUwu@,07(@0' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define( 'WP_DEBUG', true );
 

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'CPA2MnQq90WZnp5W4TTolaehRx6yNhCFQpfSQnjVCUZaXvsE2vWBC4QdJXHc49xP');
define('SECURE_AUTH_KEY',  'lw4M8r2xdekctbNHOO097cld8LpsZxEewhqCFGx4R0oYkN0pSkG3WY0Mm3xiwaBa');
define('LOGGED_IN_KEY',    '5KzYJ0oBmOtJ8aPh867dspbQPIs9XuZ5O4CKstwvrItu9Mhck7bMbMOp9oXslIFq');
define('NONCE_KEY',        'RFmf9Oew5Hg6TSiSLA1yrqftaq0FfcVwQtf97FEOES2zwZ6srssOqcCvvZBAsqyl');
define('AUTH_SALT',        'elqGYsPhfHLexoCxRS5YiIoHWfSORxrqtGBov7qoRdpwnXDOuscbnbJejo7cGYPR');
define('SECURE_AUTH_SALT', 'zssMIebyXq3fNSndLK5xpqg7kSJPZdOpC2yGu8ALu07EFsg9mZleMIQZ5sGKqnUu');
define('LOGGED_IN_SALT',   'k9u1B0roqVmI0KEJ33l2DNXnX6N6WBk9gvU2HLsOdx1LPVRlvwaf4It203QGCs1j');
define('NONCE_SALT',       'f1UWsACYtu9gQmlGNZ8Xm1CV8uGw6CjrBFDSXt3BpsgYj2w9uSQ165WHXhGtJX34');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed externally by Installatron.
 * If you remove this define() to re-enable WordPress's automatic background updating
 * then it's advised to disable auto-updating in Installatron.
 */
define('AUTOMATIC_UPDATER_DISABLED', false);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
