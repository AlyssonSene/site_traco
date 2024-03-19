import React from 'react'
import { icons } from '../../assets/icons'
import * as C from '../../styles/ourContentStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const FooterMolecule: React.FC = () => {
	return (
		<C.Footer>
			<C.FooterText>
				<ImageAtom alt={'logo'} url={icons.tracoIcon} />
				<TextAtom type={'span'} text={'Todos os direitos reservados'} />
			</C.FooterText>
			<C.FooterIcons>
				<div>
					<C.FooterIcon>
						<ImageAtom url={icons.phoneFooter} alt={'icone de telefone'} />
					</C.FooterIcon>
					<TextAtom type={'span'} text={'(35)9 9999-9999'} />
				</div>
				<div>
					<C.FooterIcon>
						<ImageAtom url={icons.emailFooter} alt={'Icone de email'} />
					</C.FooterIcon>
					<TextAtom type={'span'} text={'email@email.com'} />
				</div>
			</C.FooterIcons>
		</C.Footer>
	)
}

export default FooterMolecule
