import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ICard } from '../../interfaces/atomsInterfaces'
import { CloseButton } from '../../styles/ourTracesStyles'
import * as C from '../../styles/productsStyles'
import ButtonAtom from '../atoms/ButtonAtom'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'
import FormMolecule from './FormMolecule'

const ProductsMolecule: React.FC<ICard> = ({ $typeBorder, alt, url, data }) => {
	const [show, setShow] = useState(false)
	const handleClose = () => {
		setShow(false)
	}
	return (
		<C.Products $typeBorder={$typeBorder}>
			<C.ProductTitle>
				<ImageAtom alt={alt} url={url} />
			</C.ProductTitle>
			<C.DescriptionContainer>
				<C.ProductSubtitle>
					<TextAtom text={data.subtitle} type={'h4'} />
				</C.ProductSubtitle>
				<C.ProductName>
					<TextAtom text={data.title} type={'h3'} />
				</C.ProductName>
				<C.ProductDescription>
					<TextAtom text={data.description} type={'h4'} />
				</C.ProductDescription>
				<C.FomerContainer>
					{data.former ? (
						<TextAtom text={'Formador'} type={'span'} />
					) : (
						<TextAtom text={data.extraText} type={'h3'} />
					)}
					<TextAtom text={data.former} type={'h5'} />
					<TextAtom text={data.formerStatus} type={'span'} />
				</C.FomerContainer>
				<C.Line />
			</C.DescriptionContainer>
			<C.ProductValue>
				<div>
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
					<TextAtom
						text={data.value.toLocaleString('pt-BR', {
							style: 'decimal',
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						})}
						type={'h2'}
					/>
					<TextAtom text={'ou'} type={'h5'} />
				</div>
			</C.ProductValue>

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
					<FormMolecule handleClose={handleClose} product={data.title} />
				</Modal.Body>
			</Modal>
		</C.Products>
	)
}

export default ProductsMolecule
