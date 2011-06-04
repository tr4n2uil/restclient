@echo off
type init.js views\*.js requestors\*.js renderers\*.js modules\*.js navigators\*.js > ..\ui\js\restclient-jquery.js
type templates\*.js > ..\ui\tpl\restclient-templates.js
type styles\*.css > ..\ui\css\restclient-styles.css
pause
