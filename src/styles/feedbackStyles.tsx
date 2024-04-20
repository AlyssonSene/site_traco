import styled from 'styled-components'
import vetor3 from '../assets/images/vetor3.png'
import media from './mediaQueries'

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
	}

	.swiper-slide {
		display: flex;
		justify-content: center;
	}
	.swiper-button-prev {
		color: white;
		margin: 0 30px;
	}
	.swiper-button-next {
		color: white;
		margin: 0 30px;
	}
	${media.sDevice`
		height: 660px;
	`}
`

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding-left: 125px;
`

export const Text = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 192px;
	height: 40px;
	border-radius: 8px;
	background: #ffc5eb;
	span {
		color: #fa39b9;
		font-family: 'Inter';
		font-size: 0.9em;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.56px;
		text-transform: uppercase;
	}

	${media.sDevice`
		margin-top: 25px;
		height: 35px;
	`}
`

export const Section = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 110px;
	h1 {
		color: #fff;
		font-family: 'Montserrat Alternates';
		font-size: 2.3rem;
		font-style: normal;
		font-weight: 500;
		line-height: 72px;
	}
	.prev,
	.next {
		width: 30px;
	}

	${media.sDevice`
		flex-direction: column;
		text-align: center;
		padding: 50px;
		h1 {
			font-size: 1.8rem;
			line-height: 50px;	
			margin-bottom: 20px;
		}
		.prev,
		.next {
			width: 25px;
		}
	`}
`
export const Title = styled.div`
	width: auto;
`

export const Buttons = styled.div`
	display: flex;
	img {
		margin: 5px;
	}
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
	width: 420px;
	height: 320px;
	border-radius: 26px;
	background: rgba(219, 226, 238, 0.2);
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	cursor: pointer;
	img {
		width: 400px;
		height: auto;
		flex-shrink: 0;
	}

	${media.sDevice`
		width: 375px;
		height: 280px;
		border-radius: 18px;
		img {
			width: 355px;
			height: auto;
		}
	`}
`
