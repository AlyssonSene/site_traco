import React from 'react'
import { IInputAtom } from '../../interfaces/atomsInterfaces'

const InputAtom: React.FC<IInputAtom> = ({ type }) => {
	return <input type={type} />
}

export default InputAtom
