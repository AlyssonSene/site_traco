import styled from 'styled-components'
import { ITraceCard } from '../interfaces/atomsInterfaces'

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 115px;
	width: auto;
	height: 1559px;
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
	background: #feebe0;
	margin-bottom: 40px;
	span {
		color: #ff650a;
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
`

export const Title = styled.div`
	width: 790px;
	margin-left: 174px;
	position: relative;
	h1 {
		color: #1f2325;
		font-family: 'Montserrat Alternates';
		font-size: 48px;
		font-style: normal;
		font-weight: 600;
		line-height: 72px;
	}
	img {
		position: absolute;
		top: 47%;
		left: calc(44% - 100px);
		width: 397px;
		height: 80px;
	}
`

export const CenterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 174px;
	height: 744px;
	flex-shrink: 0;
`
export const TracesContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 999px;
	height: 744px;
`

export const VideoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 433px;
	height: 744px;
	border-radius: 26px;
	background: rgba(58, 66, 80, 0.2);
	cursor: pointer;
	img {
		width: 401px;
		height: 712px;
	}
`

export const CloseButton = styled.div`
	position: absolute;
	cursor: pointer;
	right: 0;
	margin: 4px 22px;
	width: 32px;
	height: 32px;
	background: #fff;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		font-size: 19px;
	}
`

export const Line = styled.div<ITraceCard>`
	width: 4px;
	height: 24px;
	background-image: linear-gradient(to bottom, #d0d9e5, 3px, transparent 4px);
	background-size: 4px 7px;
	background-position:
		0 0,
		4px 4px;
	${({ $isSelected }) =>
		$isSelected &&
		`
		background-image: linear-gradient(to bottom, #FA39B9, 3px, transparent 4px);
		`}
`

export const TraceCards = styled.div<ITraceCard>`
	width: 999px;
	height: 168px;
	display: flex;
	align-items: center;
	border-radius: 24px;
	border: 1px solid #d0d9e5;
	background: #fff;
	${({ $isSelected }) =>
		$isSelected &&
		`
			border-radius: 24px;
			border: 1px solid #FA39B9;
			background: #FFECF8;
  `}
`

export const EmojContainer = styled.div<ITraceCard>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	background: #d0d9e5;
	border-radius: 50%;
	margin: 0 48px;
	img {
		stop-color: #220c1a;
		width: 40px;
		height: 40px;
	}
	${({ $isSelected }) =>
		$isSelected &&
		`
			background: #FFCBED;
  `}
`
export const TextContainer = styled.div`
	width: 782px;
	h2 {
		color: #1f2325;
		font-family: 'Montserrat Alternates';
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: 36px;
	}
	span {
		color: #656c78;
		font-family: 'Inter';
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 27px;
	}
`
