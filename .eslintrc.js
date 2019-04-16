module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: "babel-eslint"
	},
	extends: [
		"@nuxtjs",
		"plugin:vue/recommended",
		"plugin:nuxt/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	plugins: [
		"prettier"
	],
	// add your custom rules here
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

		"prettier/prettier": [
			"error",
			{
				// タブ幅
				tabWidth: 4,
				// タブ使用の有無
				useTabs: true,
				// セミコロンの有無
				semi: true,
				// シングルクォート or ダブルクォート
				singleQuote: false,
				// ケツカンマ
				trailingComma: "all"
			}
		],

		"vue/html-indent": [
			"error",
			"tab"
		],
		"vue/component-name-in-template-casing": [
			"warn", "PascalCase", {
				"ignores": [
					"b-table",
					"b-table-column",
				],
			},
		],
	}
};
