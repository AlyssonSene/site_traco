import styled from 'styled-components'

export const FormContainer = styled.div`
	display: flex;
	border-radius: 24px;
	background: #fff;
	flex-direction: column;
	align-items: center;
	height: 820px;
`
export const FormHeader = styled.div`
	display: flex;
	width: 100%;
	padding: 35px;
	img {
		width: 48px;
		height: 48px;
		margin-right: 24px;
	}
	h5 {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
		margin-bottom: 0;
	}
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 21px;
	}
`
export const Line = styled.div`
	width: 555px;
	height: 2px;
	background: #d0d9e5;
`

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 45px;
	div {
		display: flex;
		flex-direction: column;
	}
	input {
		font-size: 20px;
		padding-left: 15px;
		outline: none;
		width: auto;
		height: 70px;
		border-radius: 16px;
		margin-bottom: 35px;
		border: 1px solid #e48cc6;
		background: #fff;
	}
	span {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 17px;
		font-style: normal;
		font-weight: 400;
		line-height: 21px;
		margin-bottom: 5px;
	}
`
