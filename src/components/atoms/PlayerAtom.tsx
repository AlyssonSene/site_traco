import React from 'react'
import { icons } from '../../assets'
import ImageAtom from './ImageAtom'

const PlayerAtom: React.FC = () => {
	return <ImageAtom url={icons.videoPlayer} alt={'player de video'} />
}

export default PlayerAtom
