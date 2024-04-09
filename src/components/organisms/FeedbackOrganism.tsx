import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { icons } from '../../assets/icons'
import { images } from '../../assets/images'
import * as C from '../../styles/feedbackStyles'
import { CloseButton } from '../../styles/ourTracesStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const FeedbackOrganism: React.FC = () => {
	const videos = [
		{
			url: 'https://www.youtube.com/watch?v=zz-HjyTXIfU',
			thumb: images.thumb1
		},
		{
			url: 'https://www.youtube.com/watch?v=3aSLwL0CeRI',
			thumb: images.thumb2
		},
		{
			url: 'https://www.youtube.com/watch?v=n1IRzBtczqc',
			thumb: images.thumb3
		},
		{
			url: 'https://www.youtube.com/watch?v=sBanRs0dK7w&t=2s',
			thumb: images.thumb4
		}
	]
	const [video, setVideo] = useState('')
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	return (
		<C.MainContainer>
			<div>
				<C.HeaderContainer>
					<C.Text>
						<ImageAtom url={icons.feedbackIcon} alt={''} />
						<TextAtom type={'span'} text={'Saiba por eles'} />
					</C.Text>
				</C.HeaderContainer>

				<C.Section>
					<C.Title>
						<TextAtom type={'h1'} text={'Nos importamos com seus resultados'} />
					</C.Title>
				</C.Section>
			</div>

			<Swiper
				style={{ width: '100vw', display: 'flex' }}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={5}
				slidesPerView={3}
				navigation
			>
				{videos.map((video, index) => (
					<SwiperSlide key={index}>
						<C.VideoCard
							onClick={() => {
								setVideo(video.url), setShow(true)
							}}
						>
							<ImageAtom url={video.thumb} alt={'Thumbnail do video'} />
						</C.VideoCard>
					</SwiperSlide>
				))}
			</Swiper>
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
		</C.MainContainer>
	)
}

export default FeedbackOrganism
