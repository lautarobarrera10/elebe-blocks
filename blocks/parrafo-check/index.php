<?php

add_action('init', 'elebe_register_block');
function elebe_register_block() {
    $assets_file = include_once ELEBE_PATH . 'blocks/parrafo-check/build/index.asset.php';

    wp_register_script( 'elebe-parrafo-check-block', plugins_url('./build/index.js', __FILE__), $assets_file['dependencies'], $assets_file['version'] );
    wp_register_style( 'elebe-parrafo-check-block', plugins_url('./build/index.css', __FILE__), array(), $assets_file['version']);

    register_block_type( 'elebe/parrafo-check', array(
        'editor_script' => 'elebe-parrafo-check-block',
        'style' => 'elebe-parrafo-check-block'
    ) );
}