# Makefile
install:
	npm install

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
even:
	node bin/brain-even.js
calc:
	node bin/brain-calc.js