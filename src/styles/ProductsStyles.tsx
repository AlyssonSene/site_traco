import styled from 'styled-components'
import { IProducts } from '../interfaces/atomsInterfaces'

export const ProductsContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 80%;
	margin-top: 120px;
`

export const TitleContainer = styled.div`
	display: flex;
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
`

export const Products = styled.div<IProducts>`
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
