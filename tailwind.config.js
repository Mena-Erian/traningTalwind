/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],

	theme: {
		extend: {
			container: {
				center: true,
			},
			colors: {
				hamadaa: "#345624",
			},
			spacing: {
				"s-50": "50px",
			},
			margin: {},
			padding: {},
			screens: {
				mobile: "400px",
				tablet: "600px",
			},
			backgroundImage: {
				mainImg: "url('../images/bg.jpg')",
			},
		},
		// if i add this here out extend now
		// i will over write on the tailwand uittl(color|spacing|more..)
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("flowbite/plugin"),
		// ...
	],
	darkMode: "selector",
};
