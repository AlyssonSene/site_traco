import styled from 'styled-components'
import media from './mediaQueries'

export const MainContainer = styled.section`
	width: 100%;
	height: 1074px;
	display: flex;
	flex-direction: column;
	align-items: center;
	hr {
		width: 90%;
		height: 1px;
	}
	${media.sDevice`
		height: 950px;
	`}
`

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 125px;
	.prevNews,
	.nextNews {
		width: 35px;
	}
	${media.sDevice`
		text-align: center;
		flex-direction: column;
		padding: 50px;
		.prevNews,
		.nextNews {
			margin-top: 30px;
			width: 30px;
		}
	`}
`
export const Title = styled.div`
	h1 {
		color: #1f2325;
		font-family: 'Montserrat Alternates';
		font-size: 2.3rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: 1.92px;
	}
`
export const Buttons = styled.div`
	img {
		margin: 5px;
	}
`

export const CardsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	height: 100%;
	width: 100%;

	.swiper-slide {
		display: flex;
		justify-content: center;
	}
	.swiper-button-prev {
		color: #550261;
		margin: 0 30px;
	}
	.swiper-button-next {
		color: #550261;
		margin: 0 30px;
	}
`

export const Cards = styled.div`
	flex-direction: column;
	cursor: pointer;
	width: 400px;
	height: 480px;
	border-radius: 24px;
	border: 1px solid #d0d9e5;
	background: #fff;
	display: flex;
	align-items: center;
	.image {
		width: 400px;
	}
	${media.sDevice`
		width: 350px;
		height: 460px;
		.image{
			width: 350px
		}
	`}
`

export const TextsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	flex-grow: 1;
	padding: 32px;
`

export const TextModal = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3.8em;
	text-align: center;
	overflow: auto;
	span {
		font-family: 'Inter';
	}
`
export const TitleCard = styled.div`
	h1 {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 27px;
	}
	${media.sDevice`
		font-size: 0.9rem;
	`}
`

export const TextCard = styled.div`
	cursor: pointer;
	h5 {
		color: #68717e;
		font-family: 'Inter';
		font-size: 0.9rem;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
	${media.sDevice`
		h5 {
			font-size: 0.8rem;
		}
	`}
`
export const CloseButton = styled.div`
	position: absolute;
	cursor: pointer;
	right: 0;
	margin: 4px 22px;
	width: 33px;
	height: 33px;
	background: #fff;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	filter: drop-shadow(0px 5px 10px rgba(47, 99, 163, 0.15));
	span {
		font-size: 20px;
	}
`

export const AboutMore = styled.div`
	display: flex;
	align-items: center;
	span {
		cursor: pointer;
		color: #ff650a;
		font-family: 'Inter';
		font-size: 0.9rem;
		font-style: normal;
		font-weight: 600;
		line-height: 27px;
	}
`

export const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 135px;
	width: 100%;
`

export const FooterText = styled.div`
	display: flex;
	justify-content: space-around;
	width: 410px;
	align-items: center;
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
	}
	${media.sDevice`
		flex-direction: column;
		img {
			width: 115px;
			margin: 5px 0;
		}
		span {
			font-size: 0.5rem;
			margin: 5px 0;
		}
	`}
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
	${media.sDevice`
		flex-direction: column;
		align-items: flex-start;
		span {
			font-size: 0.8rem;
			margin: 5px 0;
		}
	`}
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

	${media.sDevice`
		width: 30px;
		height: 30px;
		img {
			width: 16px;
			height: 16px;
		}
	`}
`
