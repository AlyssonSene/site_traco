import React from 'react'
import { IPlayer } from '../../interfaces/atomsInterfaces'
import ImageAtom from './ImageAtom'

const PlayerAtom: React.FC<IPlayer> = ({ icon }) => {
	return <ImageAtom url={icon} alt={'player de video'} />
}

export default PlayerAtom
