@echo off
type init.js services\*.js workflows\*.js helpers\*.js > ..\ui\js\restclient-jquery.js
type templates\*.js > ..\ui\js\restclient-templates.js
type styles\*.css > ..\ui\css\restclient-styles.css
type ..\ui\js\jquery-1.6.1.min.js ..\ui\js\jquery-ui-1.8.13.min.js ..\ui\js\jquery.tmpl.min.js ..\ui\js\json2.js ..\ui\js\jquery-firespark.js ..\ui\js\restclient-jquery.js ..\ui\js\restclient-templates.js > ..\ui\js\restclient-ui.js
type ..\ui\css\default.css ..\ui\css\jquery.css ..\ui\css\restclient-styles.css > ..\ui\css\restclient-ui.css
pause
