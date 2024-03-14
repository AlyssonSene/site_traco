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
								setPeace(false)
						}}
						title={'Saúde emocional'}
						text={
							'Você já parou um pouco para reconhecer suas emoções? Como o manejo delas afeta sua vida? Vamos conversar sobre saúde emocional!'
						}
						urlIcon={icons.smile}
					/>
					<C.Line />
					<TracesMolecule
						onClick={() => {
							setHealth(false),
								setCitizenship(true),
								setGender(false),
								setPeace(false)
						}}
						selected={citizenship}
						title={'Promoção da cidadania'}
						text={
							'Viver em sociedade exige de todos nós o exercício da cidadania. Onde começa o exercício da cidadania da juventude?'
						}
						urlIcon={icons.smile}
					/>
					<C.Line />
					<TracesMolecule
						onClick={() => {
							setHealth(false),
								setCitizenship(false),
								setGender(true),
								setPeace(false)
						}}
						selected={gender}
						title={'Equidade de gênero'}
						text={
							'Como acabar com as vulnerabilidades sofridas há anos pelas mulheres? Vamos conversar sobre equidade de gênero?'
						}
						urlIcon={icons.smile}
					/>
					<C.Line />
					<TracesMolecule
						onClick={() => {
							setHealth(false),
								setCitizenship(false),
								setGender(false),
								setPeace(true)
						}}
						selected={peace}
						title={'Cultura de paz'}
						text={
							'O mundo está violento, não é mesmo? O que estamos fazendo para mudar isso, ou melhor ainda, como estamos preparando os jovens para termos uma sociedade menos violenta?'
						}
						urlIcon={icons.smile}
					/>
				</C.TracesContainer>
				<C.VideoContainer></C.VideoContainer>
			</C.CenterContainer>
		</C.MainContainer>
	)
}

export default OurTracesOrganism
