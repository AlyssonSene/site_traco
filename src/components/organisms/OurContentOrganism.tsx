import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { icons } from '../../assets/icons'
import * as C from '../../styles/ourContentStyles'
import { infos } from '../../utils/dictionary'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'
import FooterMolecule from '../molecules/FooterMolecule'
import OurContentCardsMolecule from '../molecules/OurContentCardsMolecule'

const OurContentOrganism: React.FC = () => {
	const [isEnd, setIsEnd] = useState(false)

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<C.MainContainer className='section' id='news'>
			<C.HeaderContainer>
				<C.Title>
					<TextAtom type={'h1'} text={'Acesse nossos conteúdos'} />
				</C.Title>
				<C.Buttons>
					<ImageAtom
						className='prevNews'
						alt={'prev'}
						url={isEnd ? icons.prevNews : icons.prevNewsDisable}
					/>
					<ImageAtom
						className='nextNews'
						alt={'next'}
						url={isEnd ? icons.nextNewsDisable : icons.nextNews}
					/>
				</C.Buttons>
			</C.HeaderContainer>
			<C.CardsContainer>
				<Swiper
					onReachEnd={() => setIsEnd(true)}
					onReachBeginning={() => setIsEnd(false)}
					style={{ width: '100vw', display: 'flex' }}
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					slidesPerView={windowWidth <= 576 ? 1 : 3}
					navigation={{ nextEl: '.nextNews', prevEl: '.prevNews' }}
				>
					{infos.map((info, index) => (
						<SwiperSlide key={index}>
							<OurContentCardsMolecule
								resume={info.resume}
								link={info.link}
								img={info.img}
								text={info.text}
								title={info.title}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</C.CardsContainer>
			<hr />
			<FooterMolecule />
		</C.MainContainer>
	)
}

export default OurContentOrganism
