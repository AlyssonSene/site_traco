import React from 'react'
import { SubtitleContainer } from '../../styles/homePageStyles'
import TextAtom from '../atoms/TextAtom'

const SubtitleMolecule: React.FC = () => {
	return (
		<SubtitleContainer>
			<TextAtom
				type='h4'
				text={
					'A Traço é uma empresa de projetos e consultoria, especializada em promover ações de formação, mobilização, relacionamento e comunicação. Venha conhecer o nosso trabalho!'
				}
			/>
		</SubtitleContainer>
	)
}

export default SubtitleMolecule
