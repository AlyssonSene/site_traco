import styled from 'styled-components'
import background from '../assets/background.svg'

export const HomeContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
`

export const CenterContainer = styled.div`
	width: 1856px;
	height: 1040px;
	margin: 0 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url(${background}),
		linear-gradient(135deg, #ff6307 -10.57%, #fa39b9 106.84%);
	background-repeat: round;
	border-radius: 24px;

	h1 {
		font-family: 'Montserrat Alternates';
		font-size: 64px;
		font-weight: 700;
		line-height: 96px;
		letter-spacing: 0em;
		text-align: center;
		color: white;
	}
`
