import styled from 'styled-components'
import vetor2 from '../assets/images/vetor2.png'

export const MainContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: auto;
	height: 1246px;
	margin: 0 50px 125px;
	border-radius: 24px;
	background-image: url(${vetor2});
	background-repeat: round;
	background-color: #f8e8f2;
`

export const Header = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
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
`

export const Section = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-bottom: 100px;
`

export const Title = styled.div`
	width: 635px;
	h1 {
		color: #550261;
		font-family: 'Montserrat Alternates';
		font-size: 40px;
		font-style: normal;
		font-weight: 600;
		line-height: 60px;
	}
`
export const Text = styled.div`
	width: 571px;
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
`

export const VideoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1275px;
	height: 742px;
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
`
