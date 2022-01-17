/* eslint-disable max-len */
/* eslint-disable max-statements-per-line */
const errors = [
	'no-var',
	'use-isnan',
	'no-shadow',
	'no-bitwise',
	'no-multi-str',
	'no-undef-init',
	'no-useless-catch',
	'no-useless-return',
	'no-useless-rename',
	'default-param-last',
	'no-duplicate-imports',
	'no-constructor-return',
	'no-unmodified-loop-condition',
	// React and React Native Specific
	'react/no-typos',
	'react/sort-comp',
	'react/no-danger',
	'react/no-deprecated',
	'react/jsx-pascal-case',
	'react/self-closing-comp',
	'react/jsx-no-duplicate-props',
	'react/jsx-closing-bracket-location',
]

const warnings = [
	'no-alert',
	'no-console',
	'prefer-spread',
	'arrow-spacing',
	'comma-spacing',
	'no-extra-bind',
	'block-spacing',
	'no-unused-vars',
	'spaced-comment',
	'no-else-return',
	'no-spaced-func',
	'space-in-parens',
	'no-multi-spaces',
	'prefer-template',
	'object-shorthand',
	'block-scoped-var',
	'no-empty-function',
	'no-trailing-spaces',
	'prefer-rest-params',
	'no-unneeded-ternary',
	'space-before-blocks',
	'prefer-destructuring',
	'prefer-object-spread',
	'template-tag-spacing',
	'prefer-arrow-callback',
	'no-multiple-empty-lines',
	'no-irregular-whitespace',
	'no-mixed-spaces-and-tabs',
	'no-template-curly-in-string',
	'lines-between-class-members',
	'no-whitespace-before-property',
	'react/jsx-closing-tag-location',
	'prefer-exponentiation-operator',
	// React and React Native Specific
	'react/jsx-key',
	'react/no-is-mounted',
	'react/no-this-in-sfc',
	'react/no-unused-state',
	'react/jsx-curly-spacing',
	'react/jsx-boolean-value',
	'react/jsx-handler-names',
	'react/jsx-equals-spacing',
	'react/no-unknown-property',
	'react/no-unused-prop-types',
	'react/jsx-no-useless-fragment',
	'react/destructuring-assignment',
	'react/jsx-child-element-spacing',
	'react/prefer-stateless-function',
	'react/jsx-props-no-multi-spaces',
	'react/no-adjacent-inline-elements',
	'react/no-access-state-in-setstate',
	'react/void-dom-elements-no-children',
	'react/default-props-match-prop-types',
	'react/no-redundant-should-component-update',
]

const rules = {
	'prettier/prettier': 'off',
	semi: ['error', 'never'],
	quotes: ['error', 'single'],
	'no-prototype-builtins': 'off',
	'comma-style': ['error', 'last'],
	'dot-location': ['error', 'property'],
	'arrow-parens': ['error', 'as-needed'],
	'func-call-spacing': ['error', 'never'],
	'jsx-quotes': ['error', 'prefer-single'],
	'arrow-body-style': ['error', 'as-needed'],
	'object-curly-spacing': ['error', 'always'],
	'comma-dangle': ['error', 'always-multiline'],
	'key-spacing': ['warn', { afterColon: true }],
	'function-call-argument-newline': ['error', 'consistent'],
	'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
	indent: ['error', 'tab', { ignoredNodes: ['TemplateLiteral'] }],
	'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
	'space-before-function-paren': ['error', { named: 'never', anonymous: 'never', asyncArrow: 'always' }],
	'max-len': ['error', { code: 110, ignoreUrls: true, ignoreComments: true, ignoreTemplateLiterals: true }],
	'array-bracket-spacing': ['error', 'never', { objectsInArrays: false, singleValue: false, arraysInArrays: false }],
	'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line', conditionalAssign: false, returnAssign: false, nestedBinaryExpressions: false }],
	// React and React Native Specific
	'react/prop-types': 'off',
	'react/react-in-jsx-scope': 'off',
	'react/jsx-indent': ['warn', 'tab'],
	'react/no-unescaped-entities': 'off',
	'react/jsx-fragments': ['warn', 'syntax'],
	'react/jsx-indent-props': ['error', 'tab'],
	'react/jsx-curly-brace-presence': ['warn', 'never'],
	'react/destructuring-assignment': ['error', 'always'],
	'react/jsx-first-prop-new-line': ['error', 'multiline'],
	'react/jsx-tag-spacing': ['error', { closingSlash: 'never', afterOpening: 'never', beforeClosing: 'never', beforeSelfClosing: 'never' }],
}

for (const error of errors) { rules[error] = 'error' }
for (const warning of warnings) { rules[warning] = 'warn' }

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules,
}
