import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ReactPlayer from 'react-player'
import thumb from '../../assets/image4.png'
import * as C from '../../styles/homePageStyles'
import { CloseButton } from '../../styles/ourTracesStyles'
import ImageAtom from '../atoms/ImageAtom'

const VideoModalMolecule: React.FC = () => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)

	return (
		<C.VideoContainer>
			<ImageAtom url={thumb} alt={'thumbnail'} onClick={() => setShow(true)} />
			<Modal
				size='xl'
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
					<ReactPlayer
						width={'auto'}
						height={'711px'}
						url={'https://www.youtube.com/watch?v=apRlZCRtLuA'}
						controls={true}
						playing={true}
					/>
				</Modal.Body>
			</Modal>
		</C.VideoContainer>
	)
}

export default VideoModalMolecule
