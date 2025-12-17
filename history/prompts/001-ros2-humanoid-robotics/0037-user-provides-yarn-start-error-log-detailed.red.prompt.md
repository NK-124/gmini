--- 
id: 0037
title: User Provides yarn start Error Log (Detailed)
stage: red
date: 2025-12-16
surface: agent
model: gemini-1.5-flash-latest
feature: 001-ros2-humanoid-robotics
branch: main
user: user
command: F:\gmini\my-website>yarn start
yarn run v1.22.22
$ docusaurus start
[INFO] Starting the development server...
[WARNING] The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.     
[SUCCESS] Docusaurus website is running at: http://localhost:3000/robotics-book/

× Client
  Compiled with some errors in 24.69s

Module not found: Error: Can't resolve '@mdx-js/react' in 'F:\gmini\my-website\docs'

--------------------------

Module not found: Error: Can't resolve '@mdx-js/react' in 'F:\gmini\my-website\docs\module1'

--------------------------

Module not found: Error: Can't resolve '@mdx-js/react' in 'F:\gmini\my-website\docs\module1'

--------------------------

Module not found: Error: Can't resolve '@mdx-js/react' in 'F:\gmini\my-website\docs\module1'

--------------------------

Module not found: Error: Can't resolve 'react-dom/client' in 'F:\gmini\my-website\node_modules\@docusaurus\core\lib\client'

--------------------------

Module not found: Error: Can't resolve '@mdx-js/react' in 'F:\gmini\my-website\node_modules\@docusaurus\theme-classic\lib\theme\MDXContent'
[WARNING] {"moduleIdentifier":"F:\\gmini\\my-website\\node_modules\\babel-loader\\lib\\index.js??ruleSet[1].rules[5].use[0]!F:\\gmini\\my-website\\node_modules\\@docusaurus\\core\\lib\\client\\clientEntry.js","moduleName":"./node_modules/@docusaurus/core/lib/client/clientEntry.js","loc":"8:700-715","message":"export 'startTransition' (imported as 'startTransition') was not found in 'react' (possible exports: Children, Component, Fragment, Profiler, PureComponent, StrictMode, Suspense, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cloneElement, createContext, createElement, createFactory, createRef, forwardRef, isValidElement, lazy, memo, useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, version)"}
[WARNING] {"moduleIdentifier":"F:\\gmini\\my-website\\node_modules\\babel-loader\\lib\\index.js??ruleSet[1].rules[5].use[0]!F:\\gmini\\my-website\\node_modules\\@docusaurus\\theme-common\\lib\\utils\\historyUtils.js","moduleName":"./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js","loc":"22:82-102","message":"export 'useSyncExternalStore' (imported as 'useSyncExternalStore') was not found in 'react' (possible exports: Children, Component, Fragment, Profiler, PureComponent, StrictMode, Suspense, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cloneElement, createContext, createElement, createFactory, createRef, forwardRef, isValidElement, lazy, memo, useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, version)"}
[WARNING] {"moduleIdentifier":"F:\\gmini\\my-website\\node_modules\\babel-loader\\lib\\index.js??ruleSet[1].rules[5].use[0]!F:\\gmini\\my-website\\node_modules\\@docusaurus\\theme-common\\lib\\utils\\storageUtils.js","moduleName":"./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js","loc":"39:118-138","message":"export 'useSyncExternalStore' (imported as 'useSyncExternalStore') was not found in 'react' (possible exports: Children, Component, Fragment, Profiler, PureComponent, StrictMode, Suspense, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cloneElement, createContext, createElement, createFactory, createRef, forwardRef, isValidElement, lazy, memo, useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, version)"}
[WARNING] {"moduleIdentifier":"F:\\gmini\\my-website\\node_modules\\react-json-view-lite\\dist\\index.modern.js","moduleName":"./node_modules/react-json-view-lite/dist/index.modern.js","loc":"65:21-26","message":"export 'useId' (imported as 'useId') was not found in 'react' (possible exports: Children, Component, Fragment, Profiler, PureComponent, StrictMode, Suspense, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cloneElement, createContext, createElement, createFactory, createRef, forwardRef, isValidElement, lazy, memo, useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, version)"}
client (webpack 5.104.0) compiled with 6 errors and 4 warnings
labels: ["debug", "docusaurus", "yarn", "server-error", "dependency-mismatch", "v3"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
tests:

---