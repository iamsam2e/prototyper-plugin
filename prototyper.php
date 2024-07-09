<?php

/**
 * Plugin Name: Prototyper Plugin
 * Description: Showcasing prototype aspects of WordPress features at each release. currently showing 6.6 Features
 * Version: 1.0
 * Author: Sam Toohey
 * Author URI: https://samtoohey.xyz/
 */

// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}

// Include necessary files and functions
require_once plugin_dir_path(__FILE__) . 'includes/register-blocks.php';
