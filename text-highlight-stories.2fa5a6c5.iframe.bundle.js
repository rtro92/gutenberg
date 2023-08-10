(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1193],{"./packages/components/src/utils/strings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>normalizeTextString,h:()=>escapeRegExp});var remove_accents__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/remove-accents/index.js"),remove_accents__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__);const ALL_UNICODE_DASH_CHARACTERS=new RegExp(`[${["-","~","­","֊","־","᐀","᠆","‐","‑","‒","–","—","―","⁓","⁻","₋","−","⸗","⸺","⸻","〜","〰","゠","︱","︲","﹘","﹣","－"].join("")}]`,"g"),normalizeTextString=value=>remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(value).toLocaleLowerCase().replace(ALL_UNICODE_DASH_CHARACTERS,"-");function escapeRegExp(string){return string.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&")}},"./packages/element/build-module/create-interpolate-element.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let indoc,offset,output,stack;const tokenizer=/<(\/)?(\w+)\s*(\/)?>/g;function createFrame(element,tokenStart,tokenLength,prevOffset,leadingTextStart){return{element,tokenStart,tokenLength,prevOffset,leadingTextStart,children:[]}}const isValidConversionMap=conversionMap=>{const isObject="object"==typeof conversionMap,values=isObject&&Object.values(conversionMap);return isObject&&values.length&&values.every((element=>(0,_react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)))};function proceed(conversionMap){const next=function nextToken(){const matches=tokenizer.exec(indoc);if(null===matches)return["no-more-tokens"];const startedAt=matches.index,[match,isClosing,name,isSelfClosed]=matches,length=match.length;if(isSelfClosed)return["self-closed",name,startedAt,length];if(isClosing)return["closer",name,startedAt,length];return["opener",name,startedAt,length]}(),[tokenType,name,startOffset,tokenLength]=next,stackDepth=stack.length,leadingTextStart=startOffset>offset?offset:null;if(!conversionMap[name])return addText(),!1;switch(tokenType){case"no-more-tokens":if(0!==stackDepth){const{leadingTextStart:stackLeadingText,tokenStart}=stack.pop();output.push(indoc.substr(stackLeadingText,tokenStart))}return addText(),!1;case"self-closed":return 0===stackDepth?(null!==leadingTextStart&&output.push(indoc.substr(leadingTextStart,startOffset-leadingTextStart)),output.push(conversionMap[name]),offset=startOffset+tokenLength,!0):(addChild(createFrame(conversionMap[name],startOffset,tokenLength)),offset=startOffset+tokenLength,!0);case"opener":return stack.push(createFrame(conversionMap[name],startOffset,tokenLength,startOffset+tokenLength,leadingTextStart)),offset=startOffset+tokenLength,!0;case"closer":if(1===stackDepth)return function closeOuterElement(endOffset){const{element,leadingTextStart,prevOffset,tokenStart,children}=stack.pop(),text=endOffset?indoc.substr(prevOffset,endOffset-prevOffset):indoc.substr(prevOffset);text&&children.push(text);null!==leadingTextStart&&output.push(indoc.substr(leadingTextStart,tokenStart-leadingTextStart));output.push((0,_react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,null,...children))}(startOffset),offset=startOffset+tokenLength,!0;const stackTop=stack.pop(),text=indoc.substr(stackTop.prevOffset,startOffset-stackTop.prevOffset);stackTop.children.push(text),stackTop.prevOffset=startOffset+tokenLength;const frame=createFrame(stackTop.element,stackTop.tokenStart,stackTop.tokenLength,startOffset+tokenLength);return frame.children=stackTop.children,addChild(frame),offset=startOffset+tokenLength,!0;default:return addText(),!1}}function addText(){const length=indoc.length-offset;0!==length&&output.push(indoc.substr(offset,length))}function addChild(frame){const{element,tokenStart,tokenLength,prevOffset,children}=frame,parent=stack[stack.length-1],text=indoc.substr(parent.prevOffset,tokenStart-parent.prevOffset);text&&parent.children.push(text),parent.children.push((0,_react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,null,...children)),parent.prevOffset=prevOffset||tokenStart+tokenLength}const __WEBPACK_DEFAULT_EXPORT__=(interpolatedString,conversionMap)=>{if(indoc=interpolatedString,offset=0,output=[],stack=[],tokenizer.lastIndex=0,!isValidConversionMap(conversionMap))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");do{}while(proceed(conversionMap));return(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,...output)}},"./node_modules/remove-accents/index.js":module=>{var characterMap={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,""),removeAccents=function(string){return string.replace(allAccents,(function(match){return characterMap[match]}))};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents},"./packages/components/src/text-highlight/stories/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});var create_interpolate_element=__webpack_require__("./packages/element/build-module/create-interpolate-element.js"),strings=__webpack_require__("./packages/components/src/utils/strings.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const text_highlight=props=>{const{text="",highlight=""}=props,trimmedHighlightText=highlight.trim();if(!trimmedHighlightText)return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:text});const regex=new RegExp(`(${(0,strings.h)(trimmedHighlightText)})`,"gi");return(0,create_interpolate_element.Z)(text.replace(regex,"<mark>$&</mark>"),{mark:(0,jsx_runtime.jsx)("mark",{})})};const stories={component:text_highlight,title:"Components/TextHighlight",parameters:{sourceLink:"packages/components/src/text-highlight",controls:{expanded:!0},docs:{source:{state:"open"}}}},Template=args=>(0,jsx_runtime.jsx)(text_highlight,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={text:"We call the new editor Gutenberg. The entire editing experience has been rebuilt for media rich pages and posts.",highlight:"Gutenberg"}}}]);