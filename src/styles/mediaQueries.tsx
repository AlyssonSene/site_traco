import { css } from 'styled-components'

const media = {
	//@media Small devices (landscape phones, 576px and up)
	sDevice: (styles: TemplateStringsArray) => css`
		@media only screen and (min-width: 576px) {
			${styles}
		}
	`,

	// Medium devices (tablets, 768px and up)
	mDevice: (styles: TemplateStringsArray) => css`
		@media only screen and (min-width: 768px) {
			${styles}
		}
	`,

	// Large devices (desktops, 992px and up)
	lDevice: (styles: TemplateStringsArray) => css`
		@media only screen and (min-width: 992px) {
			${styles}
		}
	`,

	// X-Large devices (large desktops, 1200px and up)
	xDevice: (styles: TemplateStringsArray) => css`
		@media only screen and (min-width: 1200px) {
			${styles}
		}
	`,

	// XX-Large devices (larger desktops, 1400px and up)
	xxDevice: (styles: TemplateStringsArray) => css`
		@media only screen and (min-width: 1400px) {
			${styles}
		}
	`
}

export default media
