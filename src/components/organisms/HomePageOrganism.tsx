import React from 'react'
import { MainPage } from '../../styles/homePageStyles'
import HeaderMolecule from '../molecules/HeaderMolecule'
import HomeContainerMolecule from '../molecules/HomeContainerMolecule'
import VideoMolecule from '../molecules/VideoMolecule'

const HomePageOrganism: React.FC = () => {
	return (
		<MainPage>
			<HeaderMolecule />
			<HomeContainerMolecule />
			<VideoMolecule />
		</MainPage>
	)
}

export default HomePageOrganism
