import React from 'react'
import FeedbackOrganism from '../../components/organisms/FeedbackOrganism'
import FeedbackVideosOrganism from '../../components/organisms/FeedbackVideosOrganism'
import HomePageOrganism from '../../components/organisms/HomePageOrganism'
import KnowMoreOrganismo from '../../components/organisms/KnowMoreOrganismo'
import OurContentOrganism from '../../components/organisms/OurContentOrganism'
import OurTracesOrganism from '../../components/organisms/OurTracesOrganism'
import OurValuesOrganism from '../../components/organisms/OurValuesOrganism'
import ProductsPageOrganism from '../../components/organisms/ProductsPageOrganism'

const HomePage: React.FC = () => {
	return (
		<>
			<HomePageOrganism />
			<ProductsPageOrganism />
			<KnowMoreOrganismo />
			<OurValuesOrganism />
			<OurTracesOrganism />
			<FeedbackOrganism />
			<FeedbackVideosOrganism />
			<OurContentOrganism />
		</>
	)
}

export default HomePage
