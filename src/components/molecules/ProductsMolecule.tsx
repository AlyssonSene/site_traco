import React from 'react'
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
	data,
	checkmark,
	paymentType
}) => {
	return (
		<C.Products $typeBorder={$typeBorder}>
			<C.ProductTitle>
				<TextAtom text={title} type={'h1'} />
			</C.ProductTitle>
			<C.ProductName>
				{$typeBorder == 'package1' ? (
					<TextAtom
						text={name}
						type={'h3'}
						styles={{
							color: '#FF650A'
						}}
					/>
				) : (
					<TextAtom
						text={name}
						type={'h3'}
						styles={{
							color: '#0FBF71'
						}}
					/>
				)}
			</C.ProductName>
			<C.ProductValue>
				<div>
					{$typeBorder == 'package1' ? (
						<TextAtom
							text={'R$'}
							type={'span'}
							styles={{
								background:
									'var(--Gradient-OrangePink, linear-gradient(134deg, #ff8139 -10.58%, #FA39B9 92.67%))',
								backgroundClip: 'text',
								WebkitBackgroundCclip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						/>
					) : (
						<TextAtom
							text={'R$'}
							type={'span'}
							styles={{
								background:
									'var(--Gradient-YellowGreen, linear-gradient(135deg, #F0E13A -5.84%, #17E58A 107.59%))',
								backgroundClip: 'text',
								WebkitBackgroundCclip: 'text',
								WebkitTextFillColor: 'transparent'
							}}
						/>
					)}
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
				<TextAtom text={paymentType} type={'h5'} />
			</C.ProductValue>
			<C.Line />
			<C.ProductStartDate>
				<TextAtom text={startDate} type={'span'} />
			</C.ProductStartDate>
			<C.BenefitsContainer>
				<div>
					<ImageAtom alt='checkmark' url={checkmark} />
					<TextAtom text={data.benefits1} type={'span'} />
				</div>
				<div>
					<ImageAtom alt='checkmark' url={checkmark} />
					<TextAtom text={data.benefits2} type={'span'} />
				</div>
				<div>
					<ImageAtom alt='checkmark' url={checkmark} />
					<TextAtom text={data.benefits3} type={'span'} />
				</div>
				<div>
					<ImageAtom alt='checkmark' url={checkmark} />
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
