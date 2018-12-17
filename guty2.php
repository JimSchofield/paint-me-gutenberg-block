<?php
/**
 * Plugin Name: Guty2
 * Description: A rebuild of guty blocks
 * Version: 0.0.1
 * Author: Jim Schofield
 * Text Domain: guty2
 * Domain Path: /languages
 *
 * @package guty2
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
 
/**
 * Enqueue block JavaScript and CSS for the editor
 */
function guty2_plugin_editor_scripts() {
 
    // Enqueue block editor JS
    wp_enqueue_script(
        'guty2',
        plugins_url( '/assets/dist/build.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'blocks/custom-block/index.js' ) 
    );
 
    // Enqueue block editor styles
    // wp_enqueue_style(
    //     'my-block-editor-css',
    //     plugins_url( '/blocks/custom-block/editor-styles.css', __FILE__ ),
    //     [ 'wp-blocks' ],
    //     filemtime( plugin_dir_path( __FILE__ ) . 'blocks/custom-block/editor-styles.css' ) 
    // );
 
}
 
// Hook the enqueue functions into the editor
add_action( 'enqueue_block_editor_assets', 'guty2_plugin_editor_scripts' );