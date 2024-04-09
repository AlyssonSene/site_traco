import React from 'react'
import { icons } from '../../assets/icons'
import { IContentCards } from '../../interfaces/atomsInterfaces'
import * as C from '../../styles/ourContentStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const OurContentCardsMolecule: React.FC<IContentCards> = ({
	img,
	title,
	text,
	link
}) => {
	return (
		<C.Cards>
			<div>
				<ImageAtom alt={'imagem'} url={img} className={'image'} />
			</div>
			<C.TextsContainer>
				<C.TitleCard>
					<TextAtom type={'h1'} text={title} />
				</C.TitleCard>

				<C.TextCard>
					<TextAtom type={'h5'} text={text} />
				</C.TextCard>
				<C.AboutMore>
					<a href={link} target='_blank'>
						<TextAtom type={'span'} text={'Saiba mais'} />
					</a>

					<ImageAtom alt={'icone de seta'} url={icons.arrowLeft} />
				</C.AboutMore>
			</C.TextsContainer>
		</C.Cards>
	)
}

export default OurContentCardsMolecule
