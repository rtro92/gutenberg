/**
 * WordPress dependencies
 */
import { createBlock, switchToBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import listItemBlock from './block.json';
import listBlock from '../list/block.json';
import paragraphBlock from '../paragraph/block.json';

export function createListItem( listItemAttributes, listAttributes, children ) {
	return createBlock(
		listItemBlock.name,
		listItemAttributes,
		! children?.length
			? []
			: [ createBlock( listItemBlock.name, listAttributes, children ) ]
	);
}

function convertBlockToList( block ) {
	const list = switchToBlockType( block, listBlock.name );
	if ( list ) return list;
	const paragraph = switchToBlockType( block, paragraphBlock.name );
	if ( paragraph ) return switchToBlockType( paragraph, listBlock.name );
	return null;
}

export function convertToListItems( blocks ) {
	const listItems = [];

	for ( let block of blocks ) {
		if ( block.name === listItemBlock.name ) {
			listItems.push( block );
		} else if ( block.name === listBlock.name ) {
			listItems.push( ...block.innerBlocks );
		} else if ( ( block = convertBlockToList( block ) ) ) {
			for ( const { innerBlocks } of block ) {
				listItems.push( ...innerBlocks );
			}
		}
	}

	return listItems;
}
