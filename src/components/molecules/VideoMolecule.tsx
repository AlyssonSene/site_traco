import React from 'react'
import mainVideo from '../../assets/videos/mainVideo.mp4'
import * as C from '../../styles/homePageStyles'

const VideoMolecule: React.FC = () => {
	return (
		<C.VideoContainer>
			<video controls>
				<source src={mainVideo} type='video/mp4' />
			</video>
		</C.VideoContainer>
	)
}

export default VideoMolecule
