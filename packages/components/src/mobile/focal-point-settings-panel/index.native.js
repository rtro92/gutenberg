/**
 * External dependencies
 */
import { SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { memo, useContext, useState, useCallback } from '@wordpress/element';
import { BottomSheetContext, FocalPointPicker } from '@wordpress/components';
import { blockSettingsScreens } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import NavBar from '../bottom-sheet/nav-bar';
import styles from './styles.scss';

const FocalPointSettingsPanelMemo = memo(
	( { focalPoint, shouldEnableBottomSheetScroll, url } ) => {
		const navigation = useNavigation();

		function onButtonPress( action ) {
			if ( action === 'apply' ) {
				navigation.navigate( blockSettingsScreens.settings, {
					draftFocalPoint,
				} );
				return;
			}

			navigation.goBack();
		}

		const [ draftFocalPoint, setDraftFocalPoint ] = useState( focalPoint );
		function setPosition( coordinates ) {
			setDraftFocalPoint( ( prevState ) => ( {
				...prevState,
				...coordinates,
			} ) );
		}

		return (
			<SafeAreaView style={ styles.safearea }>
				<NavBar>
					<NavBar.DismissButton
						onPress={ () => onButtonPress( 'cancel' ) }
					/>
					<NavBar.Heading>
						{ __( 'Edit focal point' ) }
					</NavBar.Heading>
					<NavBar.ApplyButton
						onPress={ () => onButtonPress( 'apply' ) }
					/>
				</NavBar>
				<FocalPointPicker
					focalPoint={ draftFocalPoint }
					onChange={ useCallback( setPosition, [] ) }
					shouldEnableBottomSheetScroll={
						shouldEnableBottomSheetScroll
					}
					url={ url }
				/>
			</SafeAreaView>
		);
	}
);

function FocalPointSettingsPanel( props ) {
	const route = useRoute();
	const { shouldEnableBottomSheetScroll } = useContext( BottomSheetContext );

	return (
		<FocalPointSettingsPanelMemo
			shouldEnableBottomSheetScroll={ shouldEnableBottomSheetScroll }
			{ ...props }
			{ ...route.params }
		/>
	);
}

export default FocalPointSettingsPanel;
