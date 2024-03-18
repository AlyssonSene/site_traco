import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ReactPlayer from 'react-player'
import { IVideoModal } from '../../interfaces/atomsInterfaces'
import { CloseButton } from '../../styles/ourTracesStyles'
import ImageAtom from '../atoms/ImageAtom'

const VideoModalMolecule: React.FC<IVideoModal> = ({ url, thumb }) => {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)

	return (
		<>
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
						url={url}
						controls={true}
						playing={true}
					/>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default VideoModalMolecule
