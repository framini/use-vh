(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1236:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1237)},1237:function(module,exports,__webpack_require__){var api=__webpack_require__(1238),content=__webpack_require__(1239);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1239:function(module,exports,__webpack_require__){(exports=__webpack_require__(1240)(!1)).push([module.i,"/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nul {\n  list-style: none;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\nhtml {\n  box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\niframe {\n  border: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\ntd:not([align]),\nth:not([align]) {\n  text-align: left;\n}\n",""]),module.exports=exports},1241:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(437);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1265)],module)}.call(this,__webpack_require__(1242)(module))},1265:function(module,exports,__webpack_require__){var map={"./use-vh.stories.tsx":1271};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1265},1271:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"fullViewportHeight",(function(){return fullViewportHeight})),__webpack_require__.d(__webpack_exports__,"halfViewportHeight",(function(){return halfViewportHeight}));var tslib_es6=__webpack_require__(136),react=__webpack_require__(0),react_default=__webpack_require__.n(react),isClient="object"==typeof window,useLayoutEffect="undefined"!=typeof window?react_default.a.useLayoutEffect:react_default.a.useEffect,useWindowInnerHeight=function(){var _a=function(initialState){var frame=react_default.a.useRef(0),_a=react_default.a.useState(initialState),state=_a[0],setState=_a[1],setRafState=react_default.a.useCallback((function(value){cancelAnimationFrame(frame.current),frame.current=requestAnimationFrame((function(){setState(value)}))}),[]);return react_default.a.useEffect((function(){return function(){cancelAnimationFrame(frame.current)}}),[]),[state,setRafState]}(0),state=_a[0],setState=_a[1];return useLayoutEffect((function(){setState(window.innerHeight)}),[setState]),react_default.a.useEffect((function(){if(isClient){var handler_1=function(){setState(window.innerHeight)};return window.addEventListener("resize",handler_1),function(){window.removeEventListener("resize",handler_1)}}}),[setState]),state},useVh=function(value){void 0===value&&(value=100);var windowInnerHeight=useWindowInnerHeight();return react_default.a.useMemo((function(){return windowInnerHeight*value/100}),[windowInnerHeight,value])};try{useVh.displayName="useVh",useVh.__docgenInfo={description:"",displayName:"useVh",props:{toString:{defaultValue:null,description:"Returns a string representation of an object.\n@param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.",name:"toString",required:!1,type:{name:"(radix?: number) => string"}},toFixed:{defaultValue:null,description:"Returns a string representing a number in fixed-point notation.\n@param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.",name:"toFixed",required:!0,type:{name:"(fractionDigits?: number) => string"}},toExponential:{defaultValue:null,description:"Returns a string containing a number represented in exponential notation.\n@param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.",name:"toExponential",required:!0,type:{name:"(fractionDigits?: number) => string"}},toPrecision:{defaultValue:null,description:"Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.\n@param precision Number of significant digits. Must be in the range 1 - 21, inclusive.",name:"toPrecision",required:!0,type:{name:"(precision?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => number"}},toLocaleString:{defaultValue:null,description:"Converts a number to a string by using the current or specified locale.\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\n@param options An object that contains one or more properties that specify comparison options.",name:"toLocaleString",required:!1,type:{name:"(locales?: string | string[], options?: NumberFormatOptions) => string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#useVh"]={docgenInfo:useVh.__docgenInfo,name:"useVh",path:"src/index.tsx#useVh"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(423).withSource;var addSourceDecorator=__webpack_require__(423).addSource,__STORY__="import React from 'react';\n\nimport { useVh } from '../src';\n\nexport default {\n  title: 'useVh',\n};\n\nconst commonStyles = {\n  backgroundColor: '#e0f7fa',\n  width: '200px',\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n  color: '#006064',\n} as React.CSSProperties;\n\nexport const fullViewportHeight = () => {\n  const fullVh = useVh();\n\n  return (\n    <div\n      style={{\n        ...commonStyles,\n        height: `${fullVh}px`,\n      }}\n    >\n      Viewport Height: {fullVh}\n    </div>\n  );\n};\n\nexport const halfViewportHeight = () => {\n  const vh = useVh(50);\n\n  return (\n    <div\n      style={{\n        ...commonStyles,\n        height: `${vh}px`,\n      }}\n    >\n      Viewport Height: {vh}\n    </div>\n  );\n};\n",__ADDS_MAP__={"usevh--full-viewport-height":{startLoc:{col:34,line:18},endLoc:{col:1,line:31},startBody:{col:34,line:18},endBody:{col:1,line:31}},"usevh--half-viewport-height":{startLoc:{col:34,line:33},endLoc:{col:1,line:46},startBody:{col:34,line:33},endBody:{col:1,line:46}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},commonStyles=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\n\nimport { useVh } from '../src';\n\nexport default {\n  title: 'useVh',\n};\n\nconst commonStyles = {\n  backgroundColor: '#e0f7fa',\n  width: '200px',\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n  color: '#006064',\n} as React.CSSProperties;\n\nexport const fullViewportHeight = () => {\n  const fullVh = useVh();\n\n  return (\n    <div\n      style={{\n        ...commonStyles,\n        height: `${fullVh}px`,\n      }}\n    >\n      Viewport Height: {fullVh}\n    </div>\n  );\n};\n\nexport const halfViewportHeight = () => {\n  const vh = useVh(50);\n\n  return (\n    <div\n      style={{\n        ...commonStyles,\n        height: `${vh}px`,\n      }}\n    >\n      Viewport Height: {vh}\n    </div>\n  );\n};\n",locationsMap:{"usevh--full-viewport-height":{startLoc:{col:34,line:18},endLoc:{col:1,line:31},startBody:{col:34,line:18},endBody:{col:1,line:31}},"usevh--half-viewport-height":{startLoc:{col:34,line:33},endLoc:{col:1,line:46},startBody:{col:34,line:33},endBody:{col:1,line:46}}}}},title:"useVh"},{backgroundColor:"#e0f7fa",width:"200px",display:"flex",alignItems:"center",justifyContent:"center",color:"#006064"}),fullViewportHeight=addSourceDecorator((function(){var fullVh=useVh();return react_default.a.createElement("div",{style:Object(tslib_es6.a)(Object(tslib_es6.a)({},commonStyles),{height:fullVh+"px"})},"Viewport Height: ",fullVh)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/use-vh.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/home/runner/work/use-vh/use-vh/stories",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),halfViewportHeight=addSourceDecorator((function(){var vh=useVh(50);return react_default.a.createElement("div",{style:Object(tslib_es6.a)(Object(tslib_es6.a)({},commonStyles),{height:vh+"px"})},"Viewport Height: ",vh)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/use-vh.stories.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/home/runner/work/use-vh/use-vh/stories",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},438:function(module,exports,__webpack_require__){__webpack_require__(439),__webpack_require__(582),__webpack_require__(583),__webpack_require__(1235),__webpack_require__(1236),module.exports=__webpack_require__(1241)},501:function(module,exports){}},[[438,1,2]]]);
//# sourceMappingURL=main.ef5468104232d6f487e3.bundle.js.map