import styled from 'styled-components'

export const HeaderMenu = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 108px;
`

export const LogoContainer = styled.div`
	width: 157px;
	height: 44px;
`

export const OptionsContainer = styled.div`
	display: flex;
	width: 540px;
	justify-content: space-around;
	span {
		cursor: pointer;
		color: #717a88;
		font-family: 'Montserrat Alternates';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
`

export const IconsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 216px;
	img {
		cursor: pointer;
	}
`
