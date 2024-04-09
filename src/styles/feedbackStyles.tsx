import styled from 'styled-components'
import vetor3 from '../assets/images/vetor3.png'

export const MainContainer = styled.div`
	width: 100%;
	height: 892px;
	background: url(${vetor3}), #550261;
	background-repeat: round;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding-left: 150px;
	}
	.swiper {
		padding: 32px;
	}
	.swiper-slide {
		display: flex;
		justify-content: center;
	}
	.swiper-button-prev {
		color: white;
	}
	.swiper-button-next {
		color: white;
	}
`

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`

export const Text = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 192px;
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
`

export const Section = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 100px;
	h1 {
		color: #fff;
		font-family: 'Montserrat Alternates';
		font-size: 48px;
		font-style: normal;
		font-weight: 500;
		line-height: 72px;
	}
`
export const Title = styled.div`
	width: auto;
`

export const CardsContainer = styled.div`
	width: 1504px;
	display: flex;
	justify-content: space-between;
	height: 360px;
	margin: 0;
`

export const Cards = styled.div`
	width: 480px;
	display: flex;
	flex-direction: column;
	height: 360px;
	border-radius: 24px;
	background: #f8e8f2;
	padding: 32px 40px;
	justify-content: space-between;
`

export const PerfilContainer = styled.div`
	display: flex;
	img {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		margin-right: 16px;
	}
	h5 {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	span {
		color: var(--Primary-Pink, #fa39b9);
		font-family: 'Inter';
		font-size: 15px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`
export const TextCard = styled.div`
	width: 400px;
	span {
		color: #68717e;
		font-family: 'Inter';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
	}
`

export const VideosContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
`

export const VideoCard = styled.div`
	width: 480px;
	height: 360px;
	border-radius: 26px;
	background: rgba(58, 66, 80, 0.2);
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	cursor: pointer;
	img {
		width: 460px;
		height: 344px;
		flex-shrink: 0;
	}
`
