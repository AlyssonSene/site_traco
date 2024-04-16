import React from 'react'
import { icons } from '../../assets/icons'
import * as C from '../../styles/knowMoreStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'
import CardsMolecule from '../molecules/CardsMolecule'

const KnowMoreOrganismo: React.FC = () => {
	return (
		<C.MainContainer>
			<C.Header>
				<ImageAtom alt='icone de caixa' url={icons.boxIcon} />
				<TextAtom text={'Trazendo soluções'} type={'span'} />
			</C.Header>
			<C.TitleContainer>
				<TextAtom
					text={'Conheça outros produtos e saiba como podemos te ajudar'}
					type={'h1'}
				/>
				<ImageAtom url={icons.vetorImage} alt='vetor' />
			</C.TitleContainer>
			<C.CardsContainer>
				<CardsMolecule
					url={icons.medal}
					title={'Protagonismo Juvenil'}
					text={
						'Acreditamos que investir na juventude e proporcionar oportunidades para desenvolver suas habilidades é essencial para criar um mundo melhor. Por isso, oferecemos formações para redes escolares, gestores, professores e estudantes.'
					}
				/>
				<CardsMolecule
					url={icons.path}
					title={'Articulação e relacionamento'}
					text={
						'É crucial articular e construir relacionamentos cuidadosamente. Com mais de 20 anos de experiência, oferecemos um caminho acolhedor e cooperativo, proporcionando resultados excepcionais.'
					}
				/>
				<CardsMolecule
					url={icons.chatBar}
					title={'Mobilização e engajamento'}
					text={
						'Mobilização e engajamento demandam o reconhecimento do público e a criação de vínculos com a causa. Trabalhamos na definição e implementação de soluções, especialmente voltadas para jovens ou ações com foco na juventude.'
					}
				/>

				<CardsMolecule
					url={icons.guitar}
					title={'Eventos'}
					text={
						'Eventos formativos e celebrativos são estratégias essenciais que exigem planejamento cuidadoso. Oferecemos assessoria completa na organização de eventos, estratégia inicial e acompanhamento pós-evento.'
					}
				/>
				<CardsMolecule
					url={icons.graph}
					title={'Planejamento da comunicação'}
					text={
						'Criamos o Plano Estratégico de Comunicação para seu projeto ou instituição, acompanhando a implementação e auxiliando na seleção de fornecedores.'
					}
				/>
				<CardsMolecule
					url={icons.brush}
					title={'Criação de conteúdo'}
					text={
						'Desenvolvemos projetos de fortalecimento de marca e conteúdo, utilizando a narrativa da sua instituição. Elaboramos estratégias e produzimos materiais digitais, como vídeos, áudios e imagens'
					}
				/>
			</C.CardsContainer>
		</C.MainContainer>
	)
}

export default KnowMoreOrganismo
