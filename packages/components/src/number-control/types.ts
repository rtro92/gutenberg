/**
 * Internal dependencies
 */
import type { InputControlProps } from '../input-control/types';

export type NumberControlProps = Omit<
	InputControlProps,
	'isDragEnabled' | 'min' | 'max' | 'required' | 'step' | 'type' | 'value'
> & {
	/**
	 * If true, the default `input` HTML arrows will be hidden.
	 *
	 * @deprecated
	 * @default false
	 */
	hideHTMLArrows?: boolean;
	/**
	 * The type of spin controls to display. These are butons that allow the
	 * user to quickly increment and decrement the number.
	 *
	 * - 'none' - Do not show spin controls.
	 * - 'native' - Use browser's native HTML `input` controls.
	 * - 'custom' - Use plus and minus icon buttons.
	 *
	 * @default 'native'
	 */
	spinControls?: 'none' | 'native' | 'custom';
	/**
	 * If true, enables mouse drag gestures.
	 *
	 * @default true
	 */
	isDragEnabled?: InputControlProps[ 'isDragEnabled' ];
	/**
	 * If true, pressing `UP` or `DOWN` along with the `SHIFT` key will increment the
	 * value by the `shiftStep` value.
	 *
	 * @default true
	 */
	isShiftStepEnabled?: boolean;
	/**
	 * The maximum `value` allowed.
	 *
	 * @default Infinity
	 */
	max?: number;
	/**
	 * The minimum `value` allowed.
	 *
	 * @default -Infinity
	 */
	min?: number;
	/**
	 * If `true` enforces a valid number within the control's min/max range.
	 * If `false` allows an empty string as a valid value.
	 *
	 * @default false
	 */
	required?: InputControlProps[ 'required' ];
	/**
	 * Optional multiplication factor in spin changes when the `SHIFT` key is held down.
	 * For example, with a `spinFactor` of `5`, and a `shiftStep` of `10`, each spin
	 * changes by `50 * step` (if `step` is "any", 1 is used instead).
	 *
	 * @default 10
	 */
	shiftStep?: number;
	/**
	 * A validation constraint specifying that `value` must be a multiple of `step`
	 * (offset by `min`, if specified). Accepts the special string value `any`
	 * that voids the validation constraint.
	 *
	 * @default 1
	 */
	step?: InputControlProps[ 'step' ];
	/**
	 * Optional multiplication factor in spin changes. I.e. a spin changes
	 * by `spinFactor * step` (if `step` is "any", 1 is used instead).
	 *
	 * @default 1
	 */
	spinFactor?: number;
	/**
	 * The `type` attribute of the `input` element.
	 *
	 * @default 'number'
	 */
	type?: InputControlProps[ 'type' ];
	/**
	 * The value of the input.
	 */
	value?: number | string;
};
