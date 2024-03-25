import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ICard } from '../../interfaces/atomsInterfaces'
import { CloseButton } from '../../styles/ourTracesStyles'
import * as C from '../../styles/productsStyles'
import ButtonAtom from '../atoms/ButtonAtom'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'
import FormMolecule from './FormMolecule'

const ProductsMolecule: React.FC<ICard> = ({
	title,
	description,
	name,
	value,
	startDate,
	$typeBorder,
	data,
	checkmark,
	paymentType,
	product
}) => {
	const [show, setShow] = useState(false)
	const handleClose = () => {
		setShow(false)
	}
	return (
		<C.Products $typeBorder={$typeBorder}>
			<C.ProductTitle>
				<TextAtom text={title} type={'h1'} />
			</C.ProductTitle>
			<C.ProductName>
				{$typeBorder == 'package1' ? (
					<TextAtom
						text={name}
						type={'h3'}
						styles={{
							color: '#FF650A'
						}}
					/>
				) : (
					<TextAtom
						text={name}
						type={'h3'}
						styles={{
							color: '#0FBF71'
						}}
					/>
				)}
			</C.ProductName>
			<C.ProductValue>
				<div>
					{$typeBorder == 'package1' ? (
						<TextAtom
							text={'R$'}
							type={'span'}
							styles={{
								background:
									'var(--Gradient-OrangePink, linear-gradient(134deg, #ff8139 -10.58%, #FA39B9 92.67%))',
								backgroundClip: 'text',
								WebkitBackgroundCclip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						/>
					) : (
						<TextAtom
							text={'R$'}
							type={'span'}
							styles={{
								background:
									'var(--Gradient-YellowGreen, linear-gradient(135deg, #F0E13A -5.84%, #17E58A 107.59%))',
								backgroundClip: 'text',
								WebkitBackgroundCclip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						/>
					)}
					<TextAtom
						text={value.toLocaleString('pt-BR', {
							style: 'decimal',
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						})}
						type={'h2'}
					/>
					<TextAtom text={'ou'} type={'h5'} />
				</div>
				<TextAtom text={paymentType} type={'h5'} />
			</C.ProductValue>
			<C.Line />
			<C.ProductStartDate>
				<TextAtom text={startDate} type={'span'} />
			</C.ProductStartDate>
			<C.BenefitsContainer>
				<div>
					<ImageAtom alt='checkmark' url={checkmark} />
					<TextAtom text={data.benefits1} type={'span'} />
				</div>
				<div>
					<ImageAtom alt='checkmark' url={checkmark} />
					<TextAtom text={data.benefits2} type={'span'} />
				</div>
				<div>
					<ImageAtom alt='checkmark' url={checkmark} />
					<TextAtom text={data.benefits3} type={'span'} />
				</div>
				<div>
					<ImageAtom alt='checkmark' url={checkmark} />
					<TextAtom text={data.benefits4} type={'span'} />
				</div>
			</C.BenefitsContainer>
			<C.Description>
				<TextAtom text={description} type={'span'} />
			</C.Description>
			<C.Buttons>
				<C.subscribeButton>
					<ButtonAtom text={'Saiba mais'} onClick={() => setShow(true)} />
				</C.subscribeButton>
			</C.Buttons>
			<Modal
				size='lg'
				dialogClassName='modal-30w'
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Body>
					<CloseButton onClick={handleClose}>
						<span>x</span>
					</CloseButton>
					<FormMolecule handleClose={handleClose} product={product} />
				</Modal.Body>
			</Modal>
		</C.Products>
	)
}

export default ProductsMolecule
