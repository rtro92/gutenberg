"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2785],{"./packages/components/src/form-toggle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NI:()=>FormToggle,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{};function FormToggle(props){const{className,checked,id,disabled,onChange=noop,...additionalProps}=props,wrapperClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-form-toggle",className,{"is-checked":checked,"is-disabled":disabled});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:wrapperClasses,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{className:"components-form-toggle__input",id,type:"checkbox",checked,onChange,disabled,...additionalProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"components-form-toggle__track"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"components-form-toggle__thumb"})]})}FormToggle.displayName="FormToggle";const __WEBPACK_DEFAULT_EXPORT__=FormToggle},"./packages/components/src/form-toggle/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/form-toggle/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.NI,title:"Components/FormToggle",argTypes:{onChange:{action:"onChange"}},parameters:{sourceLink:"packages/components/src/form-toggle",controls:{expanded:!0},docs:{source:{state:"open"}}}},Template=({onChange,...args})=>{const[isChecked,setChecked]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.NI,{...args,checked:isChecked,onChange:e=>{setChecked((state=>!state)),onChange(e)}})};Template.displayName="Template";const Default=Template.bind({});Default.args={}}}]);