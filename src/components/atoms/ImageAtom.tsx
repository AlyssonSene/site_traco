import React from 'react'
import { IImageAtom } from '../../interfaces/atomsInterfaces'

const ImageAtom: React.FC<IImageAtom> = ({ url, alt, onClick }) => {
	return <img src={url} alt={alt} onClick={onClick} />
}

export default ImageAtom
