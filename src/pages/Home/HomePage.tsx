import React from 'react'
import HomePageOrganism from '../../components/organisms/HomePageOrganism'
import KnowMoreOrganismo from '../../components/organisms/KnowMoreOrganismo'
import ProductsPageOrganism from '../../components/organisms/ProductsPageOrganism'

const HomePage: React.FC = () => {
	return (
		<>
			<HomePageOrganism />
			<ProductsPageOrganism />
			<KnowMoreOrganismo />
		</>
	)
}

export default HomePage
