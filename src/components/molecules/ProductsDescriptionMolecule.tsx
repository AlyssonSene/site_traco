import React, { useState } from 'react'
import * as C from '../../styles/descriptionStyles'
import TextAtom from '../atoms/TextAtom'
import DescriptionMolecule from './DescriptionMolecule'

const ProductsDescriptionMolecule: React.FC = () => {
	const [selectDes, setSelectDes] = useState(true)
	const [selectMot, setSelectMot] = useState(false)
	const [selectComp, setSelectComp] = useState(false)

	return (
		<C.DescriptionContainer>
			<C.HeaderDescription>
				<C.HeaderOptions
					$isSelected={selectDes}
					onClick={() => {
						setSelectDes(true), setSelectMot(false), setSelectComp(false)
					}}
				>
					<TextAtom text={'Descrição'} type={'span'} />
					<div />
				</C.HeaderOptions>
				<C.HeaderOptions
					$isSelected={selectMot}
					onClick={() => {
						setSelectDes(false), setSelectMot(true), setSelectComp(false)
					}}
				>
					<TextAtom text={'Motivação'} type={'span'} />
					<div />
				</C.HeaderOptions>
				<C.HeaderOptions
					$isSelected={selectComp}
					onClick={() => {
						setSelectDes(false), setSelectMot(false), setSelectComp(true)
					}}
				>
					<TextAtom text={'Compromisso'} type={'span'} />
					<div />
				</C.HeaderOptions>
			</C.HeaderDescription>
			<C.OptionsContainer>
				{selectDes && <DescriptionMolecule />}
			</C.OptionsContainer>
		</C.DescriptionContainer>
	)
}

export default ProductsDescriptionMolecule
