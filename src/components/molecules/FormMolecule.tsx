import React, { useState } from 'react'
import { icons } from '../../assets/icons'
import { IFormMolecule } from '../../interfaces/atomsInterfaces'
import * as C from '../../styles/formStyles'
import { sendMail } from '../../utils/mailer'
import ButtonAtom from '../atoms/ButtonAtom'
import ImageAtom from '../atoms/ImageAtom'
import InputAtom from '../atoms/InputAtom'
import TextAtom from '../atoms/TextAtom'

const FormMolecule: React.FC<IFormMolecule> = ({ handleClose, product }) => {
	const [email, setEmail] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [name, setName] = useState<string>('')

	const handleEmail = (value: string) => {
		setEmail(value)
	}

	const handleName = (value: string) => {
		setName(value)
	}

	const handlePhone = (value: string) => {
		setPhone(value)
	}

	const sendEmail = async () => {
		await sendMail({ phone, name, email, product })
		handleClose()
	}

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
				<div id='name'>
					<TextAtom type={'span'} text={'Nome'} />
					<InputAtom type={'text'} onChange={handleName} value={name} />
				</div>
				<div id='email'>
					<TextAtom type={'span'} text={'Email'} />
					<InputAtom type={'email'} onChange={handleEmail} value={email} />
				</div>
				<div id='phone'>
					<TextAtom type={'span'} text={'Telefone'} />
					<InputAtom
						type={'tel'}
						typeMask='phone'
						onChange={handlePhone}
						value={phone}
					/>
				</div>
			</C.Form>
			<C.Line />
			<C.Buttons>
				<div className='cancel'>
					<ButtonAtom text={'Cancelar'} onClick={handleClose} />
				</div>
				<div className='sending'>
					<ButtonAtom text={'enviar'} onClick={sendEmail} />
				</div>
			</C.Buttons>
		</C.FormContainer>
	)
}

export default FormMolecule
