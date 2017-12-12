module.exports = {
	use: [
		['@neutrinojs/eslint', {
			eslint: {
				env: {
					browser: true,
					node: true
				},
				plugins: [
					'react'
				],
				rules: {
					curly: ['error', 'multi-line'],
					quotes: ['error', 'single', 'avoid-escape'],
					'react/display-name': 'off',
					'react/jsx-boolean-value': 'warn',
					'jsx-quotes': 'warn',
					'react/jsx-no-undef': 'warn',
					'react/jsx-sort-props': 'off',
					'react/sort-prop-types': 'warn',
					'react/jsx-uses-react': 'warn',
					'react/jsx-uses-vars': 'warn',
					'react/no-did-mount-set-state': 'warn',
					'react/no-did-update-set-state': 'warn',
					'react/no-multi-comp': 'warn',
					'react/no-unknown-property': 'warn',
					'react/prop-types': 'warn',
					'react/react-in-jsx-scope': 'warn',
					'react/self-closing-comp': 'warn',
					'react/jsx-wrap-multilines': 'warn',
					semi: 'error',
					strict: 'off'
				}
			}
		}],
		'@neutrinojs/react-components',
	]
};
