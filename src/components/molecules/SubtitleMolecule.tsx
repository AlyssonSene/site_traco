import React from 'react'
import { SubtitleContainer } from '../../styles/homePageStyles'
import TextAtom from '../atoms/TextAtom'

const SubtitleMolecule: React.FC = () => {
	return (
		<SubtitleContainer>
			<TextAtom
				type='h4'
				text={
					'A Traço é uma empresa que implementa soluções educacionais. Somos especializados em promover ações de formação, mobilização, relacionamento, articulação e engajamento.'
				}
			/>
		</SubtitleContainer>
	)
}

export default SubtitleMolecule
