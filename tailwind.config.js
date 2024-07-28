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
				secondary: '#2E85AE'
			},
			transitionProperty: {
				maxHeight: 'maxHeight',
				height: 'height'
			},
			borderWidth: {
				3: '3px'
			}
		}
	},
	plugins: []
};
