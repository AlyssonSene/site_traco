import styled from 'styled-components'
import background from '../assets/images/background.png'
import media from './mediaQueries'

export const MainPage = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`

export const HomeContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 99%;
`

export const CenterContainer = styled.div`
	width: 95%;
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
		font-size: 3rem;
		font-weight: 700;
		line-height: 96px;
		letter-spacing: 0em;
		text-align: center;
		color: white;
	}
	${media.sDevice`
		margin: 80px 0;
		height: 650px;
		h1 {
			font-family: 'Montserrat Alternates';
			font-size: 1.5em;
			font-weight: 700;
			line-height: 96px;
			letter-spacing: 0em;
			text-align: center;
			color: white;
		}
	`}
`

export const VideoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	height: 39em;
	border-radius: 26px;
	background: rgba(33, 36, 41, 0.2);
	position: absolute;
	top: 50em;
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
	${media.sDevice`
		top: 39em;
		width: 85%;
		height: 15em;
		div{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 98% !important;
			height: 96% !important;
		}
		img {
			border-radius: 16px;
			width: 15%;
		}
		div {
			div {
				border-radius: 16px !important;
			}
		}
	`}
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
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
	}
	${media.sDevice`
			display: flex;
			align-items: center;
			background: #f3c0e2;
			height: 32px;
			width: 65%;
			flex-shrink: 0;
			border-radius: 8px;
			border: 1px;
			span {
				color: #550261;
				font-size: .7rem;
				font-style: normal;
				font-weight: 500;
				line-height: 14px;
			}
		`}
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

	${media.sDevice`
	img {
		width: 20px;
		height: 20px;
		border-radius: 24px;
		border: 1px solid #ffcbed;
	}
	`}
`

export const SloganContainer = styled.div`
	margin-top: 68px;
	display: flex;
	text-align: center;
	flex-direction: column;
	width: 50rem;
	position: relative;
	h1 {
		color: #fff;
		font-family: 'Montserrat Alternates';
	}
	${media.sDevice`
			margin-top: 35px;
			display: flex;
			text-align: center;
			flex-direction: column;
			width: auto;
		h1 {
			color: #fff;
			font-family: 'Montserrat Alternates';
			font-size: 1.8rem;
			text-align: center;
			line-height: 30px;
		}
	`}
`

export const Traco = styled.span`
	position: absolute;
	top: 35%;
	left: 60%;
	transform: rotate(-0.352deg);
	stroke-width: 8px;
	stroke: #17e58a;
	img {
		width: 90%;
	}
	${media.sDevice`
		position: absolute;
		top: 22%;
		left: 40%;
		transform: rotate(-0.352deg);
		stroke-width: 8px;
		stroke: #17e58a;
		img {
			width: 48%;
		}
	`}
`

export const SubtitleContainer = styled.div`
	width: 70%;
	margin-top: 15px;
	h4 {
		color: #d1d5dc;
		text-align: center;
		font-family: 'Inter';
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
	${media.sDevice`
		h4 {
			font-size: 0.9rem;
			line-height: 20px;
		}
	`}
`

export const ButtonsContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	justify-content: center;
	margin-top: 60px;
	${media.sDevice`
		display: flex;
		justify-content: space-around;
		div {
			width: 43%;
			border-radius: 16px;
			img {
				width: 25px;
				margin-left: 5px;
			}
		}
	`}
`

export const AboutMoreButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
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
		border-radius: 16px;
		text-align: center;
		font-family: 'Montserrat Alternates';
		font-size: 0.8rem;
		font-style: normal;
		font-weight: 600;
		line-height: 27px;
		cursor: pointer;
	}
	${media.sDevice`
		margin: 0;
		width: 125px;
		display: flex;
		align-items: center;
		button {
			height: 45px;
			font-size: .8rem;
			line-height: 20px;
		}
	`}
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
	${media.sDevice`
		margin: 0;
		width: 125px;
		display: flex;
		align-items: center;
		button {
			height: 45px;
			font-size: .8rem;
			line-height: 20px;
		}
	`}
`

export const SoonContainer = styled.div`
	position: absolute;
	top: 35%;
	left: calc(80% - 3%);
`
