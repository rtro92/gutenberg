"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6481],{"./packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AspectRatioTool});var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/select-control/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_ASPECT_RATIO_OPTIONS=[{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Original","Aspect ratio option for dimensions control"),value:"auto"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Square - 1:1","Aspect ratio option for dimensions control"),value:"1"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Standard - 4:3","Aspect ratio option for dimensions control"),value:"4/3"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Portrait - 3:4","Aspect ratio option for dimensions control"),value:"3/4"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Classic - 3:2","Aspect ratio option for dimensions control"),value:"3/2"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Classic Portrait - 2:3","Aspect ratio option for dimensions control"),value:"2/3"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Wide - 16:9","Aspect ratio option for dimensions control"),value:"16/9"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Tall - 9:16","Aspect ratio option for dimensions control"),value:"9/16"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Custom","Aspect ratio option for dimensions control"),value:"custom",disabled:!0,hidden:!0}];function AspectRatioTool({panelId,value,onChange=()=>{},options=DEFAULT_ASPECT_RATIO_OPTIONS,defaultValue=DEFAULT_ASPECT_RATIO_OPTIONS[0].value,isShownByDefault=!0}){const displayValue=null!=value?value:"auto";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Z,{hasValue:()=>displayValue!==defaultValue,label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect ratio"),onDeselect:()=>onChange(void 0),isShownByDefault,panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect ratio"),value:displayValue,options,onChange,size:"__unstable-large",__nextHasNoMarginBottom:!0})})}AspectRatioTool.displayName="AspectRatioTool",AspectRatioTool.__docgenInfo={description:"@typedef {Object} AspectRatioToolProps\n@property {string}                       [panelId]          ID of the panel this tool is associated with.\n@property {string}                       [value]            Current aspect ratio value.\n@property {AspectRatioToolPropsOnChange} [onChange]         Callback to update the aspect ratio value.\n@property {SelectControlProps[]}         [options]          Aspect ratio options.\n@property {string}                       [defaultValue]     Default aspect ratio value.\n@property {boolean}                      [isShownByDefault] Whether the tool is shown by default.",methods:[],displayName:"AspectRatioTool",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},options:{defaultValue:{value:"[\n\t{\n\t\tlabel: _x( 'Original', 'Aspect ratio option for dimensions control' ),\n\t\tvalue: 'auto',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Square - 1:1',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '1',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Standard - 4:3',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '4/3',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Portrait - 3:4',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '3/4',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Classic - 3:2',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '3/2',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Classic Portrait - 2:3',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '2/3',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Wide - 16:9',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '16/9',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Tall - 9:16',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '9/16',\n\t},\n\t{\n\t\tlabel: _x( 'Custom', 'Aspect ratio option for dimensions control' ),\n\t\tvalue: 'custom',\n\t\tdisabled: true,\n\t\thidden: true,\n\t},\n]",computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_ASPECT_RATIO_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js"]={name:"AspectRatioTool",docgenInfo:AspectRatioTool.__docgenInfo,path:"packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js"})},"./packages/block-editor/src/components/dimensions-tool/scale-tool.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ScaleTool});var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_SCALE_OPTIONS=[{value:"fill",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Fill","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill the space by stretching the content.")},{value:"contain",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Contain","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fit the content to the space without clipping.")},{value:"cover",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Cover","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill the space by clipping what doesn't fit.")},{value:"none",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("None","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.")},{value:"scale-down",label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Scale down","Scale option for dimensions control"),help:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.")}];function ScaleTool({panelId,value,onChange,options=DEFAULT_SCALE_OPTIONS,defaultValue=DEFAULT_SCALE_OPTIONS[0].value,isShownByDefault=!0}){const displayValue=null!=value?value:"fill",scaleHelp=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>options.reduce(((acc,option)=>(acc[option.value]=option.help,acc)),{})),[options]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale"),isShownByDefault,hasValue:()=>displayValue!==defaultValue,onDeselect:()=>onChange(defaultValue),panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scale"),isBlock:!0,help:scaleHelp[displayValue],value:displayValue,onChange,__nextHasNoMarginBottom:!0,children:options.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Z,{...option},option.value)))})})}ScaleTool.displayName="ScaleTool",ScaleTool.__docgenInfo={description:"A tool to select the CSS object-fit property for the image.\n\n@param {ScaleToolProps} props\n\n@return {import('@wordpress/element').WPElement} The scale tool.",methods:[],displayName:"ScaleTool",props:{options:{defaultValue:{value:"[\n\t{\n\t\tvalue: 'fill',\n\t\tlabel: _x( 'Fill', 'Scale option for dimensions control' ),\n\t\thelp: __( 'Fill the space by stretching the content.' ),\n\t},\n\t{\n\t\tvalue: 'contain',\n\t\tlabel: _x( 'Contain', 'Scale option for dimensions control' ),\n\t\thelp: __( 'Fit the content to the space without clipping.' ),\n\t},\n\t{\n\t\tvalue: 'cover',\n\t\tlabel: _x( 'Cover', 'Scale option for dimensions control' ),\n\t\thelp: __( \"Fill the space by clipping what doesn't fit.\" ),\n\t},\n\t{\n\t\tvalue: 'none',\n\t\tlabel: _x( 'None', 'Scale option for dimensions control' ),\n\t\thelp: __(\n\t\t\t'Do not adjust the sizing of the content. Content that is too large will be clipped, and content that is too small will have additional padding.'\n\t\t),\n\t},\n\t{\n\t\tvalue: 'scale-down',\n\t\tlabel: _x( 'Scale down', 'Scale option for dimensions control' ),\n\t\thelp: __(\n\t\t\t'Scale down the content to fit the space if it is too big. Content that is too small will have additional padding.'\n\t\t),\n\t},\n]",computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_SCALE_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/dimensions-tool/scale-tool.js"]={name:"ScaleTool",docgenInfo:ScaleTool.__docgenInfo,path:"packages/block-editor/src/components/dimensions-tool/scale-tool.js"})},"./packages/block-editor/src/components/dimensions-tool/width-height-tool.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>WidthHeightTool});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/unit-control/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SingleColumnToolsPanelItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{target:"ef8pe3d0"})({name:"957xgf",styles:"grid-column:span 1"});function WidthHeightTool({panelId,value={},onChange=()=>{},units,isShownByDefault=!0}){var _value$width,_value$height;const width="auto"===value.width?"":null!==(_value$width=value.width)&&void 0!==_value$width?_value$width:"",height="auto"===value.height?"":null!==(_value$height=value.height)&&void 0!==_value$height?_value$height:"",onDimensionChange=dimension=>nextDimension=>{const nextValue={...value};nextDimension?nextValue[dimension]=nextDimension:delete nextValue[dimension],onChange(nextValue)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SingleColumnToolsPanelItem,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),isShownByDefault,hasValue:()=>""!==width,onDeselect:onDimensionChange("width"),panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width"),placeholder:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto"),labelPosition:"top",units,min:0,value:width,onChange:onDimensionChange("width"),size:"__unstable-large"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SingleColumnToolsPanelItem,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),isShownByDefault,hasValue:()=>""!==height,onDeselect:onDimensionChange("height"),panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ZP,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height"),placeholder:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto"),labelPosition:"top",units,min:0,value:height,onChange:onDimensionChange("height"),size:"__unstable-large"})})]})}WidthHeightTool.__docgenInfo={description:"Component that renders controls to edit the dimensions of an image or container.\n\n@param {WidthHeightToolProps} props The component props.\n\n@return {import('@wordpress/element').WPElement} The width and height tool.",methods:[],displayName:"WidthHeightTool",props:{value:{defaultValue:{value:"{}",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/dimensions-tool/width-height-tool.js"]={name:"WidthHeightTool",docgenInfo:WidthHeightTool.__docgenInfo,path:"packages/block-editor/src/components/dimensions-tool/width-height-tool.js"})},"./packages/components/build-module/panel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>panel});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const panel_header=function PanelHeader({label,children}){return(0,react.createElement)("div",{className:"components-panel__header"},label&&(0,react.createElement)("h2",null,label),children)};const panel=(0,react.forwardRef)((function UnforwardedPanel({header,className,children},ref){const classNames=classnames_default()(className,"components-panel");return(0,react.createElement)("div",{className:classNames,ref},header&&(0,react.createElement)(panel_header,{label:header}),children)}))},"./packages/components/build-module/select-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>SelectControl,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/base-control/index.js"),_input_control_input_base__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/input-control/input-base.js"),_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/select-control/styles/select-control-styles.js"),_chevron_down__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/select-control/chevron-down.js");const noop=()=>{};const SelectControl=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function UnforwardedSelectControl(props,ref){const{className,disabled=!1,help,hideLabelFromVision,id:idProp,label,multiple=!1,onBlur=noop,onChange,onFocus=noop,options=[],size="default",value:valueProp,labelPosition="top",children,prefix,suffix,__next36pxDefaultSize=!1,__nextHasNoMarginBottom=!1,...restProps}=props,[isFocused,setIsFocused]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),id=function useUniqueId(idProp){const instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.Z)(SelectControl);return idProp||`inspector-select-control-${instanceId}`}(idProp),helpId=help?`${id}__help`:void 0;if(!options?.length&&!children)return null;const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-select-control",className);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_base_control__WEBPACK_IMPORTED_MODULE_3__.ZP,{help,id,__nextHasNoMarginBottom},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_input_control_input_base__WEBPACK_IMPORTED_MODULE_4__.Z,{className:classes,disabled,hideLabelFromVision,id,isFocused,label,size,suffix:suffix||!multiple&&(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_chevron_down__WEBPACK_IMPORTED_MODULE_5__.Z,null),prefix,labelPosition,__next36pxDefaultSize},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_6__.Ph,{...restProps,__next36pxDefaultSize,"aria-describedby":helpId,className:"components-select-control__input",disabled,id,multiple,onBlur:event=>{onBlur(event),setIsFocused(!1)},onChange:event=>{if(props.multiple){const newValues=Array.from(event.target.options).filter((({selected})=>selected)).map((({value})=>value));props.onChange?.(newValues,{event})}else props.onChange?.(event.target.value,{event})},onFocus:event=>{onFocus(event),setIsFocused(!0)},ref,selectSize:size,value:valueProp},children||options.map(((option,index)=>{const key=option.id||`${option.label}-${option.value}-${index}`;return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("option",{key,value:option.value,disabled:option.disabled,hidden:option.hidden},option.label)})))))})),__WEBPACK_DEFAULT_EXPORT__=SelectControl},"./packages/components/build-module/toggle-group-control/toggle-group-control-option/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/toggle-group-control/toggle-group-control-option-base/component.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function UnforwardedToggleGroupControlOption(props,ref){const{label,...restProps}=props,optionLabel=restProps["aria-label"]||label;return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_1__.Z,{...restProps,"aria-label":optionLabel,ref},label)}))},"./packages/block-editor/src/components/dimensions-tool/stories/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),panel=__webpack_require__("./packages/components/build-module/panel/index.js"),component=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel/component.js"),aspect_ratio_tool=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js"),scale_tool=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/scale-tool.js"),width_height_tool=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/width-height-tool.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DimensionsTool({panelId,value={},onChange=()=>{},aspectRatioOptions,defaultAspectRatio="auto",scaleOptions,defaultScale="fill",unitsOptions}){const width=void 0===value.width||"auto"===value.width?null:value.width,height=void 0===value.height||"auto"===value.height?null:value.height,aspectRatio=void 0===value.aspectRatio||"auto"===value.aspectRatio?null:value.aspectRatio,scale=void 0===value.scale||"fill"===value.scale?null:value.scale,[lastScale,setLastScale]=(0,react.useState)(scale),[lastAspectRatio,setLastAspectRatio]=(0,react.useState)(aspectRatio),aspectRatioValue=width&&height?"custom":lastAspectRatio,showScaleControl=aspectRatio||width&&height;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(aspect_ratio_tool.Z,{panelId,options:aspectRatioOptions,defaultValue:defaultAspectRatio,value:aspectRatioValue,onChange:nextAspectRatio=>{const nextValue={...value};setLastAspectRatio(nextAspectRatio="auto"===nextAspectRatio?null:nextAspectRatio),nextAspectRatio?nextValue.aspectRatio=nextAspectRatio:delete nextValue.aspectRatio,nextAspectRatio?lastScale?nextValue.scale=lastScale:(nextValue.scale=defaultScale,setLastScale(defaultScale)):delete nextValue.scale,"custom"!==nextAspectRatio&&width&&height&&delete nextValue.height,onChange(nextValue)}}),showScaleControl&&(0,jsx_runtime.jsx)(scale_tool.Z,{panelId,options:scaleOptions,defaultValue:defaultScale,value:lastScale,onChange:nextScale=>{const nextValue={...value};setLastScale(nextScale="fill"===nextScale?null:nextScale),nextScale?nextValue.scale=nextScale:delete nextValue.scale,onChange(nextValue)}}),(0,jsx_runtime.jsx)(width_height_tool.Z,{panelId,units:unitsOptions,value:{width,height},onChange:({width:nextWidth,height:nextHeight})=>{const nextValue={...value};nextHeight="auto"===nextHeight?null:nextHeight,(nextWidth="auto"===nextWidth?null:nextWidth)?nextValue.width=nextWidth:delete nextValue.width,nextHeight?nextValue.height=nextHeight:delete nextValue.height,nextWidth&&nextHeight?delete nextValue.aspectRatio:lastAspectRatio&&(nextValue.aspectRatio=lastAspectRatio),lastAspectRatio||!!nextWidth==!!nextHeight?lastScale?nextValue.scale=lastScale:(nextValue.scale=defaultScale,setLastScale(defaultScale)):delete nextValue.scale,onChange(nextValue)}})]})}DimensionsTool.__docgenInfo={description:"Component that renders controls to edit the dimensions of an image or container.\n\n@param {DimensionsControlsProps} props The component props.\n\n@return {WPElement} The dimensions controls.",methods:[],displayName:"DimensionsTool",props:{value:{defaultValue:{value:"{}",computed:!1},required:!1},onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},defaultAspectRatio:{defaultValue:{value:"'auto'",computed:!1},required:!1},defaultScale:{defaultValue:{value:"'fill'",computed:!1},required:!1}}};const dimensions_tool=DimensionsTool;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/dimensions-tool/index.js"]={name:"DimensionsTool",docgenInfo:DimensionsTool.__docgenInfo,path:"packages/block-editor/src/components/dimensions-tool/index.js"});const stories={parameters:{sourceLink:"packages/block-editor/src/components/dimensions-tool",storySource:{source:"/**\n * WordPress dependencies\n */\nimport { useState } from '@wordpress/element';\nimport {\n\tPanel,\n\t__experimentalToolsPanel as ToolsPanel,\n} from '@wordpress/components';\n\n/**\n * Internal dependencies\n */\nimport DimensionsTool from '..';\n\nexport default {\n\ttitle: 'BlockEditor (Private APIs)/DimensionsTool',\n\tcomponent: DimensionsTool,\n\targTypes: {\n\t\tpanelId: { control: { type: null } },\n\t\tonChange: { action: 'changed' },\n\t},\n};\n\nconst EMPTY_OBJECT = {};\n\nexport const Default = ( { panelId, onChange, ...props } ) => {\n\tconst [ value, setValue ] = useState( EMPTY_OBJECT );\n\tconst resetAll = () => {\n\t\tsetValue( EMPTY_OBJECT );\n\t\tonChange( EMPTY_OBJECT );\n\t};\n\treturn (\n\t\t<Panel>\n\t\t\t<ToolsPanel\n\t\t\t\tlabel=\"Dimensions\"\n\t\t\t\tpanelId={ panelId }\n\t\t\t\tresetAll={ resetAll }\n\t\t\t>\n\t\t\t\t<DimensionsTool\n\t\t\t\t\tpanelId={ panelId }\n\t\t\t\t\tonChange={ ( nextValue ) => {\n\t\t\t\t\t\tsetValue( nextValue );\n\t\t\t\t\t\tonChange( nextValue );\n\t\t\t\t\t} }\n\t\t\t\t\tvalue={ value }\n\t\t\t\t\t{ ...props }\n\t\t\t\t/>\n\t\t\t</ToolsPanel>\n\t\t</Panel>\n\t);\n};\nDefault.args = {\n\tpanelId: 'panel-id',\n};\n",locationsMap:{default:{startLoc:{col:23,line:26},endLoc:{col:1,line:51},startBody:{col:23,line:26},endBody:{col:1,line:51}}}}},title:"BlockEditor (Private APIs)/DimensionsTool",component:dimensions_tool,argTypes:{panelId:{control:{type:null}},onChange:{action:"changed"}}},EMPTY_OBJECT={},Default=({panelId,onChange,...props})=>{const[value,setValue]=(0,react.useState)(EMPTY_OBJECT);return(0,jsx_runtime.jsx)(panel.Z,{children:(0,jsx_runtime.jsx)(component.Z,{label:"Dimensions",panelId,resetAll:()=>{setValue(EMPTY_OBJECT),onChange(EMPTY_OBJECT)},children:(0,jsx_runtime.jsx)(dimensions_tool,{panelId,onChange:nextValue=>{setValue(nextValue),onChange(nextValue)},value,...props})})})};Default.displayName="Default",Default.args={panelId:"panel-id"},Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/block-editor/src/components/dimensions-tool/stories/index.js"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"packages/block-editor/src/components/dimensions-tool/stories/index.js"})}}]);