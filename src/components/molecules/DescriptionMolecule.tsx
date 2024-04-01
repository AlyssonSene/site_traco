import React from 'react'
import * as C from '../../styles/descriptionStyles'
import TextAtom from '../atoms/TextAtom'

const DescriptionMolecule: React.FC = () => {
	return (
		<div>
			<C.Description>
				<TextAtom
					type={'span'}
					text={
						'A Traço é uma empresa que implementa soluções educacionais. Somos especializados em promover ações de formação, mobilização, relacionamento, articulação e engajamento.'
					}
				/>
			</C.Description>
			<C.SubtitleDiv>
				<TextAtom text={'Benefícios para a escola'} type='h5' />
			</C.SubtitleDiv>
			<C.BenefitsDiv>
				<div>
					<TextAtom text={'Ampliação do pertencimento'} type={'span'} />
				</div>
				<div>
					<TextAtom text={'Participação dos jovens'} type={'span'} />
				</div>
				<div>
					<TextAtom text={'redução da violÊNCIA'} type={'span'} />
				</div>
				<div>
					<TextAtom text={'MELHORIA DO AMBIENTE ESCOLAR'} type={'span'} />
				</div>
				<div>
					<TextAtom text={'PERMANÊNCIA DOS ALUNOS'} type={'span'} />
				</div>
				<div>
					<TextAtom text={'APRENDIZAGEM'} type={'span'} />
				</div>
				<div>
					<TextAtom text={'CIDADANIA E CONVIVÊNCIA'} type={'span'} />
				</div>
			</C.BenefitsDiv>
		</div>
	)
}

export default DescriptionMolecule
