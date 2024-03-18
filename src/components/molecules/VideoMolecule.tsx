import React from 'react'
import ReactPlayer from 'react-player'
import { icons } from '../../assets/icons'
import thumb from '../../assets/images/thumb.png'
import * as C from '../../styles/homePageStyles'
import PlayerAtom from '../atoms/PlayerAtom'

const VideoMolecule: React.FC = () => {
	return (
		<C.VideoContainer>
			<ReactPlayer
				width={'1243px'}
				height={'711px'}
				url={'https://www.youtube.com/watch?v=apRlZCRtLuA'}
				controls={true}
				playIcon={<PlayerAtom icon={icons.videoPlayer} />}
				playing={true}
				light={thumb}
			/>
		</C.VideoContainer>
	)
}

export default VideoMolecule
