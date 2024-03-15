import React, { useState } from 'react'
import { icons } from '../../assets'
import * as C from '../../styles/ourTracesStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'
import TracesMolecule from '../molecules/TracesMolecule'

const OurTracesOrganism: React.FC = () => {
	const [health, setHealth] = useState(true)
	const [citizenship, setCitizenship] = useState(false)
	const [gender, setGender] = useState(false)
	const [peace, setPeace] = useState(false)

	const [line1, setLine1] = useState(true)
	const [line2, setLine2] = useState(false)
	const [line3, setLine3] = useState(false)

	return (
		<C.MainContainer>
			<C.Header>
				<C.HeaderTitle>
					<ImageAtom url={icons.heart} alt={''} />
					<TextAtom type={'span'} text={'Trazendo soluções'} />
				</C.HeaderTitle>
			</C.Header>
			<C.Section>
				<C.Title>
					<TextAtom
						type={'h1'}
						text={'Alguns traços que acreditamos e achamos importantes'}
					/>
					<ImageAtom alt={'vetor'} url={icons.vetor4} />
				</C.Title>
			</C.Section>
			<C.CenterContainer>
				<C.TracesContainer>
					<TracesMolecule
						selected={health}
						onClick={() => {
							setHealth(true),
								setCitizenship(false),
								setGender(false),
								setPeace(false),
								setLine1(true),
								setLine2(false),
								setLine3(false)
						}}
						title={'Saúde emocional'}
						text={
							'Você já parou um pouco para reconhecer suas emoções? Como o manejo delas afeta sua vida? Vamos conversar sobre saúde emocional!'
						}
						urlIcon={health ? icons.smile2 : icons.smile}
					/>
					<C.Line $isSelected={line1} />
					<TracesMolecule
						onClick={() => {
							setHealth(false),
								setCitizenship(true),
								setGender(false),
								setPeace(false),
								setLine1(true),
								setLine2(true),
								setLine3(false)
						}}
						selected={citizenship}
						title={'Promoção da cidadania'}
						text={
							'Viver em sociedade exige de todos nós o exercício da cidadania. Onde começa o exercício da cidadania da juventude?'
						}
						urlIcon={citizenship ? icons.handshake2 : icons.handshake}
					/>
					<C.Line $isSelected={line2} />
					<TracesMolecule
						onClick={() => {
							setHealth(false),
								setCitizenship(false),
								setGender(true),
								setPeace(false),
								setLine1(false),
								setLine2(true),
								setLine3(true)
						}}
						selected={gender}
						title={'Equidade de gênero'}
						text={
							'Como acabar com as vulnerabilidades sofridas há anos pelas mulheres? Vamos conversar sobre equidade de gênero?'
						}
						urlIcon={gender ? icons.gender2 : icons.gender}
					/>
					<C.Line $isSelected={line3} />
					<TracesMolecule
						onClick={() => {
							setHealth(false),
								setCitizenship(false),
								setGender(false),
								setPeace(true),
								setLine1(false),
								setLine2(false),
								setLine3(true)
						}}
						selected={peace}
						title={'Cultura de paz'}
						text={
							'O mundo está violento, não é mesmo? O que estamos fazendo para mudar isso, ou melhor ainda, como estamos preparando os jovens para termos uma sociedade menos violenta?'
						}
						urlIcon={peace ? icons.peace2 : icons.peace}
					/>
				</C.TracesContainer>
				<C.VideoContainer></C.VideoContainer>
			</C.CenterContainer>
		</C.MainContainer>
	)
}

export default OurTracesOrganism
