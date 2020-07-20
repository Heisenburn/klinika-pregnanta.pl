<?php

add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  echo 
  '<style>
    .edit-post-sidebar {width: 500px;}
  </style>';
}

add_action( 'after_setup_theme', 'addGutenbergStyling' );
 
// function addGutenbergStyling(){
 
// 	add_theme_support( 'editor-styles' ); // if you don't add this line, your stylesheet won't be added
// 	add_editor_style( 'gutenberg_styling.css' ); // tries to include style-editor.css directly from your theme folder
 
// }


add_editor_style( 'gutenberg_styling.css' );
add_theme_support( 'editor-styles' );
add_theme_support( 'wp-block-styles' );


    // Check function exists.
    if( function_exists('acf_register_block_type') ) {
        add_action('acf/init', 'register_acf_block_types');
        

    }


function register_acf_block_types() {

        // register a testimonial block.
        acf_register_block_type(array(
            'name'              => 'CennikElement',
            'title'             => __('Cennik'),
            'render_template'   => '/blocks/cennikBlock/cennik.php',
            'keywords'          => array( 'Cennik', 'money' ),
      
        ));

        acf_register_block_type(array(
            'name'              => 'uslugiElement',
            'title'             => __('Usługi'),
            'render_template'   => '/blocks/uslugiBlock/usluga.php',
            'keywords'          => array( 'Usługi', 'services' ),
          
        ));
    }


   // Our custom post type function
function create_cennik_posttype() {
 
    register_post_type( 'Cennik',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'Cennik' ),
                'singular_name' => __( 'CennikElement' )
            ),
            'menu_icon'=> 'dashicons-id-alt',
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'Cennik'),
            'show_in_rest' => true,
 
        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_cennik_posttype' );


   // Our custom post type function
   function create_uslugi_posttype() {
 
    register_post_type( 'Usługi',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'Usługi' ),
                'singular_name' => __( 'UsługiElement' )
            ),
            'menu_icon' => 'dashicons-id-alt',
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'Usługi'),
            'show_in_rest' => true,
 
        )
    );
}


// Hooking up our function to theme setup
add_action( 'init', 'create_uslugi_posttype' );


 
 
   // Our custom post type function
   function create_lekarze_posttype() {
 
    register_post_type( 'Lekarze',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'Lekarze' ),
                'singular_name' => __( 'Lekarz' )
               
            ),
           
            'supports' => array( 'title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-id-alt',
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'Lekarze'),
            'show_in_rest' => true,
 
        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_lekarze_posttype' );


add_action('init', 'my_custom_init');
    function my_custom_init() {
        // 'portfolio' is my post type, you replace it with yours
        add_post_type_support( 'Lekarze', 'thumbnail' ); 
        add_theme_support('post-thumbnails');
    }
 

?>