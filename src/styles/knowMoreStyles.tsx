import styled from 'styled-components'

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
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.56px;
		text-transform: uppercase;
	}
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
		font-size: 48px;
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
`

export const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	width: 80%;
	margin-bottom: 32px;
`

export const Cards = styled.div`
	width: 480px;
	height: 429px;
	border-radius: 24px;
	border: 1px solid #d0d9e5;
	background: #fff;
`

export const IconElipse = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background-color: #cffce8;
	margin-top: 75px;
	margin-left: 56px;
	img {
		width: 32px;
		height: 32px;
	}
`

export const TitleCard = styled.div`
	margin-left: 56px;
	margin-top: 32px;
	h4 {
		color: #1f2325;
		font-family: 'Montserrat Alternates';
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: 36px;
	}
`

export const TextCard = styled.div`
	width: 370px;
	height: 169px;
	margin: 12px 56px;

	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
`
