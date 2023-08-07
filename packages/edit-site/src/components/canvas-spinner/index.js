/**
 * WordPress dependencies
 */
import { privateApis as blockEditorPrivateApis } from '@wordpress/block-editor';
import { privateApis as componentsPrivateApis } from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { unlock } from '../../lock-unlock';
import { useStylesPreviewColors } from '../global-styles/hooks';

const { ProgressBar, Theme } = unlock( componentsPrivateApis );
const { useGlobalStyle } = unlock( blockEditorPrivateApis );

export default function CanvasSpinner() {
	const [ fallbackIndicatorColor ] = useGlobalStyle( 'color.text' );
	const [ backgroundColor ] = useGlobalStyle( 'color.background' );
	const { highlightedColors } = useStylesPreviewColors();
	const indicatorColor =
		highlightedColors[ 0 ]?.color ?? fallbackIndicatorColor;
	const { elapsed, total } = useSelect( ( select ) => {
		const selectorsByStatus = select( coreStore ).countSelectorsByStatus();
		const resolving = selectorsByStatus.resolving ?? 0;
		const finished = selectorsByStatus.finished ?? 0;
		return {
			elapsed: finished,
			total: finished + resolving,
		};
	}, [] );

	return (
		<div className="edit-site-canvas-spinner">
			<Theme accent={ indicatorColor } background={ backgroundColor }>
				<ProgressBar max={ total } value={ elapsed } />
			</Theme>
		</div>
	);
}
