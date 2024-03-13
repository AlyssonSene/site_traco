import React from 'react'
import ReactPlayer from 'react-player'
import { icons } from '../../assets'
import thumb from '../../assets/image3.png'
import * as C from '../../styles/ourValuesStyles'
import ImageAtom from '../atoms/ImageAtom'
import PlayerAtom from '../atoms/PlayerAtom'
import TextAtom from '../atoms/TextAtom'

const OurValuesOrganism: React.FC = () => {
	return (
		<C.MainContainer>
			<C.Header>
				<C.HeaderTitle>
					<ImageAtom url={icons.Lightbulb} alt={''} />
					<TextAtom type={'span'} text={'Trazendo soluções'} />
				</C.HeaderTitle>
			</C.Header>

			<C.Section>
				<C.Title>
					<TextAtom
						type={'h1'}
						text={'Conheça nossos valores como pessoas e profissionais'}
					/>
				</C.Title>
				<C.Text>
					<TextAtom
						type={'span'}
						text={
							'Aqui na Traço, trabalhamos de forma humanizada, valorizando o diálogo aberto e empático, buscando entender as necessidades e dores de cada cliente. Para nós, o que realmente importa, é escutar ativamente e sem pressa para conseguir mapear as necessidades com precisão e clazera'
						}
					/>
				</C.Text>
			</C.Section>
			<C.VideoContainer>
				<ReactPlayer
					width={'1243px'}
					height={'711px'}
					url={'https://www.youtube.com/watch?v=t6J85pTCHZE'}
					controls={true}
					playIcon={<PlayerAtom />}
					playing={true}
					light={thumb}
				/>
			</C.VideoContainer>
		</C.MainContainer>
	)
}

export default OurValuesOrganism
