import React, { useEffect } from 'react'
import HomePageOrganism from '../../components/organisms/HomePageOrganism'
import KnowMoreOrganismo from '../../components/organisms/KnowMoreOrganismo'
import ProductsPageOrganism from '../../components/organisms/ProductsPageOrganism'

const HomePage: React.FC = () => {
	useEffect(() => {
		const links = document.querySelectorAll('.options-link')
		const sections = document.querySelectorAll('section')

		window.addEventListener('scroll', () => {
			sections.forEach(section => {
				let top = window.scrollY
				let offSet = section.offsetTop - 100
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
	}, [])
	return (
		<>
			<HomePageOrganism />
			<ProductsPageOrganism />
			<KnowMoreOrganismo />
			{/* <OurValuesOrganism /> */}
			{/* <OurTracesOrganism /> */}
			{/* <FeedbackOrganism /> */}
			{/* <OurContentOrganism /> */}
		</>
	)
}

export default HomePage
