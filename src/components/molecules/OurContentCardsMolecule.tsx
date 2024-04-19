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

	const closeModal = () => {
		setShow(false)
		console.log('clicou')
	}

	return (
		<C.Cards onClick={() => setShow(!show)}>
			<div>
				<ImageAtom alt={'imagem'} url={img} className={'image'} />
			</div>
			<C.TextsContainer>
				<C.TitleCard>
					<TextAtom type={'h1'} text={title} />
				</C.TitleCard>

				<C.TextCard>
					<TextAtom type={'h5'} text={resume} />
				</C.TextCard>
			</C.TextsContainer>
			<Modal
				size='lg'
				dialogClassName='modal-30w'
				show={show}
				onHide={closeModal}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Body>
					<C.CloseButton onClick={closeModal}>
						<span>x</span>
					</C.CloseButton>
					<C.TextModal>
						<C.TitleCard>
							<TextAtom type={'h1'} text={title} />
						</C.TitleCard>
						<TextAtom type={'span'} text={text} />
					</C.TextModal>
					<Modal.Footer>
						<C.AboutMore>
							<a href={link} target='_blank'>
								<TextAtom type={'span'} text={'Saiba mais'} />
							</a>

							<ImageAtom alt={'icone de seta'} url={icons.arrowLeft} />
						</C.AboutMore>
					</Modal.Footer>
				</Modal.Body>
			</Modal>
		</C.Cards>
	)
}

export default OurContentCardsMolecule
