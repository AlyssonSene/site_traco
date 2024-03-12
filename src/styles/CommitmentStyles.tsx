import styled from 'styled-components'

export const CommitmentContainer = styled.div`
	width: 672px;
	display: flex;
	flex-direction: column;
`

export const TextContainer = styled.div`
	h4 {
		color: #1f2325;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 27px;
	}

	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 150%;
	}

	ul {
		margin: 0 40px;
		display: flex;
		flex-direction: column;
	}
	li div {
		display: flex;
		margin-top: 15px;
		h4 {
			margin-right: 5px;
		}
	}
`
