import React from 'react'
import traco from '../../assets/icons/traco.svg'
import { SloganContainer, Traco } from '../../styles/homePageStyles'
import TextAtom from '../atoms/TextAtom'

const SloganMolecule: React.FC = () => {
	return (
		<SloganContainer>
			<TextAtom
				text={'Venha traçar seu caminho junto com a gente'}
				type={'h1'}
			/>
			<Traco>
				<img src={traco} alt='risco' />
			</Traco>
			<TextAtom text='' type='h1' />
		</SloganContainer>
	)
}

export default SloganMolecule
