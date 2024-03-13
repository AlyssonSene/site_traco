import React from 'react'
import { ITextAtom } from '../../interfaces/atomsInterfaces'

const TextAtom: React.FC<ITextAtom> = ({ type, text, styles }) => {
	const Tag = `${type}` as keyof JSX.IntrinsicElements
	return <Tag style={styles}>{text}</Tag>
}

export default TextAtom
