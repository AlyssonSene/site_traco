import React from 'react'
import traco from '../../assets/traco.svg'
import { SloganContainer, Traco } from '../../styles/homePageStyles'
import TextAtom from '../atoms/TextAtom'

const SloganMolecule: React.FC = () => {
	return (
		<SloganContainer>
			<TextAtom text='Venha traçar seu caminho' type='h1' />
			<Traco>
				<img src={traco} alt='risco' />
			</Traco>
			<TextAtom text='junto com a gente' type='h1' />
		</SloganContainer>
	)
}

export default SloganMolecule
