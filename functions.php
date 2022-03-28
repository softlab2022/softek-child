<?php
/**
 * Child theme functions and definitions.
 */
function softek_child_enqueue_styles() {    
    wp_enqueue_style( 'softek-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'softek-style' ),
        1.0
    );
}

add_action(  'wp_enqueue_scripts', 'softek_child_enqueue_styles', 99 );