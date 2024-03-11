import React from 'react'
import HeaderMolecule from '../molecules/HeaderMolecule'
import HomeContainerMolecule from '../molecules/HomeContainerMolecule'
import VideoMolecule from '../molecules/VideoMolecule'

const HomePageOrganism: React.FC = () => {
	return (
		<div>
			<HeaderMolecule />
			<HomeContainerMolecule />
			<VideoMolecule />
		</div>
	)
}

export default HomePageOrganism
