(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[3588],{"./packages/components/src/flex/flex-block/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>flex_block_component});var context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/flex/flex-item/hook.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedFlexBlock(props,forwardedRef){const flexBlockProps=function useFlexBlock(props){const otherProps=(0,use_context_system.y)(props,"FlexBlock");return(0,hook.i)({isBlock:!0,...otherProps})}(props);return(0,jsx_runtime.jsx)(component.Z,{...flexBlockProps,ref:forwardedRef})}UnconnectedFlexBlock.displayName="UnconnectedFlexBlock";const flex_block_component=(0,context_connect.Iq)(UnconnectedFlexBlock,"FlexBlock")},"./packages/components/src/utils/hooks/use-controlled-state.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_values__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/utils/values.js");const defaultOptions={initial:void 0,fallback:""};const __WEBPACK_DEFAULT_EXPORT__=function useControlledState(currentState,options=defaultOptions){const{initial,fallback}={...defaultOptions,...options},[internalState,setInternalState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(currentState),hasCurrentState=(0,_values__WEBPACK_IMPORTED_MODULE_1__.Jf)(currentState);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{hasCurrentState&&internalState&&setInternalState(void 0)}),[hasCurrentState,internalState]),[(0,_values__WEBPACK_IMPORTED_MODULE_1__.Me)([currentState,internalState,initial],fallback),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextState=>{hasCurrentState||setInternalState(nextState)}),[hasCurrentState])]}},"./packages/icons/build-module/library/link-off.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"}))},"./packages/icons/build-module/library/link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"}))},"./node_modules/remove-accents/index.js":module=>{var characterMap={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,""),removeAccents=function(string){return string.replace(allAccents,(function(match){return characterMap[match]}))};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents},"./packages/components/src/box-control/stories/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_default:()=>_default,arbitrarySides:()=>arbitrarySides,axialControls:()=>axialControls,axialControlsWithSingleSide:()=>axialControlsWithSingleSide,default:()=>stories,singleSide:()=>singleSide});var react=__webpack_require__("./node_modules/react/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),base_control=__webpack_require__("./packages/components/src/base-control/index.tsx"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),component=__webpack_require__("./packages/components/src/flex/flex-item/component.tsx"),flex_block_component=__webpack_require__("./packages/components/src/flex/flex-block/component.tsx"),use_gesture_react_esm=__webpack_require__("./node_modules/@use-gesture/react/dist/use-gesture-react.esm.js"),tooltip=__webpack_require__("./packages/components/src/tooltip/index.js"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),flex_component=__webpack_require__("./packages/components/src/flex/flex/component.tsx"),unit_control=__webpack_require__("./packages/components/src/unit-control/index.tsx"),rtl=__webpack_require__("./packages/components/src/utils/rtl.js");const Root=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1jovhle6"})({name:"14bvcyk",styles:"box-sizing:border-box;max-width:235px;padding-bottom:12px;width:100%"}),Header=(0,emotion_styled_base_browser_esm.Z)(flex_component.Z,{target:"e1jovhle5"})({name:"5bhc30",styles:"margin-bottom:8px"}),HeaderControlWrapper=(0,emotion_styled_base_browser_esm.Z)(flex_component.Z,{target:"e1jovhle4"})({name:"aujtid",styles:"min-height:30px;gap:0"}),UnitControlWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1jovhle3"})({name:"112jwab",styles:"box-sizing:border-box;max-width:80px"}),LayoutContainer=(0,emotion_styled_base_browser_esm.Z)(flex_component.Z,{target:"e1jovhle2"})({name:"xy18ro",styles:"justify-content:center;padding-top:8px"}),Layout=(0,emotion_styled_base_browser_esm.Z)(flex_component.Z,{target:"e1jovhle1"})({name:"3tw5wk",styles:"position:relative;height:100%;width:100%;justify-content:flex-start"});var _ref={name:"1ch9yvl",styles:"border-radius:0"},_ref2={name:"tg3mx0",styles:"border-radius:2px"};const unitControlBorderRadiusStyles=({isFirst,isLast,isOnly})=>isFirst?(0,rtl.b)({borderTopRightRadius:0,borderBottomRightRadius:0})():isLast?(0,rtl.b)({borderTopLeftRadius:0,borderBottomLeftRadius:0})():isOnly?_ref2:_ref,unitControlMarginStyles=({isFirst,isOnly})=>{const marginLeft=isFirst||isOnly?0:-1;return(0,rtl.b)({marginLeft})()},UnitControl=(0,emotion_styled_base_browser_esm.Z)(unit_control.ZP,{target:"e1jovhle0"})("max-width:60px;",unitControlBorderRadiusStyles,";",unitControlMarginStyles,";");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function BoxUnitControl({isFirst,isLast,isOnly,onHoverOn=noop,onHoverOff=noop,label,value,...props}){const bindHoverGesture=(0,use_gesture_react_esm.XI)((({event,...state})=>{state.hovering?onHoverOn(event,state):onHoverOff(event,state)}));return(0,jsx_runtime.jsx)(UnitControlWrapper,{...bindHoverGesture(),children:(0,jsx_runtime.jsx)(Tooltip,{text:label,children:(0,jsx_runtime.jsx)(UnitControl,{"aria-label":label,className:"component-box-control__unit-control",isFirst,isLast,isOnly,isPressEnterToChange:!0,isResetValueOnUnitChange:!1,value,...props})})})}function Tooltip({children,text}){return text?(0,jsx_runtime.jsx)(tooltip.Z,{text,position:"top",children:(0,jsx_runtime.jsx)("div",{children})}):children}BoxUnitControl.displayName="BoxUnitControl",Tooltip.displayName="Tooltip";var utils=__webpack_require__("./packages/components/src/unit-control/utils.ts");const LABELS={all:(0,build_module.__)("All"),top:(0,build_module.__)("Top"),bottom:(0,build_module.__)("Bottom"),left:(0,build_module.__)("Left"),right:(0,build_module.__)("Right"),mixed:(0,build_module.__)("Mixed"),vertical:(0,build_module.__)("Vertical"),horizontal:(0,build_module.__)("Horizontal")},DEFAULT_VALUES={top:void 0,right:void 0,bottom:void 0,left:void 0},ALL_SIDES=["top","right","bottom","left"];function mode(arr){return arr.sort(((a,b)=>arr.filter((v=>v===a)).length-arr.filter((v=>v===b)).length)).pop()}function getAllValue(values={},selectedUnits,availableSides=ALL_SIDES){const parsedQuantitiesAndUnits=function normalizeSides(sides){const filteredSides=[];if(!sides?.length)return ALL_SIDES;if(sides.includes("vertical"))filteredSides.push("top","bottom");else if(sides.includes("horizontal"))filteredSides.push("left","right");else{const newSides=ALL_SIDES.filter((side=>sides.includes(side)));filteredSides.push(...newSides)}return filteredSides}(availableSides).map((side=>(0,utils.YX)(values[side]))),allParsedQuantities=parsedQuantitiesAndUnits.map((value=>{var _value$;return null!==(_value$=value[0])&&void 0!==_value$?_value$:""})),allParsedUnits=parsedQuantitiesAndUnits.map((value=>value[1])),commonQuantity=allParsedQuantities.every((v=>v===allParsedQuantities[0]))?allParsedQuantities[0]:"";let commonUnit;var _getAllUnitFallback;"number"==typeof commonQuantity?commonUnit=mode(allParsedUnits):commonUnit=null!==(_getAllUnitFallback=function getAllUnitFallback(selectedUnits){if(!selectedUnits||"object"!=typeof selectedUnits)return;const filteredUnits=Object.values(selectedUnits).filter(Boolean);return mode(filteredUnits)}(selectedUnits))&&void 0!==_getAllUnitFallback?_getAllUnitFallback:mode(allParsedUnits);return[commonQuantity,commonUnit].join("")}function isValuesMixed(values={},selectedUnits,sides=ALL_SIDES){const allValue=getAllValue(values,selectedUnits,sides);return isNaN(parseFloat(allValue))}function isValuesDefined(values){return void 0!==values&&Object.values(values).filter((value=>!!value&&/\d/.test(value))).length>0}function getInitialSide(isLinked,splitOnAxis){let initialSide="all";return isLinked||(initialSide=splitOnAxis?"vertical":"top"),initialSide}function applyValueToSides(currentValues,newValue,sides){const newValues={...currentValues};return sides?.length?sides.forEach((side=>{"vertical"===side?(newValues.top=newValue,newValues.bottom=newValue):"horizontal"===side?(newValues.left=newValue,newValues.right=newValue):newValues[side]=newValue})):ALL_SIDES.forEach((side=>newValues[side]=newValue)),newValues}const all_input_control_noop=()=>{};function AllInputControl({onChange=all_input_control_noop,onFocus=all_input_control_noop,onHoverOn=all_input_control_noop,onHoverOff=all_input_control_noop,values,sides,selectedUnits,setSelectedUnits,...props}){const allValue=getAllValue(values,selectedUnits,sides),isMixed=isValuesDefined(values)&&isValuesMixed(values,selectedUnits,sides),allPlaceholder=isMixed?LABELS.mixed:void 0;return(0,jsx_runtime.jsx)(BoxUnitControl,{...props,disableUnits:isMixed,isOnly:!0,value:allValue,onChange:next=>{const isNumeric=void 0!==next&&!isNaN(parseFloat(next)),nextValues=applyValueToSides(values,isNumeric?next:void 0,sides);onChange(nextValues)},onUnitChange:unit=>{const newUnits=applyValueToSides(selectedUnits,unit,sides);setSelectedUnits(newUnits)},onFocus:event=>{onFocus(event,{side:"all"})},onHoverOn:()=>{onHoverOn({top:!0,bottom:!0,left:!0,right:!0})},onHoverOff:()=>{onHoverOff({top:!1,bottom:!1,left:!1,right:!1})},placeholder:allPlaceholder})}AllInputControl.displayName="AllInputControl";const input_controls_noop=()=>{};function BoxInputControls({onChange=input_controls_noop,onFocus=input_controls_noop,onHoverOn=input_controls_noop,onHoverOff=input_controls_noop,values,selectedUnits,setSelectedUnits,sides,...props}){const createHandleOnFocus=side=>event=>{onFocus(event,{side})},createHandleOnHoverOn=side=>()=>{onHoverOn({[side]:!0})},createHandleOnHoverOff=side=>()=>{onHoverOff({[side]:!1})},createHandleOnChange=side=>(next,{event})=>{const nextValues={...values},nextValue=void 0!==next&&!isNaN(parseFloat(next))?next:void 0;if(nextValues[side]=nextValue,event.altKey)switch(side){case"top":nextValues.bottom=nextValue;break;case"bottom":nextValues.top=nextValue;break;case"left":nextValues.right=nextValue;break;case"right":nextValues.left=nextValue}(nextValues=>{onChange(nextValues)})(nextValues)},createHandleOnUnitChange=side=>next=>{const newUnits={...selectedUnits};newUnits[side]=next,setSelectedUnits(newUnits)},filteredSides=sides?.length?ALL_SIDES.filter((side=>sides.includes(side))):ALL_SIDES,first=filteredSides[0],last=filteredSides[filteredSides.length-1],only=first===last&&first;return(0,jsx_runtime.jsx)(LayoutContainer,{className:"component-box-control__input-controls-wrapper",children:(0,jsx_runtime.jsx)(Layout,{gap:0,align:"top",className:"component-box-control__input-controls",children:filteredSides.map((side=>{const[parsedQuantity,parsedUnit]=(0,utils.YX)(values[side]),computedUnit=values[side]?parsedUnit:selectedUnits[side];return(0,react.createElement)(BoxUnitControl,{...props,isFirst:first===side,isLast:last===side,isOnly:only===side,value:[parsedQuantity,computedUnit].join(""),onChange:createHandleOnChange(side),onUnitChange:createHandleOnUnitChange(side),onFocus:createHandleOnFocus(side),onHoverOn:createHandleOnHoverOn(side),onHoverOff:createHandleOnHoverOff(side),label:LABELS[side],key:`box-control-${side}`})}))})})}BoxInputControls.displayName="BoxInputControls";const groupedSides=["vertical","horizontal"];function AxialInputControls({onChange,onFocus,onHoverOn,onHoverOff,values,selectedUnits,setSelectedUnits,sides,...props}){const createHandleOnFocus=side=>event=>{onFocus&&onFocus(event,{side})},createHandleOnHoverOn=side=>()=>{onHoverOn&&("vertical"===side&&onHoverOn({top:!0,bottom:!0}),"horizontal"===side&&onHoverOn({left:!0,right:!0}))},createHandleOnHoverOff=side=>()=>{onHoverOff&&("vertical"===side&&onHoverOff({top:!1,bottom:!1}),"horizontal"===side&&onHoverOff({left:!1,right:!1}))},createHandleOnChange=side=>next=>{if(!onChange)return;const nextValues={...values},nextValue=void 0!==next&&!isNaN(parseFloat(next))?next:void 0;"vertical"===side&&(nextValues.top=nextValue,nextValues.bottom=nextValue),"horizontal"===side&&(nextValues.left=nextValue,nextValues.right=nextValue),onChange(nextValues)},createHandleOnUnitChange=side=>next=>{const newUnits={...selectedUnits};"vertical"===side&&(newUnits.top=next,newUnits.bottom=next),"horizontal"===side&&(newUnits.left=next,newUnits.right=next),setSelectedUnits(newUnits)},filteredSides=sides?.length?groupedSides.filter((side=>sides.includes(side))):groupedSides,first=filteredSides[0],last=filteredSides[filteredSides.length-1],only=first===last&&first;return(0,jsx_runtime.jsx)(Layout,{gap:0,align:"top",className:"component-box-control__vertical-horizontal-input-controls",children:filteredSides.map((side=>{const[parsedQuantity,parsedUnit]=(0,utils.YX)("vertical"===side?values.top:values.left),selectedUnit="vertical"===side?selectedUnits.top:selectedUnits.left;return(0,react.createElement)(BoxUnitControl,{...props,isFirst:first===side,isLast:last===side,isOnly:only===side,value:[parsedQuantity,null!=selectedUnit?selectedUnit:parsedUnit].join(""),onChange:createHandleOnChange(side),onUnitChange:createHandleOnUnitChange(side),onFocus:createHandleOnFocus(side),onHoverOn:createHandleOnHoverOn(side),onHoverOff:createHandleOnHoverOff(side),label:LABELS[side],key:side})}))})}AxialInputControls.displayName="AxialInputControls";var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const box_control_icon_styles_Root=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1j5nr4z8"})({name:"1w884gc",styles:"box-sizing:border-box;display:block;width:24px;height:24px;position:relative;padding:4px"}),Viewbox=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1j5nr4z7"})({name:"i6vjox",styles:"box-sizing:border-box;display:block;position:relative;width:100%;height:100%"}),Stroke=(0,emotion_styled_base_browser_esm.Z)("span",{target:"e1j5nr4z6"})("box-sizing:border-box;display:block;pointer-events:none;position:absolute;",(({isFocused})=>(0,emotion_react_browser_esm.iv)({backgroundColor:"currentColor",opacity:isFocused?1:.3},"","")),";"),VerticalStroke=(0,emotion_styled_base_browser_esm.Z)(Stroke,{target:"e1j5nr4z5"})({name:"1k2w39q",styles:"bottom:3px;top:3px;width:2px"}),HorizontalStroke=(0,emotion_styled_base_browser_esm.Z)(Stroke,{target:"e1j5nr4z4"})({name:"1q9b07k",styles:"height:2px;left:3px;right:3px"}),TopStroke=(0,emotion_styled_base_browser_esm.Z)(HorizontalStroke,{target:"e1j5nr4z3"})({name:"abcix4",styles:"top:0"}),RightStroke=(0,emotion_styled_base_browser_esm.Z)(VerticalStroke,{target:"e1j5nr4z2"})({name:"1wf8jf",styles:"right:0"}),BottomStroke=(0,emotion_styled_base_browser_esm.Z)(HorizontalStroke,{target:"e1j5nr4z1"})({name:"8tapst",styles:"bottom:0"}),LeftStroke=(0,emotion_styled_base_browser_esm.Z)(VerticalStroke,{target:"e1j5nr4z0"})({name:"1ode3cm",styles:"left:0"}),BASE_ICON_SIZE=24;function BoxControlIcon({size=24,side="all",sides,...props}){const hasSide=value=>!(value=>sides?.length&&!sides.includes(value))(value)&&("all"===side||side===value),top=hasSide("top")||hasSide("vertical"),right=hasSide("right")||hasSide("horizontal"),bottom=hasSide("bottom")||hasSide("vertical"),left=hasSide("left")||hasSide("horizontal"),scale=size/BASE_ICON_SIZE;return(0,jsx_runtime.jsx)(box_control_icon_styles_Root,{style:{transform:`scale(${scale})`},...props,children:(0,jsx_runtime.jsxs)(Viewbox,{children:[(0,jsx_runtime.jsx)(TopStroke,{isFocused:top}),(0,jsx_runtime.jsx)(RightStroke,{isFocused:right}),(0,jsx_runtime.jsx)(BottomStroke,{isFocused:bottom}),(0,jsx_runtime.jsx)(LeftStroke,{isFocused:left})]})})}BoxControlIcon.displayName="BoxControlIcon";var library_link=__webpack_require__("./packages/icons/build-module/library/link.js"),link_off=__webpack_require__("./packages/icons/build-module/library/link-off.js");function LinkedButton({isLinked,...props}){const label=isLinked?(0,build_module.__)("Unlink sides"):(0,build_module.__)("Link sides");return(0,jsx_runtime.jsx)(tooltip.Z,{text:label,children:(0,jsx_runtime.jsx)(src_button.ZP,{...props,className:"component-box-control__linked-button",isSmall:!0,icon:isLinked?library_link.Z:link_off.Z,iconSize:24,"aria-label":label})})}LinkedButton.displayName="LinkedButton";var use_controlled_state=__webpack_require__("./packages/components/src/utils/hooks/use-controlled-state.js");const defaultInputProps={min:0},box_control_noop=()=>{};function BoxControl({id:idProp,inputProps=defaultInputProps,onChange=box_control_noop,label=(0,build_module.__)("Box Control"),values:valuesProp,units,sides,splitOnAxis=!1,allowReset=!0,resetValues=DEFAULT_VALUES,onMouseOver,onMouseOut}){const[values,setValues]=(0,use_controlled_state.Z)(valuesProp,{fallback:DEFAULT_VALUES}),inputValues=values||DEFAULT_VALUES,hasInitialValue=isValuesDefined(valuesProp),hasOneSide=1===sides?.length,[isDirty,setIsDirty]=(0,react.useState)(hasInitialValue),[isLinked,setIsLinked]=(0,react.useState)(!hasInitialValue||!isValuesMixed(inputValues)||hasOneSide),[side,setSide]=(0,react.useState)(getInitialSide(isLinked,splitOnAxis)),[selectedUnits,setSelectedUnits]=(0,react.useState)({top:(0,utils.YX)(valuesProp?.top)[1],right:(0,utils.YX)(valuesProp?.right)[1],bottom:(0,utils.YX)(valuesProp?.bottom)[1],left:(0,utils.YX)(valuesProp?.left)[1]}),id=function useUniqueId(idProp){const instanceId=(0,use_instance_id.Z)(BoxControl,"inspector-box-control");return idProp||instanceId}(idProp),headingId=`${id}-heading`,inputControlProps={...inputProps,onChange:nextValues=>{onChange(nextValues),setValues(nextValues),setIsDirty(!0)},onFocus:(_event,{side:nextSide})=>{setSide(nextSide)},isLinked,units,selectedUnits,setSelectedUnits,sides,values:inputValues,onMouseOver,onMouseOut};return(0,jsx_runtime.jsxs)(Root,{id,role:"group","aria-labelledby":headingId,children:[(0,jsx_runtime.jsxs)(Header,{className:"component-box-control__header",children:[(0,jsx_runtime.jsx)(component.Z,{children:(0,jsx_runtime.jsx)(base_control.Xp.VisualLabel,{id:headingId,children:label})}),allowReset&&(0,jsx_runtime.jsx)(component.Z,{children:(0,jsx_runtime.jsx)(src_button.ZP,{className:"component-box-control__reset-button",variant:"secondary",isSmall:!0,onClick:()=>{onChange(resetValues),setValues(resetValues),setSelectedUnits(resetValues),setIsDirty(!1)},disabled:!isDirty,children:(0,build_module.__)("Reset")})})]}),(0,jsx_runtime.jsxs)(HeaderControlWrapper,{className:"component-box-control__header-control-wrapper",children:[(0,jsx_runtime.jsx)(component.Z,{children:(0,jsx_runtime.jsx)(BoxControlIcon,{side,sides})}),isLinked&&(0,jsx_runtime.jsx)(flex_block_component.Z,{children:(0,jsx_runtime.jsx)(AllInputControl,{"aria-label":label,...inputControlProps})}),!isLinked&&splitOnAxis&&(0,jsx_runtime.jsx)(flex_block_component.Z,{children:(0,jsx_runtime.jsx)(AxialInputControls,{...inputControlProps})}),!hasOneSide&&(0,jsx_runtime.jsx)(component.Z,{children:(0,jsx_runtime.jsx)(LinkedButton,{onClick:()=>{setIsLinked(!isLinked),setSide(getInitialSide(!isLinked,splitOnAxis))},isLinked})})]}),!isLinked&&!splitOnAxis&&(0,jsx_runtime.jsx)(BoxInputControls,{...inputControlProps})]})}BoxControl.displayName="BoxControl";const box_control=BoxControl;const stories={parameters:{sourceLink:"packages/components/src/box-control",storySource:{source:"/**\n * WordPress dependencies\n */\nimport { useState } from '@wordpress/element';\n\n/**\n * Internal dependencies\n */\nimport BoxControl from '../';\n\nexport default {\n\ttitle: 'Components (Experimental)/BoxControl',\n\tcomponent: BoxControl,\n};\n\nexport const _default = () => {\n\treturn <BoxControl />;\n};\n\nconst defaultSideValues = {\n\ttop: '10px',\n\tright: '10px',\n\tbottom: '10px',\n\tleft: '10px',\n};\n\nfunction DemoExample( {\n\tsides,\n\tdefaultValues = defaultSideValues,\n\tsplitOnAxis = false,\n} ) {\n\tconst [ values, setValues ] = useState( defaultValues );\n\n\treturn (\n\t\t<BoxControl\n\t\t\tlabel=\"Padding\"\n\t\t\tvalues={ values }\n\t\t\tsides={ sides }\n\t\t\tonChange={ setValues }\n\t\t\tsplitOnAxis={ splitOnAxis }\n\t\t/>\n\t);\n}\n\nexport const arbitrarySides = () => {\n\treturn (\n\t\t<DemoExample\n\t\t\tsides={ [ 'top', 'bottom' ] }\n\t\t\tdefaultValues={ { top: '10px', bottom: '10px' } }\n\t\t/>\n\t);\n};\n\nexport const singleSide = () => {\n\treturn (\n\t\t<DemoExample\n\t\t\tsides={ [ 'bottom' ] }\n\t\t\tdefaultValues={ { bottom: '10px' } }\n\t\t/>\n\t);\n};\n\nexport const axialControls = () => {\n\treturn <DemoExample splitOnAxis={ true } />;\n};\n\nexport const axialControlsWithSingleSide = () => {\n\treturn (\n\t\t<DemoExample\n\t\t\tsides={ [ 'horizontal' ] }\n\t\t\tdefaultValues={ { left: '10px', right: '10px' } }\n\t\t\tsplitOnAxis={ true }\n\t\t/>\n\t);\n};\n",locationsMap:{default:{startLoc:{col:24,line:16},endLoc:{col:1,line:18},startBody:{col:24,line:16},endBody:{col:1,line:18}},"arbitrary-sides":{startLoc:{col:30,line:45},endLoc:{col:1,line:52},startBody:{col:30,line:45},endBody:{col:1,line:52}},"single-side":{startLoc:{col:26,line:54},endLoc:{col:1,line:61},startBody:{col:26,line:54},endBody:{col:1,line:61}},"axial-controls":{startLoc:{col:29,line:63},endLoc:{col:1,line:65},startBody:{col:29,line:63},endBody:{col:1,line:65}},"axial-controls-with-single-side":{startLoc:{col:43,line:67},endLoc:{col:1,line:75},startBody:{col:43,line:67},endBody:{col:1,line:75}}}}},title:"Components (Experimental)/BoxControl",component:box_control},_default=()=>(0,jsx_runtime.jsx)(box_control,{});_default.displayName="_default";const defaultSideValues={top:"10px",right:"10px",bottom:"10px",left:"10px"};function DemoExample({sides,defaultValues=defaultSideValues,splitOnAxis=!1}){const[values,setValues]=(0,react.useState)(defaultValues);return(0,jsx_runtime.jsx)(box_control,{label:"Padding",values,sides,onChange:setValues,splitOnAxis})}DemoExample.displayName="DemoExample";const arbitrarySides=()=>(0,jsx_runtime.jsx)(DemoExample,{sides:["top","bottom"],defaultValues:{top:"10px",bottom:"10px"}});arbitrarySides.displayName="arbitrarySides";const singleSide=()=>(0,jsx_runtime.jsx)(DemoExample,{sides:["bottom"],defaultValues:{bottom:"10px"}});singleSide.displayName="singleSide";const axialControls=()=>(0,jsx_runtime.jsx)(DemoExample,{splitOnAxis:!0});axialControls.displayName="axialControls";const axialControlsWithSingleSide=()=>(0,jsx_runtime.jsx)(DemoExample,{sides:["horizontal"],defaultValues:{left:"10px",right:"10px"},splitOnAxis:!0});axialControlsWithSingleSide.displayName="axialControlsWithSingleSide",_default.__docgenInfo={description:"",methods:[],displayName:"_default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/box-control/stories/index.js"]={name:"_default",docgenInfo:_default.__docgenInfo,path:"packages/components/src/box-control/stories/index.js"}),arbitrarySides.__docgenInfo={description:"",methods:[],displayName:"arbitrarySides"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/box-control/stories/index.js"]={name:"arbitrarySides",docgenInfo:arbitrarySides.__docgenInfo,path:"packages/components/src/box-control/stories/index.js"}),singleSide.__docgenInfo={description:"",methods:[],displayName:"singleSide"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/box-control/stories/index.js"]={name:"singleSide",docgenInfo:singleSide.__docgenInfo,path:"packages/components/src/box-control/stories/index.js"}),axialControls.__docgenInfo={description:"",methods:[],displayName:"axialControls"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/box-control/stories/index.js"]={name:"axialControls",docgenInfo:axialControls.__docgenInfo,path:"packages/components/src/box-control/stories/index.js"}),axialControlsWithSingleSide.__docgenInfo={description:"",methods:[],displayName:"axialControlsWithSingleSide"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/box-control/stories/index.js"]={name:"axialControlsWithSingleSide",docgenInfo:axialControlsWithSingleSide.__docgenInfo,path:"packages/components/src/box-control/stories/index.js"})}}]);