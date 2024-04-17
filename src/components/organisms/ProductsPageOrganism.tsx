import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { images } from '../../assets/images'
import * as C from '../../styles/productsStyles'
import { products } from '../../utils/dictionary.ts'
import ImageAtom from '../atoms/ImageAtom'
import ProductsMolecule from '../molecules/ProductsMolecule'

const ProductsPageOrganism: React.FC = () => {
	return (
		<C.ProductsContainer className='section' id='products'>
			<C.TitleContainer>
				<ImageAtom alt={'background'} url={images.newBackground} />
			</C.TitleContainer>
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
		</C.ProductsContainer>
	)
}

export default ProductsPageOrganism
