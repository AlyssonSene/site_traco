import React from 'react'
import { ITraces } from '../../interfaces/atomsInterfaces'
import * as C from '../../styles/ourTracesStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const TracesMolecule: React.FC<ITraces> = ({
	urlIcon,
	title,
	text,
	onClick,
	selected
}) => {
	return (
		<C.TraceCards onClick={onClick} $isSelected={selected}>
			<C.EmojContainer $isSelected={selected}>
				<ImageAtom url={urlIcon} alt={'emoji'} />
			</C.EmojContainer>
			<C.TextContainer>
				<TextAtom type={'h2'} text={title} />
				<TextAtom type={'span'} text={text} />
			</C.TextContainer>
		</C.TraceCards>
	)
}

export default TracesMolecule
