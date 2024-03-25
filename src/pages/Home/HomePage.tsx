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
	const links = document.querySelectorAll('.options-link')
	const sections = document.querySelectorAll('section')

	window.addEventListener('scroll', () => {
		sections.forEach(section => {
			let top = window.scrollY
			let offSet = section.offsetTop - 10
			let heightSection = section.offsetHeight
			let idSection = section.getAttribute('id')

			if (top >= offSet && top <= offSet + heightSection) {
				links.forEach(link => {
					link.classList.remove('active')
					document
						.querySelector(`a[href*=${idSection}]`)
						?.classList.add('active')
				})
			}
		})
	})
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
