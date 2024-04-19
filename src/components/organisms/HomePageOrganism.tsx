import React from 'react'
import { MainPage } from '../../styles/homePageStyles'
import HeaderMolecule from '../molecules/HeaderMolecule'
import HomeContainerMolecule from '../molecules/HomeContainerMolecule'

const HomePageOrganism: React.FC = () => {
	return (
		<MainPage className='section' id='start'>
			<HeaderMolecule />
			<HomeContainerMolecule />
		</MainPage>
	)
}

export default HomePageOrganism
