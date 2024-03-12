import React from 'react'
import { icons } from '../../assets'
import { ICard } from '../../interfaces/atomsInterfaces'
import * as C from '../../styles/productsStyles'
import ButtonAtom from '../atoms/ButtonAtom'
import ImageAtom from '../atoms/ImageAtom'
import TextAtom from '../atoms/TextAtom'

const ProductsMolecule: React.FC<ICard> = ({
	title,
	description,
	name,
	value,
	startDate,
	$typeBorder,
	data
}) => {
	return (
		<C.Products $typeBorder={$typeBorder}>
			<C.ProductTitle>
				<TextAtom text={title} type={'h1'} />
			</C.ProductTitle>
			<C.ProductName>
				<TextAtom text={name} type={'h3'} />
			</C.ProductName>
			<C.ProductValue>
				<div>
					<TextAtom text={'R$'} type={'span'} />
					<TextAtom
						text={value.toLocaleString('pt-BR', {
							style: 'decimal',
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						})}
						type={'h2'}
					/>
					<TextAtom text={'ou'} type={'h5'} />
				</div>
				<TextAtom text={'R$ 700,00/mês parcelados em até 6x'} type={'h5'} />
			</C.ProductValue>
			<C.Line />
			<C.ProductStartDate>
				<TextAtom text={startDate} type={'span'} />
			</C.ProductStartDate>
			<C.BenefitsContainer>
				<div>
					<ImageAtom alt='checkmark' url={icons.checkmark} />
					<TextAtom text={data.benefits1} type={'span'} />
				</div>
				<div>
					<ImageAtom alt='checkmark' url={icons.checkmark} />
					<TextAtom text={data.benefits2} type={'span'} />
				</div>
				<div>
					<ImageAtom alt='checkmark' url={icons.checkmark} />
					<TextAtom text={data.benefits3} type={'span'} />
				</div>
				<div>
					<ImageAtom alt='checkmark' url={icons.checkmark} />
					<TextAtom text={data.benefits4} type={'span'} />
				</div>
			</C.BenefitsContainer>
			<C.Description>
				<TextAtom text={description} type={'span'} />
			</C.Description>
			<C.subscribeButton>
				<ButtonAtom text={'Inscrever-se'} />
			</C.subscribeButton>
		</C.Products>
	)
}

export default ProductsMolecule
