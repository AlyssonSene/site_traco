import styled from 'styled-components'
import { IProducts } from '../interfaces/atomsInterfaces'

export const ProductsContainer = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 120px 0;
`

export const TitleContainer = styled.div`
	display: flex;
	margin-top: 150px;
	img {
		width: 100%;
	}
`

export const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-evenly;
	align-items: flex-start;
`

export const Products = styled.div<IProducts>`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 325px;
	margin: 20px;
	border-radius: 24px;
	margin-bottom: 20px;
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
  `};
	.css-eqpfi5-MuiAccordionSummary-content.Mui-expanded {
		margin: 0;
	}
`

export const ProductTitle = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 32px;
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
	img {
		max-height: 90%;
	}
`

export const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
	margin: 40px 32px 0;
`

export const ProductSubtitle = styled.div`
	width: 268px;
	h4 {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 21px;
	}
`

export const ProductDescription = styled.div`
	width: 288px;
	margin-top: 25px;
	h4 {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 15px;
		font-style: normal;
		font-weight: 500;
		line-height: 21px;
	}
`
export const FomerContainer = styled.div`
	h5 {
		margin-top: 5px;
		color: #1f2325;
		font-family: 'Inter';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 21px;
	}
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 15px;
		font-style: normal;
		font-weight: 500;
		line-height: 21px;
	}
	h3 {
		color: #fa39b9;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 21px;
		text-transform: uppercase;
	}
`

export const ProductName = styled.div`
	display: flex;
	width: max-content;
	padding: 10px;
	margin-top: 10px;
	justify-content: flex-start;
	align-items: center;
	border-radius: 4px;
	background: #feebe0;
	h3 {
		margin: 0;
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
	align-items: center;
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
	margin: 20px 10%;
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
export const Buttons = styled.div`
	display: flex;
	justify-content: center;
`
export const ButtonsController = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	padding-left: 180px;
	align-items: center;
	img {
		margin: 25px 15px;
		width: 32px;
	}
`

export const subscribeButton = styled.div`
	width: 9rem;
	height: 55px;
	border-radius: 16px;
	background: #550261;
	cursor: pointer;
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
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
export const Payment = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	h6 {
		text-align: end;
		color: #656c78;
		font-family: 'Inter';
		font-size: 15px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`
