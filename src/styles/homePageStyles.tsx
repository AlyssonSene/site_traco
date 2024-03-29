import styled from 'styled-components'
import background from '../assets/images/background.png'

export const MainPage = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const HomeContainer = styled.div`
	height: 95vh;
	display: flex;
	justify-content: center;
	width: 99%;
`

export const CenterContainer = styled.div`
	width: 100%;
	height: 1040px;
	margin: 0 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: url(${background}),
		linear-gradient(135deg, #ff6307 -10.57%, #fa39b9 106.84%);
	background-repeat: round;
	border-radius: 24px;
	margin-top: 120px;
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

export const VideoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 85%;
	height: 54rem;
	border-radius: 26px;
	background: rgba(33, 36, 41, 0.2);
	position: relative;
	img {
		border-radius: 16px;
	}
	div {
		div {
			border-radius: 16px !important;
		}
	}
	iframe {
		cursor: pointer;
		border-radius: 16px;
	}
`

export const StudentsDiv = styled.div`
	display: flex;
	align-items: center;
	background: #f3c0e2;
	height: 32px;
	width: 479px;
	flex-shrink: 0;
	margin-top: 70px;
	border-radius: 8px;
	border: 1px;
	span {
		color: #550261;
		text-align: center;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
	}
`

export const Images = styled.div`
	display: flex;
	margin-left: 5px;
	img {
		width: 24px;
		height: 24px;
		border-radius: 24px;
		border: 1px solid #ffcbed;
	}
	.image1 {
		position: relative;
		left: calc(5% - 5px);
		z-index: 11;
	}
	.image2 {
		position: relative;
		left: calc(-7% - 5px);
		z-index: 10;
	}
	.image3 {
		position: relative;
		left: calc(-19% - 5px);
		z-index: 9;
	}
`

export const SloganContainer = styled.div`
	margin-top: 68px;
	display: flex;
	text-align: center;
	flex-direction: column;
	width: 70%;
	position: relative;
	h1 {
		color: #fff;
		font-family: 'Montserrat Alternates';
	}
`

export const Traco = styled.span`
	position: absolute;
	top: 35%;
	left: calc(75% - 10%);
	width: 291.341px;
	transform: rotate(-0.352deg);
	stroke-width: 8px;
	stroke: #17e58a;
`

export const SubtitleContainer = styled.div`
	width: 707px;
	margin-top: 15px;
	h4 {
		color: #d1d5dc;
		text-align: center;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
`

export const ButtonsContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 60px;
`

export const AboutMoreButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 16px;
	background: #550261;
	color: white;
	margin: 0 50px;
	outline: none;
	width: 385px;
	button {
		border: none;
		height: 75px;
		background-color: #550261;
		color: white;
		text-align: center;
		font-family: 'Montserrat Alternates';
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 27px;
		cursor: pointer;
	}
`

export const PodcastButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 16px;
	background: rgba(58, 66, 80, 0.3);
	color: white;
	margin: 0 50px;
	outline: none;
	width: 385px;
	button {
		border: none;
		height: 75px;
		background: transparent;
		color: white;
		text-align: center;
		font-family: 'Montserrat Alternates';
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 27px;
	}
`

export const SoonContainer = styled.div`
	position: absolute;
	top: 35%;
	left: calc(80% - 3%);
`
