import styled from 'styled-components'
import media from './mediaQueries'

export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 115px;
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 239px;
	height: 40px;
	border-radius: 8px;
	background: #feebe0;
	span {
		color: #ff650a;
		font-family: 'Inter';
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.56px;
		text-transform: uppercase;
	}
	${media.sDevice`
		span {
			font-size: 12px;
		}
	`}
`

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 1000px;
	margin-top: 52px;
	position: relative;
	margin-bottom: 80px;
	h1 {
		color: #1f2325;
		text-align: center;
		font-family: 'Montserrat Alternates';
		font-size: 3em;
		font-style: normal;
		font-weight: 600;
		line-height: 72px;
	}
	img {
		position: absolute;
		top: 48%;
		left: calc(58% - 100px);
		width: 322px;
		height: 86px;
	}
	${media.sDevice`
		width: auto;
		h1 {
			padding: 15px;
			font-size: 2em;
			line-height: 50px;
		}
		img {
			top: 48%;
			left: calc(63% - 100px);
			width: 225px;
			height: 110px;
		}
	`}
`

export const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 32px;
	justify-content: space-around;
`

export const Cards = styled.div`
	width: 410px;
	height: 380px;
	border-radius: 24px;
	border: 1px solid #d0d9e5;
	background: #fff;
	margin-bottom: 30px;
	${media.sDevice`
		width: 350px;
		height: 300px;
	`}
`

export const IconElipse = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 54px;
	height: 54px;
	border-radius: 50%;
	background-color: #cffce8;
	margin-top: 50px;
	margin-left: 50px;
	img {
		width: 32px;
		height: 32px;
	}
	${media.sDevice`
		width: 50px;
		height: 50px;
		margin-top: 25px;
		margin-left: 25px;
		img {
			width: 28px;
			height: 28px;
	}
	`}
`

export const TitleCard = styled.div`
	margin-left: 50px;
	margin-top: 30px;
	h4 {
		color: #1f2325;
		font-family: 'Montserrat Alternates';
		font-size: 1.2em;
		font-style: normal;
		font-weight: 600;
		line-height: 36px;
	}
	${media.sDevice`
		text-align: center;
		margin: 0;
		h4 {
			margin-top: 10px;
			font-size: 1em;
		}
	`}
`

export const TextCard = styled.div`
	width: 330px;
	height: 169px;
	margin: 12px 50px;
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 0.9em;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
	${media.sDevice`
		width: auto;
		padding: 15px;
		text-align: center;
		span {
			font-size: 0.8em;
			line-height: 23px;
		}
		margin: 0;
	`}
`
