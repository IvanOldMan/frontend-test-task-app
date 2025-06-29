module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-prettier',
		'stylelint-config-clean-order',
		'stylelint-config-recommended-scss',
	],
	plugins: ['stylelint-order', 'stylelint-prettier'],
	rules: {
		'prettier/prettier': true,
		'order/properties-order': [],
		'declaration-empty-line-before': null,
		'no-descending-specificity': null,
	},
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],
};