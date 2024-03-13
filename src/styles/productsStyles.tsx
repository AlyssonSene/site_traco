import styled from 'styled-components'
import { IProducts } from '../interfaces/atomsInterfaces'

export const ProductsContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 120px 0;
`

export const TitleContainer = styled.div`
	display: flex;
	margin-bottom: 79px;
	h1 {
		color: #1f2325;
		text-align: center;
		font-family: 'Montserrat Alternates';
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 72px;
		letter-spacing: 1.92px;
	}

	span {
		margin-right: 15px;
		color: #1f2325;
		text-align: center;
		font-family: 'Montserrat Alternates';
		font-size: 48px;
		font-style: normal;
		font-weight: 500;
		line-height: 72px;
		letter-spacing: 1.92px;
	}
`

export const CardsContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
`

export const Products = styled.div<IProducts>`
	display: flex;
	flex-direction: column;
	width: 352px;
	height: 867px;
	border-radius: 24px;

	${({ $typeBorder }) =>
		$typeBorder == 'package1' &&
		`background:
      linear-gradient(white, white) padding-box,
		  linear-gradient(135deg, #ff6307 -10.57%, #fa39b9 106.84%) border-box;
	    border: 3px solid transparent;
  `}
	${({ $typeBorder }) =>
		$typeBorder == 'package2' &&
		`background:
		  linear-gradient(white, white) padding-box,
		  linear-gradient(135deg, #F0E13A -5.84%, #17E58A 107.59%) border-box;
	    border: 3px solid transparent;
  `}
`

export const ProductTitle = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 32px 0 0 32px;
	h1 {
		color: #1f2325;
		text-align: center;
		font-family: 'Montserrat Alternates';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 1.28px;
	}
`

export const ProductName = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 24px 39px;
	h3 {
		color: #ff650a;
		font-family: 'Inter';
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		text-transform: uppercase;
	}
`
export const ProductValue = styled.div`
	display: flex;
	flex-direction: column;
	margin: 24px 39px 0;
	h5 {
		margin-top: 8px;
		color: #656c78;
		font-family: 'Inter';
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	div {
		display: flex;
		span {
			padding-right: 10px;
			display: flex;
			align-items: flex-start;
			font-family: 'Montserrat Alternates';
			font-size: 18px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			text-transform: uppercase;

			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		h2 {
			color: #1f2325;
			font-family: 'Montserrat Alternates';
			font-size: 40px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			text-transform: uppercase;
			padding-right: 10px;
		}
		h5 {
			display: flex;
			align-items: end;
			color: #656c78;
			font-family: 'Montserrat Alternates';
			font-size: 14px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			text-transform: uppercase;
		}
	}
`

export const Line = styled.div`
	margin: 40px 10%;
	width: 80%;
	height: 2px;
	background: #d0d9e5;
`

export const ProductStartDate = styled.div`
	color: #656c78;
	font-family: 'Inter';
	font-size: 15px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	text-align: center;
`

export const BenefitsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;
	div {
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
		span {
			width: 248px;
			color: #1f2325;
			font-family: Inter;
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 21px;
			margin-bottom: 24px;
		}
	}
`

export const Description = styled.div`
	width: 288px;
	margin: 0 32px;
	span {
		color: #656c78;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 21px;
	}
`

export const subscribeButton = styled.div`
	width: 80%;
	height: 75px;
	border-radius: 16px;
	background: #550261;
	cursor: pointer;
	display: flex;
	justify-content: center;
	margin: 40px 10%;
	button {
		background-color: transparent;
		border: none;
		color: #fff;
		text-align: center;
		font-family: 'Montserrat Alternates';
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 27px;
		cursor: pointer;
	}
`
