import React from 'react'
import { IFeedbackCards } from '../../interfaces/atomsInterfaces'
import * as C from '../../styles/feedbackStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const FeedbackCardsMolecule: React.FC<IFeedbackCards> = ({
	icon,
	text,
	url,
	name,
	post
}) => {
	return (
		<C.Cards>
			<div>
				<ImageAtom url={icon} alt={'icone'} />
			</div>
			<C.TextCard>
				<TextAtom type={'span'} text={text} />
			</C.TextCard>
			<C.PerfilContainer>
				<div>
					<ImageAtom url={url} alt={'imagem de perfil'} />
				</div>
				<div>
					<TextAtom type={'h5'} text={name} />
					<TextAtom type={'span'} text={post} />
				</div>
			</C.PerfilContainer>
		</C.Cards>
	)
}

export default FeedbackCardsMolecule
