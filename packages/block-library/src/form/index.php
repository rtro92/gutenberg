<?php
/**
 * Server-side rendering of the `core/form` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/form` block on server.
 *
 * @param array  $attributes The block attributes.
 * @param string $content The saved content.
 *
 * @return string The content of the block being rendered.
 */
function render_block_core_form( $attributes, $content ) {

	$processed_content = new WP_HTML_Tag_Processor( $content );
	$processed_content->next_tag( 'form' );

	// Get the action for this form.
	$action = '';
	if ( isset( $attributes['action'] ) ) {
		$action = str_replace( '{SITE_URL}', site_url(), $attributes['action'] );
	}

	if ( ! empty( $action ) ) {
		$processed_content->set_attribute( 'action', esc_attr( $action ) );
	}

	// Add the method attribute. If it is not set, default to `post`.
	$attributes['method'] = empty( $attributes['method'] ) ? 'post' : $attributes['method'];
	$processed_content->set_attribute( 'method', $attributes['method'] );

	$extra_fields = apply_filters( 'render_block_core_form_extra_fields', '', $attributes );

	return str_replace(
		'</form>',
		$extra_fields . '</form>',
		$processed_content->get_updated_html()
	);
}

/**
 * Adds extra fields to the form.
 *
 * If the form is a comment form, adds the post ID as a hidden field,
 * to allow the comment to be associated with the post.
 *
 * @param string $extra_fields The extra fields.
 * @param array  $attributes   The block attributes.
 *
 * @return string The extra fields.
 */
function gutenberg_block_core_form_extra_fields_comment_form( $extra_fields, $attributes ) {
	if ( ! empty( $attributes['action'] ) && str_ends_with( $attributes['action'], '/wp-comments-post.php' ) ) {
		$extra_fields .= '<input type="hidden" name="comment_post_ID" value="' . get_the_ID() . '" id="comment_post_ID">';
	}
	return $extra_fields;
}
add_filter( 'render_block_core_form_extra_fields', 'gutenberg_block_core_form_extra_fields_comment_form', 10, 2 );

/**
 * Adds extra fields to the form.
 *
 * If the form does not have an `action` defined, assume this is a contact form.
 * Adds a nonce field and a hidden input to enable sending an email
 * to the admin when the form is submitted.
 *
 * @param string $extra_fields The extra fields.
 * @param array  $attributes   The block attributes.
 *
 * @return string The extra fields.
 */
function gutenberg_block_core_form_extra_fields_contact_form( $extra_fields, $attributes ) {
	if ( empty( $attributes['action'] ) ) {
		$extra_fields .= wp_nonce_field( 'wp-block-form', 'wp_block_form', true, false );
		$extra_fields .= '<input type="hidden" name="wp-send-email" value="1">';
	}
	return $extra_fields;
}
add_filter( 'render_block_core_form_extra_fields', 'gutenberg_block_core_form_extra_fields_contact_form', 10, 2 );

/**
 * Sends an email if the form is a contact form.
 *
 * @return void
 */
function gutenberg_block_core_form_email_if_action_is_empty() {
	// Get the POST or GET data.
	$params = wp_unslash( $_POST );
	if ( empty( $params['wp_block_form'] ) ) {
		$params = wp_unslash( $_GET );
	}

	// Bail early if not a form submission, or if the nonce is not valid.
	if ( empty( $params['wp_block_form'] )
		|| empty( $params['wp-send-email'] )
		|| '1' !== $params['wp-send-email']
		|| ! wp_verify_nonce( $params['wp_block_form'], 'wp-block-form' )
	) {
		return;
	}

	// Start building the email content.
	$content = sprintf(
		/* translators: %s: The request URI. */
		__( 'Form submission from %1$s', 'gutenberg' ) . '</br>',
		'<a href="' . esc_url( get_site_url( null, $params['_wp_http_referer'] ) ) . '">' . get_bloginfo( 'name' ) . '</a>'
	);

	$skip_fields = array( 'wp_block_form', '_wp_http_referer', 'wp-send-email' );
	foreach ( $params as $key => $value ) {
		if ( in_array( $key, $skip_fields, true ) ) {
			continue;
		}
		$content .= $key . ': ' . $value . '</br>';
	}
	wp_mail( get_option( 'admin_email' ), __( 'Form submission', 'gutenberg' ), $content );
}
add_action( 'wp', 'gutenberg_block_core_form_email_if_action_is_empty' );

/**
 * Registers the `core/form` block on server.
 */
function register_block_core_form() {
	register_block_type_from_metadata(
		__DIR__ . '/form',
		array(
			'render_callback' => 'render_block_core_form',
		)
	);
}
add_action( 'init', 'register_block_core_form' );
