import styled from 'styled-components'
import { IHeaderOption } from '../interfaces/atomsInterfaces'

export const DescriptionContainer = styled.div`
	width: 736px;
	height: 866px;
	display: flex;
	flex-direction: column;
	border-radius: 24px;
	border: 1px solid #d0d9e5;
	background: #fff;
`

export const HeaderDescription = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	width: 100%;
	height: 90px;
	margin-bottom: 24px;
`

export const HeaderOptions = styled.div<IHeaderOption>`
	cursor: pointer;
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		cursor: pointer;
		${({ $isSelected }) =>
			$isSelected &&
			`color: #FA39B9;
    `}
	}
	& div {
		width: auto;
		height: 4px;
		margin-top: 32px;
		border-radius: 2px 2px 0px 0px;
		background: #656c78;
		${({ $isSelected }) =>
			$isSelected &&
			`background: #fa39b9;
    `};
	}
`

export const Description = styled.div`
	width: 672px;
	height: 198px;
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
`

export const SubtitleDiv = styled.div`
	margin: 24px;
	h5 {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 150%;
	}
`

export const OptionsContainer = styled.div`
	display: flex;
	padding: 32px;
`

export const BenefitsDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	div {
		display: inline-flex;
		padding: 6px;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		background: #ffcbed;
		margin: 10px 20px 20px 0;
	}
	span {
		color: #fa39b9;
		font-family: 'Inter';
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		text-transform: uppercase;
	}
`
