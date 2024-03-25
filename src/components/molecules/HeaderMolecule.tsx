import React from 'react'
import { icons } from '../../assets/icons'
import * as C from '../../styles/headerStyles'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const HeaderMolecule: React.FC = () => {
	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		const links = document.querySelectorAll<HTMLAnchorElement>('.options-link')
		links.forEach(link => {
			link.classList.remove('active')
		})
		event.currentTarget.classList.add('active')
	}

	return (
		<C.HeaderMenu>
			<C.LogoContainer>
				<img src={icons.tracoIcon} alt='Logo da traço' />
			</C.LogoContainer>
			<C.OptionsContainer>
				<a href='#start' onClick={handleClick} className='options-link active'>
					<TextAtom text='Início' type='span' />
				</a>
				<a href='#products' onClick={handleClick} className='options-link'>
					<TextAtom text='Produtos' type='span' />
				</a>
				<a href='#values' onClick={handleClick} className='options-link'>
					<TextAtom text='Valores' type='span' />
				</a>
				<a href='#traces' onClick={handleClick} className='options-link'>
					<TextAtom text='Nossos traços' type='span' />
				</a>
				<a href='#news' onClick={handleClick} className='options-link'>
					<TextAtom text='Notícias' type='span' />
				</a>
			</C.OptionsContainer>
			<C.IconsContainer className='icons'>
				<a
					href='https://www.youtube.com/@TracoCaminhamosJuntos'
					target='_blank'
				>
					<ImageAtom url={icons.youtubeIcon} alt='logo do youtube' />
				</a>
				<a
					href='https://www.instagram.com/traco_caminhamosjuntos?igsh=MW1yN3VyY3BmcHp3Yg=='
					target='_blank'
				>
					<ImageAtom url={icons.instagramIcon} alt='logo do instagram' />
				</a>
			</C.IconsContainer>
		</C.HeaderMenu>
	)
}

export default HeaderMolecule
