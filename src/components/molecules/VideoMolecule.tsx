import React from 'react'
import ReactPlayer from 'react-player'
import thumb from '../../assets/thumb.png'
import mainVideo from '../../assets/videos/mainVideo.mp4'
import * as C from '../../styles/homePageStyles'
import PlayerAtom from '../atoms/PlayerAtom'

const VideoMolecule: React.FC = () => {
	return (
		<C.VideoContainer>
			<ReactPlayer
				width={'1472px'}
				height={'831px'}
				url={mainVideo}
				controls={true}
				playIcon={<PlayerAtom />}
				playing={true}
				light={thumb}
			/>
		</C.VideoContainer>
	)
}

export default VideoMolecule
