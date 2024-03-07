import React from 'react'
import { IImageAtom } from '../../interfaces/atomsInterfaces'

const ImageAtom: React.FC<IImageAtom> = ({ url, alt }) => {
	return <img src={url} alt={alt} />
}

export default ImageAtom
