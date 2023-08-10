"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6463],{"./packages/components/build-module/icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>icon});var react=__webpack_require__("./node_modules/react/index.js"),svg=__webpack_require__("./packages/primitives/build-module/svg/index.js");const dashicon=function Dashicon({icon,className,size=20,style={},...extraProps}){const iconClass=["dashicon","dashicons","dashicons-"+icon,className].filter(Boolean).join(" "),styles={...20!=size?{fontSize:`${size}px`,width:`${size}px`,height:`${size}px`}:{},...style};return(0,react.createElement)("span",{className:iconClass,style:styles,...extraProps})};const icon=function Icon({icon=null,size="string"==typeof icon?20:24,...additionalProps}){if("string"==typeof icon)return(0,react.createElement)(dashicon,{icon,size,...additionalProps});if((0,react.isValidElement)(icon)&&dashicon===icon.type)return(0,react.cloneElement)(icon,{...additionalProps});if("function"==typeof icon)return(0,react.createElement)(icon,{size,...additionalProps});if(icon&&("svg"===icon.type||icon.type===svg.Wj)){const appliedProps={...icon.props,width:size,height:size,...additionalProps};return(0,react.createElement)(svg.Wj,{...appliedProps})}return(0,react.isValidElement)(icon)?(0,react.cloneElement)(icon,{size,...additionalProps}):icon}},"./packages/components/build-module/ui/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cT:()=>COMPONENT_NAMESPACE,_3:()=>CONNECTED_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/build-module/ui/context/context-connect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iq:()=>contextConnect,Kc:()=>contextConnectWithoutRef,H:()=>hasConnectNamespace});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/ui/context/get-styled-class-name-from-key.js"),process=__webpack_require__("./node_modules/process/browser.js");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&void 0!==process&&process.env;let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/build-module/ui/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>ComponentsContext,eb:()=>useComponentsContext,G8:()=>ContextSystemProvider});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/utils/hooks/use-update-effect.js"),process=__webpack_require__("./node_modules/process/browser.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(ComponentsContext);const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.memo)((({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_3__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&void 0!==process&&process.env}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_4__.P})),[parentContext,value])}({value});return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(ComponentsContext.Provider,{value:contextValue},children)}))},"./packages/components/build-module/ui/context/get-styled-class-name-from-key.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/build-module/ui/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var context_system_provider=__webpack_require__("./packages/components/build-module/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/build-module/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/build-module/ui/context/get-styled-class-name-from-key.js"),use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js"),process=__webpack_require__("./node_modules/process/browser.js");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&void 0!==process&&process.env;const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/build-module/ui/utils/space.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/build-module/utils/hooks/use-cx.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>useCx});var _emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js"),_emotion_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");const useCx=()=>{const cache=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__._)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(((...classNames)=>{if(null===cache)throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");return(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(...classNames.map((arg=>{return null!=(o=arg)&&["name","styles"].every((p=>void 0!==o[p]))?((0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.My)(cache,arg,!1),`${cache.key}-${arg.name}`):arg;var o})))}),[cache])}},"./packages/components/build-module/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/build-module/view/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View";const __WEBPACK_DEFAULT_EXPORT__=View}}]);