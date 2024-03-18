import React from 'react'
import { icons } from '../../assets/icons'
import * as C from '../../styles/headerStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const HeaderMolecule: React.FC = () => {
	return (
		<C.HeaderMenu>
			<C.LogoContainer>
				<img src={icons.tracoIcon} alt='Logo da traço' />
			</C.LogoContainer>
			<C.OptionsContainer>
				<TextAtom text='Início' type='span' />
				<TextAtom text='Produtos' type='span' />
				<TextAtom text='Valores' type='span' />
				<TextAtom text='Nossos traços' type='span' />
				<TextAtom text='Notícias' type='span' />
			</C.OptionsContainer>
			<C.IconsContainer className='icons'>
				<ImageAtom url={icons.facebookIcon} alt='logo do facebook' />
				<ImageAtom url={icons.instagramIcon} alt='logo do instagram' />
				<ImageAtom url={icons.emailIcon} alt='logo email' />
				<ImageAtom url={icons.phoneIcon} alt='logo telefone' />
			</C.IconsContainer>
		</C.HeaderMenu>
	)
}

export default HeaderMolecule
