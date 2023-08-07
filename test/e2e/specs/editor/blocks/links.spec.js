/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'Links', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.createNewPost();
	} );

	test.afterEach( async ( { requestUtils } ) => {
		await requestUtils.deleteAllPosts();
	} );

	test.use( {
		LinkUtils: async ( { page }, use ) => {
			await use( new LinkUtils( { page } ) );
		},
	} );

	test( `will use Post title as link text if link to existing post is created without any text selected`, async ( {
		admin,
		page,
		editor,
		pageUtils,
	} ) => {
		const titleText = 'Post to create a link to';
		await admin.createNewPost( { title: titleText } );
		const postId = await editor.publishPost();
		await admin.createNewPost();

		// Now in a new post and try to create a link from an autocomplete suggestion using the keyboard.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'Here comes a link: ' );

		// Press Cmd+K to insert a link.
		await pageUtils.pressKeys( 'primary+K' );

		// Trigger the autocomplete suggestion list and select the first suggestion.
		await page.keyboard.type( titleText.substr( 0, titleText.length - 2 ) );
		await page.getByRole( 'option', { name: titleText } ).click();

		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content:
						'Here comes a link: <a href="http://localhost:8889/?p=' +
						postId +
						'" data-type="post" data-id="' +
						postId +
						'">' +
						titleText +
						'</a>',
				},
			},
		] );
	} );

	test( `can be created by selecting text and clicking Link`, async ( {
		page,
		editor,
		pageUtils,
	} ) => {
		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'This is Gutenberg' );

		// Select some text.
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );

		// Click on the Link button.
		await page.getByRole( 'button', { name: 'Link' } ).click();

		// Type a URL.
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Submit the link.
		await pageUtils.pressKeys( 'Enter' );

		// The link should have been inserted.
		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content:
						'This is <a href="https://wordpress.org/gutenberg">Gutenberg</a>',
				},
			},
		] );
	} );

	test( `will not automatically create a link if selected text is not a valid HTTP based URL`, async ( {
		page,
		editor,
		pageUtils,
	} ) => {
		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'This: is not a link' );

		// Select some text.
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );

		// Click on the Link button.
		await page.getByRole( 'button', { name: 'Link' } ).click();
		const urlInput = await page
			.getByPlaceholder( 'Search or type url' )
			.inputValue();

		expect( urlInput ).toBe( '' );
	} );

	test( `can be created without any text selected`, async ( {
		page,
		editor,
		pageUtils,
	} ) => {
		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'This is Gutenberg: ' );

		// Press Cmd+K to insert a link.
		await pageUtils.pressKeys( 'primary+K' );

		// Type a URL.
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Press Enter to apply the link.
		await pageUtils.pressKeys( 'Enter' );

		// A link with the URL as its text should have been inserted.
		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content:
						'This is Gutenberg: <a href="https://wordpress.org/gutenberg">https://wordpress.org/gutenberg</a>',
				},
			},
		] );
	} );

	test( `can be created instantly when a URL is selected`, async ( {
		page,
		editor,
		pageUtils,
	} ) => {
		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type(
			'This is Gutenberg: https://wordpress.org/gutenberg'
		);

		// Select the URL.
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );

		// Click on the Link button.
		await page.getByRole( 'button', { name: 'Link' } ).click();

		// A link with the selected URL as its href should have been inserted.
		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content:
						'This is Gutenberg: <a href="https://wordpress.org/gutenberg">https://wordpress.org/gutenberg</a>',
				},
			},
		] );
	} );

	test( `is not created when we click away from the link input`, async ( {
		page,
		editor,
		pageUtils,
	} ) => {
		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'This is Gutenberg' );

		// Select some text.
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );

		// Click on the Link button.
		await page.getByRole( 'button', { name: 'Link' } ).click();

		// Type a URL.
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Click somewhere else - it doesn't really matter where.
		await editor.canvas
			.getByRole( 'textbox', { name: 'Add title' } )
			.focus();

		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content: 'This is Gutenberg',
				},
			},
		] );
	} );

	test( `can be edited`, async ( { page, editor, pageUtils } ) => {
		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'This is Gutenberg' );

		// Select some text.
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );

		// Click on the Link button.
		await page.getByRole( 'button', { name: 'Link' } ).click();

		// Type a URL.
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Click on the Submit button.
		await pageUtils.pressKeys( 'Enter' );

		// Reselect the link.
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );

		// Click on the Edit button.
		await page.getByRole( 'button', { name: 'Edit' } ).click();

		// Change the URL.
		await page.getByPlaceholder( 'Search or type url' ).fill( '' );
		await page.keyboard.type( '/handbook' );

		// Submit the link.
		await pageUtils.pressKeys( 'Enter' );

		// The link should have been updated.
		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content: 'This is <a href="/handbook">Gutenberg</a>',
				},
			},
		] );
	} );

	test( `can be removed`, async ( { page, editor, pageUtils } ) => {
		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'This is Gutenberg' );

		// Select some text.
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );

		// Click on the Link button.
		await page.getByRole( 'button', { name: 'Link' } ).click();

		// Type a URL.
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Click on the Submit button.
		await pageUtils.pressKeys( 'Enter' );

		// Reselect the link.
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );

		// Unlick via shortcut
		// we do this to avoid an layout edge case whereby
		// the rich link preview popover will obscure the block toolbar
		// under very specific circumstances and screensizes.
		await page.getByRole( 'button', { name: 'Unlink' } ).nth( 1 ).click();

		// The link should have been removed.
		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content: 'This is Gutenberg',
				},
			},
		] );
	} );

	test( `allows Left to be pressed during creation when the toolbar is fixed to top`, async ( {
		page,
		editor,
		pageUtils,
		LinkUtils,
	} ) => {
		await LinkUtils.toggleFixedToolbar( true );

		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'Text' );
		await page.getByRole( 'button', { name: 'Link' } ).click();

		// Typing "left" should not close the dialog.
		await pageUtils.pressKeys( 'ArrowLeft' );
		let popover = page
			//TODO: change to a better selector when https://github.com/WordPress/gutenberg/issues/51060 is resolved.
			.locator(
				'.components-popover__content .block-editor-link-control'
			);
		await expect( popover ).toBeVisible();

		// Escape should close the dialog still.
		await page.keyboard.press( 'Escape' );
		popover = page
			//TODO: change to a better selector when https://github.com/WordPress/gutenberg/issues/51060 is resolved.
			.locator(
				'.components-popover__content .block-editor-link-control'
			);
		await expect( popover ).not.toBeVisible();
	} );

	test( `allows Left to be pressed during creation in "Docked Toolbar" mode`, async ( {
		page,
		editor,
		pageUtils,
		LinkUtils,
	} ) => {
		await LinkUtils.toggleFixedToolbar( false );

		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'Text' );

		await editor.clickBlockToolbarButton( 'Link' );

		// Typing "left" should not close the dialog.
		await pageUtils.pressKeys( 'ArrowLeft' );
		let popover = page
			//TODO: change to a better selector when https://github.com/WordPress/gutenberg/issues/51060 is resolved.
			.locator(
				'.components-popover__content .block-editor-link-control'
			);
		await expect( popover ).toBeVisible();

		// Escape should close the dialog still.
		await page.keyboard.press( 'Escape' );
		popover = page
			//TODO: change to a better selector when https://github.com/WordPress/gutenberg/issues/51060 is resolved.
			.locator(
				'.components-popover__content .block-editor-link-control'
			);
		await expect( popover ).not.toBeVisible();
	} );

	test( `can be created by selecting text and using keyboard shortcuts`, async ( {
		page,
		editor,
		pageUtils,
	} ) => {
		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'This is Gutenberg' );

		// Select some text.
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );

		// Press Cmd+K to insert a link.
		await pageUtils.pressKeys( 'primary+K' );

		// Type a URL.
		await page.keyboard.type( 'https://wordpress.org/gutenberg' );

		// Ensure that the contents of the post have not been changed, since at
		// this point the link is still not inserted.
		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: { content: 'This is Gutenberg' },
			},
		] );

		await page.keyboard.press( 'Enter' );

		await page.keyboard.press( 'ArrowLeft' );
		await page.keyboard.press( 'ArrowLeft' );

		// Edit link.
		await page.getByRole( 'button', { name: 'Edit' } ).click();

		// Open settings.
		await page
			.getByRole( 'region', {
				name: 'Editor content',
			} )
			.getByRole( 'button', {
				name: 'Advanced',
			} )
			.click();

		// Navigate to and toggle the "Open in new tab" checkbox.
		const checkbox = page.getByLabel( 'Open in new tab' );
		await checkbox.click();

		// Toggle should still have focus and be checked.
		await expect( checkbox ).toBeChecked();
		await expect( checkbox ).toBeFocused();

		// Tab back to the Submit and apply the link.
		await page
			//TODO: change to a better selector when https://github.com/WordPress/gutenberg/issues/51060 is resolved.
			.locator( '.block-editor-link-control' )
			.getByRole( 'button', { name: 'Save' } )
			.click();

		// The link should have been inserted.
		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content:
						'This is <a href="https://wordpress.org/gutenberg" target="_blank" rel="noreferrer noopener">Gutenberg</a>',
				},
			},
		] );
	} );

	test( 'can update the url of an existing link', async ( {
		page,
		editor,
		pageUtils,
	} ) => {
		// Create a block with some text.
		await editor.insertBlock( {
			name: 'core/paragraph',
		} );
		await page.keyboard.type( 'This is WordPress' );
		// Select "WordPress".
		await pageUtils.pressKeys( 'shiftAlt+ArrowLeft' );
		await pageUtils.pressKeys( 'primary+k' );
		await page.keyboard.type( 'w.org' );

		await page.keyboard.press( 'Enter' );

		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content: 'This is <a href="http://w.org">WordPress</a>',
				},
			},
		] );

		// Move caret back into the link.
		await page.keyboard.press( 'ArrowLeft' );
		await page.keyboard.press( 'ArrowLeft' );

		// Edit link.
		await pageUtils.pressKeys( 'primary+k' );
		await page.getByPlaceholder( 'Search or type url' ).fill( '' );
		await page.keyboard.type( 'wordpress.org' );

		// Update the link.
		await page
			//TODO: change to a better selector when https://github.com/WordPress/gutenberg/issues/51060 is resolved.
			.locator( '.block-editor-link-control' )
			.getByRole( 'button', { name: 'Save' } )
			.click();

		// Navigate back to the popover.
		await page.keyboard.press( 'ArrowLeft' );
		await page.keyboard.press( 'ArrowLeft' );

		// Navigate back to inputs to verify appears as changed.
		await pageUtils.pressKeys( 'primary+k' );
		const urlInputValue = await page
			.getByPlaceholder( 'Search or type url' )
			.inputValue();
		expect( urlInputValue ).toContain( 'wordpress.org' );

		await expect.poll( editor.getBlocks ).toMatchObject( [
			{
				name: 'core/paragraph',
				attributes: {
					content:
						'This is <a href="http://wordpress.org">WordPress</a>',
				},
			},
		] );
	} );
} );

class LinkUtils {
	constructor( { page } ) {
		this.page = page;
	}

	async toggleFixedToolbar( isFixed ) {
		await this.page.evaluate( ( _isFixed ) => {
			const { select, dispatch } = window.wp.data;
			const isCurrentlyFixed =
				select( 'core/edit-post' ).isFeatureActive( 'fixedToolbar' );

			if ( isCurrentlyFixed !== _isFixed ) {
				dispatch( 'core/edit-post' ).toggleFeature( 'fixedToolbar' );
			}
		}, isFixed );
	}
}
