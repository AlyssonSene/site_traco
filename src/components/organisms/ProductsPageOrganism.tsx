import React from 'react'
import { icons } from '../../assets'
import * as C from '../../styles/productsStyles'
import data from '../../utils/dictionary.json'
import TextAtom from '../atoms/TextAtom'
import ProductsDescriptionMolecule from '../molecules/ProductsDescriptionMolecule'
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
					paymentType={'R$ 700,00/mês parcelados em até 6x'}
					checkmark={icons.checkIcon}
					$typeBorder={'package1'}
					title={data.products[0].title}
					description={data.products[0].description}
					name={data.products[0].name}
					value={data.products[0].value}
					startDate={data.products[0].startDate}
					data={data.products[0].package}
				/>
				<ProductsMolecule
					paymentType={'R$ 620,00/mês parcelados em até 10x'}
					checkmark={icons.checkmark}
					$typeBorder={'package2'}
					title={data.products[1].title}
					description={data.products[1].description}
					name={data.products[1].name}
					value={data.products[1].value}
					startDate={data.products[1].startDate}
					data={data.products[1].package}
				/>
				<ProductsDescriptionMolecule />
			</C.CardsContainer>
		</C.ProductsContainer>
	)
}

export default ProductsPageOrganism
