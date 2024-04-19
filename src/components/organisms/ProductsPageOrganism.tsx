import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { images } from '../../assets/images'
import { CloseButton } from '../../styles/ourTracesStyles.tsx'
import * as C from '../../styles/productsStyles'
import { products } from '../../utils/dictionary.ts'
import ButtonAtom from '../atoms/ButtonAtom.tsx'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom.tsx'
import ConsultancyForm from '../molecules/ConsultancyForm.tsx'
import ProductsMolecule from '../molecules/ProductsMolecule'

const ProductsPageOrganism: React.FC = () => {
	const [modal, setModal] = useState(false)
	return (
		<C.ProductsContainer className='section' id='products'>
			<C.TitleContainer>
				<ImageAtom alt={'background'} url={images.newBackground} />
			</C.TitleContainer>
			<C.Description>
				<TextAtom type={'span'} text={`O`} />
				<TextAtom
					type={'span'}
					text={' PROGRAMA ESCOLA MELHOR PARA TODOS'}
					styles={{ color: '#fa39b9', fontWeight: 'bold' }}
				/>
				<TextAtom
					type={'span'}
					text={` propõe uma abordagem inovadora para transformar o ambiente escolar, focando na`}
				/>
				<TextAtom
					type={'span'}
					text={` implementação de práticas pedagógicas e de gestão`}
					styles={{ color: '#fa39b9', fontWeight: '500' }}
				/>
				<TextAtom
					type={'span'}
					text={` que promovam relações mais saudáveis, a redução de conflitos e maior participação dos estudantes nas atividades escolares. Impactando positivamente na aprendizagem.`}
				/>
			</C.Description>
			<div>
				<TextAtom
					type={'span'}
					text={'A TRAÇO'}
					styles={{
						fontFamily: 'Inter',
						fontSize: '1.1em',
						color: '#fa39b9',
						fontWeight: '500'
					}}
				/>
				<TextAtom
					text={` tem duas versões de atuação`}
					type={'span'}
					styles={{
						fontFamily: 'Inter',
						fontSize: '1.1em',
						color: '#656c78'
					}}
				/>
			</div>
			<C.Versions>
				<div>
					<TextAtom text={'Consultoria'} type={'h5'} />
					<TextAtom
						type={'span'}
						text={`Customizamos o PROGRAMA ESCOLA MELHOR PARA TODOS para atender os desafios de sua instituição ou rede de ensino - Versão CONSULTORIA DE IMPLEMENTAÇÃO;
					`}
					/>
					<C.Button>
						<ButtonAtom
							text='Entre em contato'
							onClick={() => setModal(true)}
						/>
					</C.Button>
				</div>
				<div>
					<TextAtom text={'Pílulas'} type={'h5'} />
					<TextAtom
						type={'span'}
						text={`Versão PÍLULAS DO PROGRAMA ESCOLA MELHOR PARA TODOS para atender a profissionais da educação interessados em transformar sua sala de aula e/ou sua escola em um espaço mais atrativo e acolhedor para todos.
					`}
					/>
				</div>
			</C.Versions>
			<C.CardsContainer>
				{products.map((product, index) => {
					return (
						<ProductsMolecule
							key={index}
							data={product}
							$typeBorder={'package1'}
							url={product.image}
							alt={products[index].image}
						/>
					)
				})}
			</C.CardsContainer>
			<Modal
				show={modal}
				onHide={() => setModal(false)}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Body>
					<CloseButton onClick={() => setModal(false)}>
						<span>x</span>
					</CloseButton>
					<ConsultancyForm handleClose={() => setModal(false)} />
				</Modal.Body>
			</Modal>
		</C.ProductsContainer>
	)
}

export default ProductsPageOrganism
