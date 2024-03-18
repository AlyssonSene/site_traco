import React from 'react'
import { icons } from '../../assets/icons'
import { images } from '../../assets/images'
import * as C from '../../styles/feedbackStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'
import FeedbackCardsMolecule from '../molecules/FeedbackCardsMolecule'

const FeedbackOrganism: React.FC = () => {
	const text =
		'Lorem ipsum dolor sit amet consectetur. Scelerisque ultrices nam eu odio malesuada gravida scelerisque sapien. Placerat sed accumsan adipiscing ut porttitor quis tincidunt amet facilisis. Suspendisse fermentum facilisi egestas pulvinar nulla. Ultrices purus et at aenean diam.'
	return (
		<C.MainContainer>
			<div>
				<C.HeaderContainer>
					<C.Text>
						<ImageAtom url={icons.feedbackIcon} alt={''} />
						<TextAtom type={'span'} text={'Saiba por eles'} />
					</C.Text>
				</C.HeaderContainer>

				<C.Section>
					<C.Title>
						<TextAtom type={'h1'} text={'Nos importamos com seus resultados'} />
					</C.Title>
				</C.Section>

				<C.CardsContainer>
					<FeedbackCardsMolecule
						icon={icons.doubleQuotes}
						text={text}
						url={images.profile1}
						name={'Pedro Fernandes'}
						post={'Coordenador'}
					/>
					<FeedbackCardsMolecule
						icon={icons.doubleQuotes}
						text={text}
						url={images.profile2}
						name={'Raúl Machado'}
						post={'Professor'}
					/>
					<FeedbackCardsMolecule
						icon={icons.doubleQuotes}
						text={text}
						url={images.profile3}
						name={'Bruno Soares'}
						post={'Pedagogo'}
					/>
				</C.CardsContainer>
			</div>
		</C.MainContainer>
	)
}

export default FeedbackOrganism
