import React from 'react'
import { icons } from '../../assets'
import { SoonContainer } from '../../styles/homePageStyles'
import ImageAtom from '../atoms/ImageAtom'

const SoonMolecule: React.FC = () => {
	return (
		<SoonContainer>
			<ImageAtom url={icons.soonIcon} alt='Icone em breve' />
		</SoonContainer>
	)
}

export default SoonMolecule
