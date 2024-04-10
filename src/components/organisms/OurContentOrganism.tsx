import React, { useState } from 'react'
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
			link: 'https://www.institutonatura.org/engajamento-alunos-espirito-santo/',
			img: images.newsImage,
			text: 'O GRUPO GERAÇÃO PROTAGONISTA é um projeto de mobilização e engajamento da juventude em idade escolar, com metodologia e realização liderados pela Traço...',
			title: 'PROJETO GERAÇÃO PROTAGONISTA'
		},
		{
			link: 'https://www.institutonatura.org/primeiro-encontro-estudantes-porta-vozes-emi/',
			img: images.newsImage2,
			text: 'O projeto ESTUDANTES PORTA-VOZES DO ENSINO MÉDIO INTEGRAL foi criada pela Traço, através do contrato com o Instituto Natura no ano de 2021 para atender...',
			title: 'PROJETO ESTUDANTES PORTA VOZES DO EMI'
		},
		{
			link: 'https://www.institutonatura.org/boas-praticas-no-emi/',
			img: images.newsImage3,
			text: 'A Traço através do contrato com o Instituto Natura criou em 2020, uma iniciativa de relacionamento e mobilização das equipes das Secretariais Estaduais de Educação que implementam o Ensino Médio Integral...',
			title: 'EDITAL DE BOAS PRÁTICAS DO ENSINO MÉDIO INTEGRAL'
		},
		{
			link: 'https://www.institutonatura.org/embaixadoras-crer-para-ver/#:~:text=Para%20aproximar%20as%20Embaixadoras%20de,elas%20foram%20transformadas%20pelo%20EMI.',
			img: images.newsImage4,
			text: 'No trabalho de mobilização por causas é importante trazermos personagens beneficiadas que tiveram suas vidas transformadas pelas ações das instituições. A Natura tem uma linha de produtos...',
			title: 'EVENTO ANUAL DAS EMBAIXADORAS NATURA CRER PARA VER'
		}
	]

	const [isEnd, setIsEnd] = useState(false)

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
