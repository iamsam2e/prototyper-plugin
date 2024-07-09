<?php
function my_custom_plugin_register_blocks()
{
    // Automatically load dependencies and version
    $asset_file = include(plugin_dir_path(__FILE__) . '../build/index.asset.php');

    // Register the block editor script
    wp_register_script(
        'my-custom-plugin-editor-script',
        plugins_url('../build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    // Register the block editor styles
    wp_register_style(
        'my-custom-plugin-editor-style',
        plugins_url('../build/index.css', __FILE__),
        array('wp-edit-blocks'),
        file_exists(plugin_dir_path(__FILE__) . '../build/index.css') ? filemtime(plugin_dir_path(__FILE__) . '../build/index.css') : null
    );

    // Register the block(s)
    register_block_type('my-plugin/grid-block', array(
        'editor_script' => 'my-custom-plugin-editor-script',
        'editor_style'  => 'my-custom-plugin-editor-style',
    ));
}

add_action('init', 'my_custom_plugin_register_blocks');
