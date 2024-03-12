import React from 'react'
import { ICards } from '../../interfaces/atomsInterfaces'
import * as C from '../../styles/knowMoreStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const CardsMolecule: React.FC<ICards> = ({ url, title, text }) => {
	return (
		<C.Cards>
			<C.IconElipse>
				<ImageAtom url={url} alt={'icone'} />
			</C.IconElipse>
			<C.TitleCard>
				<TextAtom text={title} type={'h4'} />
			</C.TitleCard>
			<C.TextCard>
				<TextAtom text={text} type={'span'} />
			</C.TextCard>
		</C.Cards>
	)
}

export default CardsMolecule
