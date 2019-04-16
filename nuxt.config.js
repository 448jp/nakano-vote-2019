import pkg from "./package";

export default {
	srcDir: "src/",

	mode: "spa",

	/*
	 ** Headers of the page
	 */
	head: {
		title: "中野区で選挙カーを使っているのは誰？",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content: pkg.description,
			},
			{
				property: "og:site_name",
				content: "中野区で選挙カーを使っているのは誰？",
			},
			{ property: "og:type", content: "website" },
			{
				hid: "og:url",
				property: "og:url",
				content: "https://clever-lumiere-dd04de.netlify.com/",
			},
			{
				hid: "og:image",
				property: "og:image",
				content: "https://clever-lumiere-dd04de.netlify.com/ogp.png",
			},
			{
				hid: "og:title",
				property: "og:title",
				content: "中野区で選挙カーを使っているのは誰？",
			},
			{
				hid: "og:description",
				property: "og:description",
				content: pkg.description,
			},
			{ name: "twitter:card", content: "summary_large_image" },
			{
				hid: "twitter:title",
				name: "twitter:title",
				content: "中野区で選挙カーを使っているのは誰？",
			},
			{
				hid: "twitter:description",
				name: "twitter:description",
				content: pkg.description,
			},
			{
				hid: "twitter:image",
				name: "twitter:image",
				content: "https://clever-lumiere-dd04de.netlify.com/ogp.png",
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#fff" },

	/*
	 ** Global CSS
	 */
	css: ["~assets/sass/screen.scss"],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		[
			"@nuxtjs/google-analytics",
			{
				id: "UA-118896487-3",
			},
		],
		[
			"nuxt-buefy",
			{
				css: false,
			},
		],
	],

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/,
				});
			}
		},
	},

	generate: {
		routes: Array(60)
			.fill(0)
			.map((v, i) => {
				return `/candidates/${ i + 1 }`;
			}),
	},
};
