import React from 'react'
import InputMask from 'react-input-mask'
import { IInputAtom } from '../../interfaces/atomsInterfaces'

const InputAtom: React.FC<IInputAtom> = ({
	type,
	onChange,
	value,
	typeMask,
	placeholder
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value)
	}

	if (typeMask == 'phone') {
		return (
			<InputMask mask='(99) 99999-9999' value={value} onChange={handleChange} />
		)
	} else {
		return (
			<input
				type={type}
				onChange={handleChange}
				value={value}
				placeholder={placeholder}
			/>
		)
	}
}

export default InputAtom
