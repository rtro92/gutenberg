"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1950],{"./packages/components/src/color-picker/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ColorPicker,Z:()=>color_picker_component});var colord=__webpack_require__("./node_modules/colord/index.mjs"),names=__webpack_require__("./node_modules/colord/plugins/names.mjs"),react=__webpack_require__("./node_modules/react/index.js"),use_debounce=__webpack_require__("./packages/compose/build-module/hooks/use-debounce/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),number_control=__webpack_require__("./packages/components/src/number-control/index.tsx"),select_control=__webpack_require__("./packages/components/src/select-control/index.tsx"),range_control=__webpack_require__("./packages/components/src/range-control/index.tsx"),space=__webpack_require__("./packages/components/src/ui/utils/space.ts"),box_sizing=__webpack_require__("./packages/components/src/utils/box-sizing.ts"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),component=__webpack_require__("./packages/components/src/flex/flex/component.tsx"),h_stack_component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),input_control_styles=__webpack_require__("./packages/components/src/input-control/styles/input-control-styles.tsx"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");const NumberControlWrapper=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"ez9hsf47"})(input_control_styles.W2,"{width:",(0,space.D)(24),";}"),SelectControl=(0,emotion_styled_base_browser_esm.Z)(select_control.Z,{target:"ez9hsf46"})("margin-left:",(0,space.D)(-2),";width:5em;select:not( :focus )~",input_control_styles.Kg,input_control_styles.Kg,input_control_styles.Kg,"{border-color:transparent;}"),RangeControl=(0,emotion_styled_base_browser_esm.Z)(range_control.Z,{target:"ez9hsf45"})("flex:1;margin-right:",(0,space.D)(2),";"),interactiveHueStyles=`\n.react-colorful__interactive {\n\twidth: calc( 100% - ${(0,space.D)(2)} );\n\tmargin-left: ${(0,space.D)(1)};\n}`,AuxiliaryColorArtefactWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ez9hsf44"})("padding-top:",(0,space.D)(2),";padding-right:0;padding-left:0;padding-bottom:0;"),AuxiliaryColorArtefactHStackHeader=(0,emotion_styled_base_browser_esm.Z)(h_stack_component.Z,{target:"ez9hsf43"})("padding-left:",(0,space.D)(4),";padding-right:",(0,space.D)(4),";"),ColorInputWrapper=(0,emotion_styled_base_browser_esm.Z)(component.Z,{target:"ez9hsf42"})("padding-top:",(0,space.D)(4),";padding-left:",(0,space.D)(4),";padding-right:",(0,space.D)(3),";padding-bottom:",(0,space.D)(5),";"),ColorfulWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ez9hsf41"})(box_sizing.p,";width:216px;.react-colorful{display:flex;flex-direction:column;align-items:center;width:216px;height:auto;overflow:hidden;}.react-colorful__saturation{width:100%;border-radius:0;height:216px;margin-bottom:",(0,space.D)(4),";border-bottom:none;}.react-colorful__hue,.react-colorful__alpha{width:184px;height:16px;border-radius:16px;margin-bottom:",(0,space.D)(2),";}.react-colorful__pointer{height:16px;width:16px;border:none;box-shadow:0 0 2px 0 rgba( 0, 0, 0, 0.25 );outline:2px solid transparent;}.react-colorful__pointer-fill{box-shadow:inset 0 0 0 ",config_values.Z.borderWidthFocus," #fff;}",interactiveHueStyles,";"),CopyButton=(0,emotion_styled_base_browser_esm.Z)(src_button.ZP,{target:"ez9hsf40"})("&&&&&{min-width:",(0,space.D)(6),";padding:0;>svg{margin-right:0;}}");var use_copy_to_clipboard=__webpack_require__("./packages/compose/build-module/hooks/use-copy-to-clipboard/index.js"),copy=__webpack_require__("./packages/icons/build-module/library/copy.js"),text_component=__webpack_require__("./packages/components/src/text/component.js"),tooltip_component=__webpack_require__("./packages/components/src/ui/tooltip/component.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ColorCopyButton=props=>{const{color,colorType}=props,[copiedColor,setCopiedColor]=(0,react.useState)(null),copyTimer=(0,react.useRef)(),copyRef=(0,use_copy_to_clipboard.Z)((()=>{switch(colorType){case"hsl":return color.toHslString();case"rgb":return color.toRgbString();default:return color.toHex()}}),(()=>{copyTimer.current&&clearTimeout(copyTimer.current),setCopiedColor(color.toHex()),copyTimer.current=setTimeout((()=>{setCopiedColor(null),copyTimer.current=void 0}),3e3)}));return(0,react.useEffect)((()=>()=>{copyTimer.current&&clearTimeout(copyTimer.current)}),[]),(0,jsx_runtime.jsx)(tooltip_component.Z,{content:(0,jsx_runtime.jsx)(text_component.Z,{color:"white",children:copiedColor===color.toHex()?(0,build_module.__)("Copied!"):(0,build_module.__)("Copy")}),placement:"bottom",children:(0,jsx_runtime.jsx)(CopyButton,{isSmall:!0,ref:copyRef,icon:copy.Z,showTooltip:!1})})};ColorCopyButton.displayName="ColorCopyButton";var spacer_component=__webpack_require__("./packages/components/src/spacer/component.tsx"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js");const InputWithSlider=({min,max,label,abbreviation,onChange,value})=>(0,jsx_runtime.jsxs)(h_stack_component.Z,{spacing:4,children:[(0,jsx_runtime.jsx)(NumberControlWrapper,{min,max,label,hideLabelFromVision:!0,value,onChange:newValue=>{onChange(newValue?"string"!=typeof newValue?newValue:parseInt(newValue,10):0)},prefix:(0,jsx_runtime.jsx)(spacer_component.Z,{as:text_component.Z,paddingLeft:(0,space.D)(4),color:colors_values.D.ui.theme,lineHeight:1,children:abbreviation}),spinControls:"none",size:"__unstable-large"}),(0,jsx_runtime.jsx)(RangeControl,{__nextHasNoMarginBottom:!0,label,hideLabelFromVision:!0,min,max,value,onChange,withInputField:!1})]});InputWithSlider.displayName="InputWithSlider";const RgbInput=({color,onChange,enableAlpha})=>{const{r,g,b,a}=color.toRgb();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InputWithSlider,{min:0,max:255,label:"Red",abbreviation:"R",value:r,onChange:nextR=>onChange((0,colord.Vi)({r:nextR,g,b,a}))}),(0,jsx_runtime.jsx)(InputWithSlider,{min:0,max:255,label:"Green",abbreviation:"G",value:g,onChange:nextG=>onChange((0,colord.Vi)({r,g:nextG,b,a}))}),(0,jsx_runtime.jsx)(InputWithSlider,{min:0,max:255,label:"Blue",abbreviation:"B",value:b,onChange:nextB=>onChange((0,colord.Vi)({r,g,b:nextB,a}))}),enableAlpha&&(0,jsx_runtime.jsx)(InputWithSlider,{min:0,max:100,label:"Alpha",abbreviation:"A",value:Math.trunc(100*a),onChange:nextA=>onChange((0,colord.Vi)({r,g,b,a:nextA/100}))})]})},HslInput=({color,onChange,enableAlpha})=>{const{h,s,l,a}=color.toHsl();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InputWithSlider,{min:0,max:359,label:"Hue",abbreviation:"H",value:h,onChange:nextH=>{onChange((0,colord.Vi)({h:nextH,s,l,a}))}}),(0,jsx_runtime.jsx)(InputWithSlider,{min:0,max:100,label:"Saturation",abbreviation:"S",value:s,onChange:nextS=>{onChange((0,colord.Vi)({h,s:nextS,l,a}))}}),(0,jsx_runtime.jsx)(InputWithSlider,{min:0,max:100,label:"Lightness",abbreviation:"L",value:l,onChange:nextL=>{onChange((0,colord.Vi)({h,s,l:nextL,a}))}}),enableAlpha&&(0,jsx_runtime.jsx)(InputWithSlider,{min:0,max:100,label:"Alpha",abbreviation:"A",value:Math.trunc(100*a),onChange:nextA=>{onChange((0,colord.Vi)({h,s,l,a:nextA/100}))}})]})};var input_control=__webpack_require__("./packages/components/src/input-control/index.tsx");const HexInput=({color,onChange,enableAlpha})=>(0,jsx_runtime.jsx)(input_control.gs,{prefix:(0,jsx_runtime.jsx)(spacer_component.Z,{as:text_component.Z,marginLeft:(0,space.D)(4),color:colors_values.D.ui.theme,lineHeight:1,children:"#"}),value:color.toHex().slice(1).toUpperCase(),onChange:nextValue=>{if(!nextValue)return;const hexValue=nextValue.startsWith("#")?nextValue:"#"+nextValue;onChange((0,colord.Vi)(hexValue))},maxLength:enableAlpha?9:7,label:(0,build_module.__)("Hex color"),hideLabelFromVision:!0,size:"__unstable-large",__unstableStateReducer:(state,action)=>{const nativeEvent=action.payload?.event?.nativeEvent;if("insertFromPaste"!==nativeEvent?.inputType)return{...state};const value=state.value?.startsWith("#")?state.value.slice(1).toUpperCase():state.value?.toUpperCase();return{...state,value}},__unstableInputWidth:"9em"});HexInput.displayName="HexInput";const ColorInput=({colorType,color,onChange,enableAlpha})=>{const props={color,onChange,enableAlpha};switch(colorType){case"hsl":return(0,jsx_runtime.jsx)(HslInput,{...props});case"rgb":return(0,jsx_runtime.jsx)(RgbInput,{...props});default:return(0,jsx_runtime.jsx)(HexInput,{...props})}};var index_module=__webpack_require__("./node_modules/react-colorful/dist/index.module.js");const Picker=({color,enableAlpha,onChange})=>{const Component=enableAlpha?index_module.ef:index_module.W_,rgbColor=(0,react.useMemo)((()=>color.toRgbString()),[color]);return(0,jsx_runtime.jsx)(Component,{color:rgbColor,onChange:nextColor=>{onChange((0,colord.Vi)(nextColor))}})};Picker.displayName="Picker";var use_controlled_value=__webpack_require__("./packages/components/src/utils/hooks/use-controlled-value.ts");(0,colord.l7)([names.Z]);const options=[{label:"RGB",value:"rgb"},{label:"HSL",value:"hsl"},{label:"Hex",value:"hex"}],UnconnectedColorPicker=(props,forwardedRef)=>{const{enableAlpha=!1,color:colorProp,onChange,defaultValue="#fff",copyFormat,...divProps}=(0,use_context_system.y)(props,"ColorPicker"),[color,setColor]=(0,use_controlled_value.O)({onChange,value:colorProp,defaultValue}),safeColordColor=(0,react.useMemo)((()=>(0,colord.Vi)(color||"")),[color]),debouncedSetColor=(0,use_debounce.Z)(setColor),handleChange=(0,react.useCallback)((nextValue=>{debouncedSetColor(nextValue.toHex())}),[debouncedSetColor]),[colorType,setColorType]=(0,react.useState)(copyFormat||"hex");return(0,jsx_runtime.jsxs)(ColorfulWrapper,{ref:forwardedRef,...divProps,children:[(0,jsx_runtime.jsx)(Picker,{onChange:handleChange,color:safeColordColor,enableAlpha}),(0,jsx_runtime.jsxs)(AuxiliaryColorArtefactWrapper,{children:[(0,jsx_runtime.jsxs)(AuxiliaryColorArtefactHStackHeader,{justify:"space-between",children:[(0,jsx_runtime.jsx)(SelectControl,{__nextHasNoMarginBottom:!0,options,value:colorType,onChange:nextColorType=>setColorType(nextColorType),label:(0,build_module.__)("Color format"),hideLabelFromVision:!0}),(0,jsx_runtime.jsx)(ColorCopyButton,{color:safeColordColor,colorType:copyFormat||colorType})]}),(0,jsx_runtime.jsx)(ColorInputWrapper,{direction:"column",gap:2,children:(0,jsx_runtime.jsx)(ColorInput,{colorType,color:safeColordColor,onChange:handleChange,enableAlpha})})]})]})};UnconnectedColorPicker.displayName="UnconnectedColorPicker";const ColorPicker=(0,context_connect.Iq)(UnconnectedColorPicker,"ColorPicker"),color_picker_component=ColorPicker},"./packages/components/src/select-control/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>SelectControl,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/base-control/index.tsx"),_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/input-control/input-base.tsx"),_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/select-control/styles/select-control-styles.ts"),_chevron_down__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/select-control/chevron-down.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function UnforwardedSelectControl(props,ref){const{className,disabled=!1,help,hideLabelFromVision,id:idProp,label,multiple=!1,onBlur=noop,onChange,onFocus=noop,options=[],size="default",value:valueProp,labelPosition="top",children,prefix,suffix,__next36pxDefaultSize=!1,__nextHasNoMarginBottom=!1,...restProps}=props,[isFocused,setIsFocused]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),id=function useUniqueId(idProp){const instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.Z)(SelectControl);return idProp||`inspector-select-control-${instanceId}`}(idProp),helpId=help?`${id}__help`:void 0;if(!options?.length&&!children)return null;const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-select-control",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_4__.ZP,{help,id,__nextHasNoMarginBottom,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__.Z,{className:classes,disabled,hideLabelFromVision,id,isFocused,label,size,suffix:suffix||!multiple&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chevron_down__WEBPACK_IMPORTED_MODULE_6__.Z,{}),prefix,labelPosition,__next36pxDefaultSize,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__.Ph,{...restProps,__next36pxDefaultSize,"aria-describedby":helpId,className:"components-select-control__input",disabled,id,multiple,onBlur:event=>{onBlur(event),setIsFocused(!1)},onChange:event=>{if(props.multiple){const newValues=Array.from(event.target.options).filter((({selected})=>selected)).map((({value})=>value));props.onChange?.(newValues,{event})}else props.onChange?.(event.target.value,{event})},onFocus:event=>{onFocus(event),setIsFocused(!0)},ref,selectSize:size,value:valueProp,children:children||options.map(((option,index)=>{const key=option.id||`${option.label}-${option.value}-${index}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option",{value:option.value,disabled:option.disabled,hidden:option.hidden,children:option.label},key)}))})})})}UnforwardedSelectControl.displayName="UnforwardedSelectControl";const SelectControl=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(UnforwardedSelectControl),__WEBPACK_DEFAULT_EXPORT__=SelectControl},"./packages/components/src/ui/tooltip/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tooltip_component});var styles_namespaceObject={};__webpack_require__.r(styles_namespaceObject),__webpack_require__.d(styles_namespaceObject,{TooltipContent:()=>TooltipContent,TooltipPopoverView:()=>TooltipPopoverView,TooltipShortcut:()=>TooltipShortcut,noOutline:()=>noOutline});var TooltipState=__webpack_require__("./node_modules/reakit/es/Tooltip/TooltipState.js"),TooltipReference=__webpack_require__("./node_modules/reakit/es/Tooltip/TooltipReference.js"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts");const TooltipContext=(0,react.createContext)({});var Tooltip=__webpack_require__("./node_modules/reakit/es/Tooltip/Tooltip.js"),component=__webpack_require__("./packages/components/src/view/component.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Shortcut(props,forwardedRef){const{as:asProp="span",shortcut,className,...otherProps}=(0,use_context_system.y)(props,"Shortcut");if(!shortcut)return null;let displayText,ariaLabel;return"string"==typeof shortcut?displayText=shortcut:(displayText=shortcut.display,ariaLabel=shortcut.ariaLabel),(0,jsx_runtime.jsx)(component.Z,{as:asProp,className,"aria-label":ariaLabel,ref:forwardedRef,...otherProps,children:displayText})}Shortcut.displayName="Shortcut";const shortcut_component=(0,context_connect.Iq)(Shortcut,"Shortcut");var config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),space=__webpack_require__("./packages/components/src/ui/utils/space.ts"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js");const TooltipContent=(0,emotion_react_browser_esm.iv)("z-index:",1000002,";box-sizing:border-box;opacity:0;outline:none;transform-origin:top center;transition:opacity ",config_values.Z.transitionDurationFastest," ease;font-size:",config_values.Z.fontSize,";&[data-enter]{opacity:1;}",""),TooltipPopoverView=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e7tfjmw1"})("background:rgba( 0, 0, 0, 0.8 );border-radius:2px;box-shadow:0 0 0 1px rgba( 255, 255, 255, 0.04 );color:",colors_values.D.white,";padding:4px 8px;"),noOutline={name:"12mkfdx",styles:"outline:none"},TooltipShortcut=(0,emotion_styled_base_browser_esm.Z)(shortcut_component,{target:"e7tfjmw0"})("display:inline-block;margin-left:",(0,space.D)(1),";");var use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");const{TooltipPopoverView:content_TooltipPopoverView}=styles_namespaceObject;function content_TooltipContent(props,forwardedRef){const{children,className,...otherProps}=(0,use_context_system.y)(props,"TooltipContent"),{tooltip}=(0,react.useContext)(TooltipContext),classes=(0,use_cx.I)()(TooltipContent,className);return(0,jsx_runtime.jsx)(Tooltip.u,{as:component.Z,...otherProps,...tooltip,className:classes,ref:forwardedRef,children:(0,jsx_runtime.jsx)(content_TooltipPopoverView,{children})})}content_TooltipContent.displayName="TooltipContent",content_TooltipContent.__docgenInfo={description:"@param {import('../context').WordPressComponentProps<import('./types').ContentProps, 'div'>} props\n@param {import('react').ForwardedRef<any>}                                                   forwardedRef",methods:[],displayName:"TooltipContent"};const tooltip_content=(0,context_connect.Iq)(content_TooltipContent,"TooltipContent");function component_Tooltip(props,forwardedRef){const{animated=!0,animationDuration=160,baseId,children,content,focusable=!0,gutter=4,id,modal=!0,placement,visible=!1,shortcut,...otherProps}=(0,use_context_system.y)(props,"Tooltip"),tooltip=(0,TooltipState.K)({animated:animated?animationDuration:void 0,baseId:baseId||id,gutter,placement,visible,...otherProps}),contextProps=(0,react.useMemo)((()=>({tooltip})),[tooltip]);return(0,jsx_runtime.jsxs)(TooltipContext.Provider,{value:contextProps,children:[content&&(0,jsx_runtime.jsxs)(tooltip_content,{unstable_portal:modal,ref:forwardedRef,children:[content,shortcut&&(0,jsx_runtime.jsx)(TooltipShortcut,{shortcut})]}),children&&(0,jsx_runtime.jsx)(TooltipReference.v,{...tooltip,...children.props,ref:children?.ref,children:referenceProps=>(focusable||(referenceProps.tabIndex=void 0),(0,react.cloneElement)(children,referenceProps))})]})}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/tooltip/content.js"]={name:"TooltipContent",docgenInfo:content_TooltipContent.__docgenInfo,path:"packages/components/src/ui/tooltip/content.js"}),component_Tooltip.displayName="Tooltip";const tooltip_component=(0,context_connect.Iq)(component_Tooltip,"Tooltip");component_Tooltip.__docgenInfo={description:"@param {import('../context').WordPressComponentProps<import('./types').Props, 'div'>} props\n@param {import('react').ForwardedRef<any>}                                            forwardedRef",methods:[],displayName:"Tooltip"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/tooltip/component.js"]={name:"Tooltip",docgenInfo:component_Tooltip.__docgenInfo,path:"packages/components/src/ui/tooltip/component.js"})},"./packages/components/src/utils/hooks/use-controlled-value.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useControlledValue});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useControlledValue({defaultValue,onChange,value:valueProp}){const hasValue=void 0!==valueProp,initialValue=hasValue?valueProp:defaultValue,[state,setState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);let setValue;return setValue=hasValue&&"function"==typeof onChange?onChange:hasValue||"function"!=typeof onChange?setState:nextValue=>{onChange(nextValue),setState(nextValue)},[hasValue?valueProp:state,setValue]}},"./packages/compose/build-module/hooks/use-copy-to-clipboard/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useCopyToClipboard});var clipboard__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clipboard/dist/clipboard.js"),clipboard__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_use_ref_effect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-ref-effect/index.js");function useUpdatedRef(value){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(value);return ref.current=value,ref}function useCopyToClipboard(text,onSuccess){const textRef=useUpdatedRef(text),onSuccessRef=useUpdatedRef(onSuccess);return(0,_use_ref_effect__WEBPACK_IMPORTED_MODULE_2__.Z)((node=>{const clipboard=new(clipboard__WEBPACK_IMPORTED_MODULE_0___default())(node,{text:()=>"function"==typeof textRef.current?textRef.current():textRef.current||""});return clipboard.on("success",(({clearSelection})=>{clearSelection(),node.focus(),onSuccessRef.current&&onSuccessRef.current()})),()=>{clipboard.destroy()}}),[])}},"./packages/icons/build-module/library/copy.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"}))}}]);