@echo off
type init.js modules\*.js navigators\*.js views\*.js renderers\*.js > ..\ui\js\restclient-jquery.js
type templates\*.js > ..\ui\tpl\restclient-templates.js
type styles\*.css > ..\ui\css\restclient-styles.css
pause
