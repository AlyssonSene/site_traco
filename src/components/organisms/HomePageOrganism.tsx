import React from 'react'
import { CenterContainer, HomeContainer } from '../../styles/homePageStyles'
import TextAtom from '../atoms/TextAtom'
import HeaderMolecule from '../molecules/HeaderMolecule'

const HomePageOrganism: React.FC = () => {
	return (
		<div>
			<HeaderMolecule />
			<HomeContainer>
				<CenterContainer>
					<TextAtom text='NOVIDADES EM BREVE!' type='h1' />
				</CenterContainer>
			</HomeContainer>
		</div>
	)
}

export default HomePageOrganism
