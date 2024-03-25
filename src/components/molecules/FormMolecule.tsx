import React from 'react'
import { icons } from '../../assets/icons'
import * as C from '../../styles/formStyles'
import ImageAtom from '../atoms/ImageAtom'
import InputAtom from '../atoms/InputAtom'
import TextAtom from '../atoms/TextAtom'

const FormMolecule: React.FC = () => {
	return (
		<C.FormContainer>
			<C.FormHeader>
				<div>
					<ImageAtom alt={'circulo'} url={icons.circle} />
				</div>
				<div>
					<TextAtom
						type={'h5'}
						text={'Se inscreva e conheça nossos produtos'}
					/>
					<TextAtom
						type={'span'}
						text={
							'Preencha corretamente os campos abaixo para enviar sua inscrição'
						}
					/>
				</div>
			</C.FormHeader>
			<C.Line />
			<C.Form>
				<div id='email'>
					<TextAtom type={'span'} text={'Email'} />
					<InputAtom type={'email'} />
				</div>
				<div id='phone'>
					<TextAtom type={'span'} text={'Telefone'} />
					<InputAtom type={'tel'} />
				</div>
			</C.Form>
		</C.FormContainer>
	)
}

export default FormMolecule
