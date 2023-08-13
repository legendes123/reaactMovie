module.exports = {
	env: {
		browser: true,
		es2021: true,
		"jest/globals": true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react',"jest"],
	rules: {
		'react/prop-types': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off'
	}
}
