import React from 'react'
import * as C from '../../styles/homePageStyles'
import ButtonsMolecule from './ButtonsMolecule'
import SloganMolecule from './SloganMolecule'
import StudentsMolecule from './StudentsMolecule'
import SubtitleMolecule from './SubtitleMolecule'

const HomeContainerMolecule: React.FC = () => {
	return (
		<C.HomeContainer>
			<C.CenterContainer>
				<StudentsMolecule />
				<SloganMolecule />
				<SubtitleMolecule />
				<ButtonsMolecule />
			</C.CenterContainer>
		</C.HomeContainer>
	)
}

export default HomeContainerMolecule
