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
				<a href='#products'>
					<ButtonAtom text='Conheça nossos produtos' />
				</a>
			</AboutMoreButton>
			<PodcastButton>
				<ImageAtom alt='arrow right' url={icons.playerIcon} />
				<a
					href='https://www.youtube.com/watch?v=snBgNDLRhD0&list=PLdVT9KMnIVcAm35VfZ7U4JphUqXb2R94W'
					target='_blank'
				>
					<ButtonAtom text='Conheça nosso podcast' />
				</a>
			</PodcastButton>
			<SoonMolecule />
		</ButtonsContainer>
	)
}

export default ButtonsMolecule
