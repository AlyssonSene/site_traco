import styled from 'styled-components'

export const HeaderMenu = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100vw;
	height: 108px;
	position: fixed;
	top: 0;
	background-color: white;
	z-index: 100;
`

export const LogoContainer = styled.div`
	width: 157px;
	height: 44px;
`

export const OptionsContainer = styled.div`
	display: flex;
	width: 540px;
	justify-content: space-around;
	a {
		span {
			cursor: pointer;
			color: #717a88;
			font-family: 'Montserrat Alternates';
			font-style: normal;
			font-weight: 500;
			line-height: 27px;
		}
	}
	a.active {
		span {
			color: #550261;
			font-family: 'Montserrat Alternates';
			font-size: 18px;
			font-style: normal;
			font-weight: 600;
			line-height: 27px;
		}
	}
	@media screen and (max-width: 800px) {
		display: none;
	}
`

export const IconsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100px;
	img {
		cursor: pointer;
	}
`
