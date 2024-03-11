import React from 'react'
import { IButton } from '../../interfaces/atomsInterfaces'

const ButtonAtom: React.FC<IButton> = ({ text, onClick }) => {
	return <button onClick={onClick}>{text}</button>
}

export default ButtonAtom
