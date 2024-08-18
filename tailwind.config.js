import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans]
			},
			container: {
				center: true,
				padding: '2rem'
			},
			colors: {
				primary: '#05374F',
				secondary: '#2E85AE',
				error: '#FF3B3B'
			},
			transitionProperty: {
				maxHeight: 'max-height',
				height: 'height'
			},
			borderWidth: {
				3: '3px'
			}
		}
	},
	plugins: []
};
