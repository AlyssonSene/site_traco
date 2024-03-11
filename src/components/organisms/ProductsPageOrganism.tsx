import React from 'react'
import * as C from '../../styles/ProductsStyles'
import data from '../../utils/dictionary.json'
import TextAtom from '../atoms/TextAtom'
import ProductsMolecule from '../molecules/ProductsMolecule'

const ProductsPageOrganism: React.FC = () => {
	return (
		<C.ProductsContainer>
			<C.TitleContainer>
				<TextAtom text={'Conheça o'} type='span' />
				<TextAtom text={'Escola Melhor Para Todos'} type='h1' />
			</C.TitleContainer>
			<C.CardsContainer>
				<ProductsMolecule
					$typeBorder={'package1'}
					title={data.products[0].title}
					description={data.products[0].description}
					name={data.products[0].name}
					value={data.products[0].value}
					startDate={data.products[0].startDate}
					data={data.products[0].package}
				/>
				<ProductsMolecule
					$typeBorder={'package2'}
					title={data.products[1].title}
					description={data.products[1].description}
					name={data.products[1].name}
					value={data.products[1].value}
					startDate={data.products[1].startDate}
					data={data.products[1].package}
				/>
			</C.CardsContainer>
		</C.ProductsContainer>
	)
}

export default ProductsPageOrganism
