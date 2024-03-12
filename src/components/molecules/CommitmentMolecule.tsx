import React from 'react'
import * as C from '../../styles/CommitmentStyles'
import TextAtom from '../atoms/TextAtom'

const CommitmentMolecule: React.FC = () => {
	return (
		<C.CommitmentContainer>
			<C.TextContainer>
				<TextAtom
					text={'Não oferecemos apenas formação teórica!'}
					type={'h4'}
				/>
				<br />
				<br />
				<TextAtom
					text={
						'Entregamos para as escolas um Guia prático de implementação de práticas pedagógicas e de gestão para promover a transformação.'
					}
					type={'span'}
				/>
				<br />
				<br />
				<TextAtom
					text={
						'Focando sempre em ações colaborativas trazendo todos que estão na escola a serem co-responsáveis por promover UMA ESCOLA MELHOR PARA TODOS.'
					}
					type={'span'}
				/>
				<br />
				<br />
				<ul>
					<li>
						<div>
							<TextAtom text={'Escola Melhor'} type={'h4'} />
							<TextAtom
								text={'= Estudantes mais felizes e comprometidos'}
								type={'span'}
							/>
						</div>
					</li>
					<li>
						<div>
							<TextAtom text={'Escola Melhor'} type={'h4'} />
							<TextAtom
								text={'= Pais e responsáveis mais felizes'}
								type={'span'}
							/>
						</div>
					</li>
					<li>
						<div>
							<TextAtom text={'Escola Melhor'} type={'h4'} />
							<TextAtom
								text={'= Gestores e Professores mais satisfeitos'}
								type={'span'}
							/>
						</div>
					</li>
					<li>
						<div>
							<TextAtom text={'Escola Melhor'} type={'h4'} />
							<TextAtom
								text={'= Matrículas garantidas para o ano letivo'}
								type={'span'}
							/>
						</div>
					</li>
					<li>
						<div>
							<TextAtom text={'Escola Melhor'} type={'h4'} />
							<TextAtom
								text={'=  Melhor resultado de Aprendizagem'}
								type={'span'}
							/>
						</div>
					</li>
				</ul>
			</C.TextContainer>
		</C.CommitmentContainer>
	)
}

export default CommitmentMolecule
