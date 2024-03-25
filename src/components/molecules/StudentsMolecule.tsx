import React from 'react'
import { images } from '../../assets/images'
import * as C from '../../styles/homePageStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const StudentsMolecule: React.FC = () => {
	return (
		<C.StudentsDiv>
			<C.Images>
				<ImageAtom className='image1' alt={''} url={images.ellipse1} />
				<ImageAtom className='image2' alt={''} url={images.ellipse2} />
				<ImageAtom className='image3' alt={''} url={images.ellipse3} />
			</C.Images>
			<TextAtom
				text={'Junte-se a nossa rede de Soluções Educacionais'}
				type='span'
			/>
		</C.StudentsDiv>
	)
}

export default StudentsMolecule
