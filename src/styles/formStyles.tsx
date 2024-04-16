import styled from 'styled-components'

export const FormContainer = styled.div`
	display: flex;
	border-radius: 24px;
	background: #fff;
	flex-direction: column;
	align-items: center;
`
export const FormHeader = styled.div`
	display: flex;
	width: 100%;
	padding: 35px 35px 10px;
	img {
		width: 48px;
		height: 48px;
		margin-right: 24px;
	}
	h5 {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 1em;
		font-style: normal;
		font-weight: 500;
		line-height: 24px;
		margin-bottom: 0;
	}
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 0.8em;
		font-style: normal;
		font-weight: 500;
		line-height: 21px;
	}
`
export const Line = styled.div`
	width: 80%;
	height: 2px;
	background: #d0d9e5;
`

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 25px 45px 0 25px;
	div {
		display: flex;
		flex-direction: column;
	}
	input {
		font-size: 0.9em;
		padding-left: 15px;
		outline: none;
		width: auto;
		height: 50px;
		border-radius: 16px;
		margin-bottom: 35px;
		border: 1px solid #e48cc6;
		background: #fff;
	}
	span {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 0.9em;
		font-style: normal;
		font-weight: 400;
		line-height: 21px;
		margin-bottom: 5px;
	}
`

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 25px;
	.cancel {
		button {
			margin-right: 25px;
			width: 175px;
			height: 55px;
			border-radius: 16px;
			border: 1px solid #d0d9e5;
			background: #fff;
			color: #1f2325;
			text-align: center;
			font-family: 'Montserrat Alternates';
			font-size: 0.9em;

			font-style: normal;
			font-weight: 600;
			line-height: 27px;
		}
	}

	.sending {
		button {
			width: 175px;
			height: 55px;
			border-radius: 16px;
			background: #550261;
			color: #fff;
			text-align: center;
			font-family: 'Montserrat Alternates';
			font-size: 0.9em;
			font-style: normal;
			font-weight: 600;
			line-height: 27px;
		}
	}
`
