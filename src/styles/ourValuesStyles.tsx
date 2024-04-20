import styled from 'styled-components'
import vetor2 from '../assets/images/vetor2.png'
import media from './mediaQueries'

export const Main = styled.div`
	display: flex;
	justify-content: center;
`

export const MainContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 1246px;
	margin: 0 50px 125px;
	border-radius: 24px;
	background-image: url(${vetor2});
	background-repeat: round;
	background-color: #f8e8f2;
	${media.sDevice`
		margin: 0;
		width: 95%;
		height: 670px;
	`}
`

export const Header = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	${media.sDevice`
		width: auto;
	`}
`
export const HeaderTitle = styled.div`
	margin: 123px 0 0 174px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 239px;
	height: 40px;
	border-radius: 8px;
	background: #ffc5eb;
	margin-bottom: 40px;
	span {
		color: #fa39b9;
		font-family: 'Inter';
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.56px;
		text-transform: uppercase;
	}
	${media.sDevice`
		margin: 25px;
		width: 219px;
		height: 30px;
		span {
			font-size: 0.75rem;
		}
	`}
`

export const Section = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-bottom: 100px;
	${media.sDevice`
		flex-direction: column;
		align-items: center;
		margin-bottom: 25px;
	`}
`

export const Title = styled.div`
	width: 635px;
	h1 {
		color: #550261;
		font-family: 'Montserrat Alternates';
		font-size: 2.2em;
		font-style: normal;
		font-weight: 600;
		line-height: 60px;
	}
	${media.sDevice`
		width: 90%;
		text-align: center;
		h1 {
			font-size: 1.6em;
			line-height: 50px;
			margin-bottom: 25px
		}
	`}
`

export const Text = styled.div`
	width: 571px;
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 0.98rem;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
	${media.sDevice`
		width: 90%;
		text-align: center;
		span {
		font-size: 0.85rem;
		}
	`}
`

export const VideoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	height: 39em;
	border-radius: 26px;
	background: rgba(58, 66, 80, 0.2);
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
		div {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 98% !important;
			height: 96% !important;
			img {
				border-radius: 16px;
				width: 15%;
			}
		}
	`}
`
