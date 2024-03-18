import React from 'react'
import { icons } from '../../assets/icons'
import {
	AboutMoreButton,
	ButtonsContainer,
	PodcastButton
} from '../../styles/homePageStyles'
import ButtonAtom from '../atoms/ButtonAtom'
import ImageAtom from '../atoms/ImageAtom'
import SoonMolecule from './SoonMolecule'

const ButtonsMolecule: React.FC = () => {
	return (
		<ButtonsContainer>
			<AboutMoreButton>
				<ImageAtom alt='arrow right' url={icons.arrowRight} />
				<ButtonAtom text='Conheça nossos produtos' />
			</AboutMoreButton>
			<PodcastButton>
				<ImageAtom alt='arrow right' url={icons.playerIcon} />
				<ButtonAtom text='Conheça nosso podcast' />
			</PodcastButton>
			<SoonMolecule />
		</ButtonsContainer>
	)
}

export default ButtonsMolecule
