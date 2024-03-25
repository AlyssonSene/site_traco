import styled from 'styled-components'

export const MainContainer = styled.section`
	width: 100%;
	height: 1074px;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	hr {
		width: 1760px;
		height: 1px;
	}
`

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`
export const Title = styled.div`
	margin: 0 208px 90px;
	h1 {
		color: #1f2325;
		font-family: 'Montserrat Alternates';
		font-size: 48px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: 1.92px;
	}
`

export const CardsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	height: 100%;
	width: 100%;
`

export const Cards = styled.div`
	display: flex;
	flex-direction: column;
	width: 480px;
	height: 560px;
	border-radius: 24px;
	border: 1px solid #d0d9e5;
	background: #fff;
	display: flex;
	align-items: center;
`
export const TextsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
	padding: 32px;
`

export const TitleCard = styled.div`
	width: 416px;
	height: 54px;
	h1 {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 27px;
	}
`

export const TextCard = styled.div`
	h5 {
		color: #68717e;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
`

export const AboutMore = styled.div`
	display: flex;
	align-items: center;
	span {
		cursor: pointer;
		color: #ff650a;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 27px;
	}
`

export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 120px;
	width: 100%;
`

export const FooterText = styled.div`
	display: flex;
	justify-content: space-around;
	width: 450px;
	align-items: center;
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
	}
`

export const FooterIcons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 480px;
	div {
		display: flex;
		align-items: center;
	}
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
	}
`

export const FooterIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	flex-shrink: 0;
	background: #ffcbed;
	margin-right: 10px;

	img {
		width: 24px;
		height: 24px;
	}
`
