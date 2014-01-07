default: jshint karma

jshint:
	node_modules/jshint/bin/jshint --reporter node_modules/jshint-stylish/stylish.js audiocontext-polyfill.js

karma:
	node_modules/karma/bin/karma start --single-run --no-auto-watch
