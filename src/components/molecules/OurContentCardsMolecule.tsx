import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { icons } from '../../assets/icons'
import { IContentCards } from '../../interfaces/atomsInterfaces'
import * as C from '../../styles/ourContentStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const OurContentCardsMolecule: React.FC<IContentCards> = ({
	img,
	title,
	text,
	link,
	resume
}) => {
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	return (
		<C.Cards>
			<div>
				<ImageAtom alt={'imagem'} url={img} className={'image'} />
			</div>
			<C.TextsContainer>
				<C.TitleCard>
					<TextAtom type={'h1'} text={title} />
				</C.TitleCard>

				<C.TextCard onClick={() => setShow(true)}>
					<TextAtom type={'h5'} text={resume} />
				</C.TextCard>
				<C.AboutMore>
					<a href={link} target='_blank'>
						<TextAtom type={'span'} text={'Saiba mais'} />
					</a>

					<ImageAtom alt={'icone de seta'} url={icons.arrowLeft} />
				</C.AboutMore>
			</C.TextsContainer>
			<Modal
				size='lg'
				dialogClassName='modal-30w'
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Body>
					<C.CloseButton onClick={handleClose}>
						<span>x</span>
					</C.CloseButton>
					<C.TextModal>
						<TextAtom type={'span'} text={text} />
					</C.TextModal>
				</Modal.Body>
			</Modal>
		</C.Cards>
	)
}

export default OurContentCardsMolecule
