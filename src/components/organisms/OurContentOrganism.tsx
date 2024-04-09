import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { icons } from '../../assets/icons'
import { images } from '../../assets/images'
import * as C from '../../styles/ourContentStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'
import FooterMolecule from '../molecules/FooterMolecule'
import OurContentCardsMolecule from '../molecules/OurContentCardsMolecule'

const OurContentOrganism: React.FC = () => {
	const infos = [
		{
			link: 'https://www.youtube.com/watch?v=snBgNDLRhD0&list=PLdVT9KMnIVcAm35VfZ7U4JphUqXb2R94W',
			img: images.podcastImg,
			text: 'Não perca nosso 1 episódio com o tema Diversidade e inclusão. Neste episódio nossos consultores Bárbara e...',
			title: 'PODCAST TRAÇO - Episódio 1, Inclusão e Diversidade'
		},
		{
			link: 'https://www.youtube.com/watch?v=snBgNDLRhD0&list=PLdVT9KMnIVcAm35VfZ7U4JphUqXb2R94W',
			img: images.podcastImg,
			text: 'Não perca nosso 1 episódio com o tema Diversidade e inclusão. Neste episódio nossos consultores Bárbara e...',
			title: 'PODCAST TRAÇO - Episódio 1, Inclusão e Diversidade'
		},
		{
			link: 'https://www.youtube.com/watch?v=snBgNDLRhD0&list=PLdVT9KMnIVcAm35VfZ7U4JphUqXb2R94W',
			img: images.podcastImg,
			text: 'Não perca nosso 1 episódio com o tema Diversidade e inclusão. Neste episódio nossos consultores Bárbara e...',
			title: 'PODCAST TRAÇO - Episódio 1, Inclusão e Diversidade'
		},
		{
			link: 'https://www.youtube.com/watch?v=snBgNDLRhD0&list=PLdVT9KMnIVcAm35VfZ7U4JphUqXb2R94W',
			img: images.podcastImg,
			text: 'Não perca nosso 1 episódio com o tema Diversidade e inclusão. Neste episódio nossos consultores Bárbara e...',
			title: 'PODCAST TRAÇO - Episódio 1, Inclusão e Diversidade'
		}
	]

	return (
		<C.MainContainer className='section' id='news'>
			<C.HeaderContainer>
				<C.Title>
					<TextAtom type={'h1'} text={'Acesse nossos conteúdos'} />
				</C.Title>
				<C.Buttons>
					<ImageAtom className='prevNews' alt={'prev'} url={icons.prevNews} />
					<ImageAtom className='nextNews' alt={'next'} url={icons.nextNews} />
				</C.Buttons>
			</C.HeaderContainer>
			<C.CardsContainer>
				<Swiper
					style={{ width: '100vw', display: 'flex' }}
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					slidesPerView={3}
					navigation={{ nextEl: '.nextNews', prevEl: '.prevNews' }}
				>
					{infos.map((info, index) => (
						<SwiperSlide key={index}>
							<OurContentCardsMolecule
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
