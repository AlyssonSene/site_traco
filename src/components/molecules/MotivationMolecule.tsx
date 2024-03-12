import React from 'react'
import * as C from '../../styles/motivationStyles'
import TextAtom from '../atoms/TextAtom'

const MotivationMolecule: React.FC = () => {
	return (
		<C.MotivationContainer>
			<C.TextContainer>
				<TextAtom text={'Diferencial para a escola'} type={'h4'} />
				<TextAtom
					text={
						'A melhor forma de reforçar sua marca e fortalecer sua relação com as famílias é se diferenciar, ou seja, criar espaços e condições para que os jovens possam desenvolver as suas mais variadas habilidades, entender sua atuação no mundo e ir em busca dos seus propósitos.'
					}
					type={'span'}
				/>
			</C.TextContainer>
			<C.TextContainer>
				<TextAtom text={'Comodidade para as famílias'} type={'h4'} />
				<TextAtom
					text={
						'Um local de confiança e segurança para as famílias deixarem seus filhos  e que garante aos alunos a possibilidade de aprender, desenvolver, fazer melhores escolhas e construir o seu futuro de forma brilhante.'
					}
					type={'span'}
				/>
			</C.TextContainer>
			<C.TextContainer>
				<TextAtom text={'Desenvolvimento para o estudante'} type={'h4'} />
				<TextAtom
					text={
						'Estimula, engaja, traz o estudante a gostar de desenvolver as atividades escolares e melhora seu comportamento e  rendimento escolar.'
					}
					type={'span'}
				/>
				<br />
				<br />
				<TextAtom
					text={
						'O jovem passa a conduzir sua própria jornada com confiança e determinação, explorando suas habilidades, paixões e objetivos.'
					}
					type={'span'}
				/>
			</C.TextContainer>
		</C.MotivationContainer>
	)
}

export default MotivationMolecule
