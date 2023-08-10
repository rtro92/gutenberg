"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6521],{"./packages/components/src/navigable-container/container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/dom/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const noop=()=>{},MENU_ITEM_ROLES=["menuitem","menuitemradio","menuitemcheckbox"];class NavigableContainer extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component{constructor(args){super(args),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container&&this.container.addEventListener("keydown",this.onKeyDown)}componentWillUnmount(){this.container&&this.container.removeEventListener("keydown",this.onKeyDown)}bindContainer(ref){const{forwardedRef}=this.props;this.container=ref,"function"==typeof forwardedRef?forwardedRef(ref):forwardedRef&&"current"in forwardedRef&&(forwardedRef.current=ref)}getFocusableContext(target){if(!this.container)return null;const{onlyBrowserTabstops}=this.props,focusables=(onlyBrowserTabstops?_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__.T_.tabbable:_wordpress_dom__WEBPACK_IMPORTED_MODULE_2__.T_.focusable).find(this.container),index=this.getFocusableIndex(focusables,target);return index>-1&&target?{index,target,focusables}:null}getFocusableIndex(focusables,target){return focusables.indexOf(target)}onKeyDown(event){this.props.onKeyDown&&this.props.onKeyDown(event);const{getFocusableContext}=this,{cycle=!0,eventToOffset,onNavigate=noop,stopNavigationEvents}=this.props,offset=eventToOffset(event);if(void 0!==offset&&stopNavigationEvents){event.stopImmediatePropagation();const targetRole=event.target?.getAttribute("role");!!targetRole&&MENU_ITEM_ROLES.includes(targetRole)&&event.preventDefault()}if(!offset)return;const activeElement=event.target?.ownerDocument?.activeElement;if(!activeElement)return;const context=getFocusableContext(activeElement);if(!context)return;const{index,focusables}=context,nextIndex=cycle?function cycleValue(value,total,offset){const nextValue=value+offset;return nextValue<0?total+nextValue:nextValue>=total?nextValue-total:nextValue}(index,focusables.length,offset):index+offset;nextIndex>=0&&nextIndex<focusables.length&&(focusables[nextIndex].focus(),onNavigate(nextIndex,focusables[nextIndex]),"Tab"===event.code&&event.preventDefault())}render(){const{children,stopNavigationEvents,eventToOffset,onNavigate,onKeyDown,cycle,onlyBrowserTabstops,forwardedRef,...restProps}=this.props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:this.bindContainer,...restProps,children})}}NavigableContainer.displayName="NavigableContainer";const forwardedNavigableContainer=(props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigableContainer,{...props,forwardedRef:ref});forwardedNavigableContainer.displayName="forwardedNavigableContainer",forwardedNavigableContainer.displayName="NavigableContainer";const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(forwardedNavigableContainer)},"./packages/components/src/navigable-container/menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_container__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/navigable-container/container.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedNavigableMenu({role="menu",orientation="vertical",...rest},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_container__WEBPACK_IMPORTED_MODULE_1__.Z,{ref,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role,"aria-orientation":"presentation"===role||"vertical"!==orientation&&"horizontal"!==orientation?void 0:orientation,eventToOffset:evt=>{const{code}=evt;let next=["ArrowDown"],previous=["ArrowUp"];return"horizontal"===orientation&&(next=["ArrowRight"],previous=["ArrowLeft"]),"both"===orientation&&(next=["ArrowRight","ArrowDown"],previous=["ArrowLeft","ArrowUp"]),next.includes(code)?1:previous.includes(code)?-1:["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(code)?0:void 0},...rest})}UnforwardedNavigableMenu.displayName="UnforwardedNavigableMenu";const __WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedNavigableMenu)},"./packages/dom/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T_:()=>build_module_focus});var focusable_namespaceObject={};__webpack_require__.r(focusable_namespaceObject),__webpack_require__.d(focusable_namespaceObject,{find:()=>find});var tabbable_namespaceObject={};function isVisible(element){return element.offsetWidth>0||element.offsetHeight>0||element.getClientRects().length>0}function find(context,{sequential=!1}={}){const elements=context.querySelectorAll(function buildSelector(sequential){return[sequential?'[tabindex]:not([tabindex^="-"])':"[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])",'iframe:not([tabindex^="-"])',"object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",")}(sequential));return Array.from(elements).filter((element=>{if(!isVisible(element))return!1;const{nodeName}=element;return"AREA"!==nodeName||function isValidFocusableArea(element){const map=element.closest("map[name]");if(!map)return!1;const img=element.ownerDocument.querySelector('img[usemap="#'+map.name+'"]');return!!img&&isVisible(img)}(element)}))}function getTabIndex(element){const tabIndex=element.getAttribute("tabindex");return null===tabIndex?0:parseInt(tabIndex,10)}function isTabbableIndex(element){return-1!==getTabIndex(element)}function mapElementToObjectTabbable(element,index){return{element,index}}function mapObjectTabbableToElement(object){return object.element}function compareObjectTabbables(a,b){const aTabIndex=getTabIndex(a.element),bTabIndex=getTabIndex(b.element);return aTabIndex===bTabIndex?a.index-b.index:aTabIndex-bTabIndex}function filterTabbable(focusables){return focusables.filter(isTabbableIndex).map(mapElementToObjectTabbable).sort(compareObjectTabbables).map(mapObjectTabbableToElement).reduce(function createStatefulCollapseRadioGroup(){const CHOSEN_RADIO_BY_NAME={};return function collapseRadioGroup(result,element){const{nodeName,type,checked,name}=element;if("INPUT"!==nodeName||"radio"!==type||!name)return result.concat(element);const hasChosen=CHOSEN_RADIO_BY_NAME.hasOwnProperty(name);if(!checked&&hasChosen)return result;if(hasChosen){const hadChosenElement=CHOSEN_RADIO_BY_NAME[name];result=result.filter((e=>e!==hadChosenElement))}return CHOSEN_RADIO_BY_NAME[name]=element,result.concat(element)}}(),[])}function tabbable_find(context){return filterTabbable(find(context))}function findPrevious(element){return filterTabbable(find(element.ownerDocument.body)).reverse().find((focusable=>element.compareDocumentPosition(focusable)&element.DOCUMENT_POSITION_PRECEDING))}function findNext(element){return filterTabbable(find(element.ownerDocument.body)).find((focusable=>element.compareDocumentPosition(focusable)&element.DOCUMENT_POSITION_FOLLOWING))}__webpack_require__.r(tabbable_namespaceObject),__webpack_require__.d(tabbable_namespaceObject,{find:()=>tabbable_find,findNext:()=>findNext,findPrevious:()=>findPrevious,isTabbableIndex:()=>isTabbableIndex});const build_module_focus={focusable:focusable_namespaceObject,tabbable:tabbable_namespaceObject}},"./packages/components/src/navigable-container/stories/navigable-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/navigable-container/menu.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/NavigableMenu",component:___WEBPACK_IMPORTED_MODULE_1__.ZP,argTypes:{children:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/navigable-container",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{source:{state:"open"}}}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{children:"Before navigable menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.ZP,{...args,style:{margin:"32px 0",padding:"16px",border:"1px solid black"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{role:"menuitem",children:"Item 1 (non-tabbable, non-focusable)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{role:"menuitem",children:"Item 2 (tabbable, focusable)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{role:"menuitem",disabled:!0,children:"Item 3 (disabled, therefore non-tabbable and not-focusable)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{role:"menuitem",tabIndex:-1,children:"Item 4 (non-tabbable, non-focusable)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{role:"menuitem",tabIndex:0,children:"Item 5 (tabbable, focusable)"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{children:"After navigable menu"})]})}}]);