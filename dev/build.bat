@echo off
type init.js services\*.js workflows\*.js helpers\*.js > ..\ui\js\restclient-jquery.js
type templates\*.js > ..\ui\js\restclient-templates.js
type styles\*.css > ..\ui\css\restclient-styles.css
pause
