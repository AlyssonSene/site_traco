import React from 'react'
import { StudentsDiv } from '../../styles/homePageStyles'
import TextAtom from '../atoms/TextAtom'

const StudentsMolecule: React.FC = () => {
	return (
		<StudentsDiv>
			<TextAtom
				text={'Junte-se a mais de 5.000 alunos e docentes'}
				type='span'
			/>
		</StudentsDiv>
	)
}

export default StudentsMolecule
