import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { images } from '../../assets/images'
import * as C from '../../styles/feedbackStyles'
import { CloseButton } from '../../styles/ourTracesStyles'
import ImageAtom from '../atoms/ImageAtom'

const FeedbackVideosOrganism: React.FC = () => {
	const [video, setVideo] = useState('')

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)

	return (
		<C.VideosContainer>
			<C.VideoCard
				onClick={() => {
					setVideo('https://www.youtube.com/watch?v=zz-HjyTXIfU'), setShow(true)
				}}
			>
				<ImageAtom url={images.thumb1} alt={'Thumbnail do video'} />
			</C.VideoCard>
			<C.VideoCard
				onClick={() => {
					setVideo('https://www.youtube.com/watch?v=3aSLwL0CeRI'), setShow(true)
				}}
			>
				<ImageAtom url={images.thumb2} alt={'Thumbnail do video'} />
			</C.VideoCard>
			<C.VideoCard
				onClick={() => {
					setVideo('https://www.youtube.com/watch?v=n1IRzBtczqc'), setShow(true)
				}}
			>
				<ImageAtom url={images.thumb3} alt={'Thumbnail do video'} />
			</C.VideoCard>
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
						url={video}
						controls={true}
						playing={true}
					/>
				</Modal.Body>
			</Modal>
		</C.VideosContainer>
	)
}

export default FeedbackVideosOrganism
