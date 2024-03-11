import React from 'react'
import * as C from '../../styles/ProductsStyles'
import TextAtom from '../atoms/TextAtom'

const ProductsPageOrganism: React.FC = () => {
	return (
		<C.ProductsContainer>
			<C.TitleContainer>
				<TextAtom text={'Conheça o'} type='span' />
				<TextAtom text={'Escola Melhor Para Todos'} type='h1' />
			</C.TitleContainer>
			<C.CardsContainer>
				<C.Products $typeBorder={'package1'} />
				<C.Products $typeBorder={'package2'} />
			</C.CardsContainer>
		</C.ProductsContainer>
	)
}

export default ProductsPageOrganism
