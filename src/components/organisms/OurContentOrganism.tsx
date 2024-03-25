import React from 'react'
import { images } from '../../assets/images'
import * as C from '../../styles/ourContentStyles'
import TextAtom from '../atoms/TextAtom'
import FooterMolecule from '../molecules/FooterMolecule'
import OurContentCardsMolecule from '../molecules/OurContentCardsMolecule'

const OurContentOrganism: React.FC = () => {
	return (
		<C.MainContainer className='section' id='news'>
			<C.HeaderContainer>
				<C.Title>
					<TextAtom type={'h1'} text={'Acesse nossos conteúdos'} />
				</C.Title>
			</C.HeaderContainer>
			<C.CardsContainer>
				<OurContentCardsMolecule
					link={
						'https://www.youtube.com/watch?v=snBgNDLRhD0&list=PLdVT9KMnIVcAm35VfZ7U4JphUqXb2R94W'
					}
					img={images.podcastImg}
					text={
						'Não perca nosso 1 episódio com o tema Diversidade e inclusão. Neste episódio nossos consultores Bárbara e...'
					}
					title={'PODCAST TRAÇO - Episódio 1, Inclusão e Diversidade'}
				/>
				<OurContentCardsMolecule
					img={images.imgContent2}
					text={
						'Lorem ipsum dolor sit amet consectetur. Adipiscing dolor vitae purus et pretium cursus ac. Nunc velit eleifend eget ultrices interdum tincidunt tellus...'
					}
					title={'Título do artigo - Subtítulo com descrição breve e resumida'}
				/>
				<OurContentCardsMolecule
					img={images.imgContent3}
					text={
						'Lorem ipsum dolor sit amet consectetur. Adipiscing dolor vitae purus et pretium cursus ac. Nunc velit eleifend eget ultrices interdum tincidunt tellus...'
					}
					title={'Título da notícia - Subtítulo com descrição breve e resumida'}
				/>
			</C.CardsContainer>
			<hr />
			<FooterMolecule />
		</C.MainContainer>
	)
}

export default OurContentOrganism
