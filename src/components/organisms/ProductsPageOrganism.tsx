import React, { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { icons } from '../../assets/icons/index.ts'
import { images } from '../../assets/images'
import * as C from '../../styles/productsStyles'
import { products } from '../../utils/dictionary.ts'
import ImageAtom from '../atoms/ImageAtom'
import ProductsDescriptionMolecule from '../molecules/ProductsDescriptionMolecule'
import ProductsMolecule from '../molecules/ProductsMolecule'

const ProductsPageOrganism: React.FC = () => {
	const [isEnd, setIsEnd] = useState(false)
	return (
		<C.ProductsContainer className='section' id='products'>
			<C.TitleContainer>
				<ImageAtom alt={'background'} url={images.newBackground} />
			</C.TitleContainer>
			<C.ButtonsController>
				<ImageAtom
					className='prevProduct'
					alt={'prevProduct'}
					url={isEnd ? icons.prevProduct : icons.prevProductDisable}
				/>
				<ImageAtom
					className='nextProduct'
					alt={'nextProduct'}
					url={isEnd ? icons.nextProductDisable : icons.nextProduct}
				/>
			</C.ButtonsController>
			<C.CardsContainer>
				<Swiper
					onReachEnd={() => setIsEnd(true)}
					onReachBeginning={() => setIsEnd(false)}
					navigation={{ nextEl: '.nextProduct', prevEl: '.prevProduct' }}
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={5}
					slidesPerView={2}
					style={{ display: 'flex', width: '45%', margin: '0' }}
				>
					{products.map((product, index) => {
						return (
							<SwiperSlide key={index}>
								<ProductsMolecule
									data={product}
									$typeBorder={'package1'}
									url={product.image}
									alt={products[index].image}
								/>
							</SwiperSlide>
						)
					})}
				</Swiper>

				<ProductsDescriptionMolecule />
			</C.CardsContainer>
		</C.ProductsContainer>
	)
}

export default ProductsPageOrganism
