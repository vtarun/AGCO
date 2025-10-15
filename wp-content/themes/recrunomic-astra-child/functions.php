<?php
/**
 * Recrunomic Astra Child theme setup.
 */

if (!defined('ABSPATH')) { exit; }

add_action('wp_enqueue_scripts', function() {
  // Make sure parent styles load first
  $parent = 'astra-style';
  wp_enqueue_style($parent, get_template_directory_uri() . '/style.css', [], null);
  wp_enqueue_style('recrunomic-child', get_stylesheet_directory_uri() . '/style.css', [$parent], filemtime(get_stylesheet_directory() . '/style.css'));

  // Extra brand CSS
  $brand_css = get_stylesheet_directory() . '/assets/css/brand.css';
  if (file_exists($brand_css)) {
    wp_enqueue_style('recrunomic-brand', get_stylesheet_directory_uri() . '/assets/css/brand.css', ['recrunomic-child'], filemtime($brand_css));
  }
});

// Theme supports
add_action('after_setup_theme', function() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('custom-logo');
});

// Elementor: set default container width
add_action('elementor/frontend/after_register_styles', function() {
  wp_register_style('recrunomic-elementor', false);
  wp_enqueue_style('recrunomic-elementor');
  $css = ':root{--container-max:1200px;} .elementor-section.elementor-section-boxed > .elementor-container{max-width:var(--container-max);}';
  wp_add_inline_style('recrunomic-elementor', $css);
});
