export interface IImageAtom {
	url: string
	alt: string
}

export interface ITextAtom {
	type: string
	text: string
}

export interface IButton {
	text: string
	onClick?: () => void
}

export interface IProducts {
	$typeBorder?: 'package1' | 'package2'
}

type objectData = {
	benefits1: string
	benefits2: string
	benefits3: string
	benefits4: string
}

export interface ICard {
	title: string
	name: string
	value: number
	startDate: string
	description: string
	$typeBorder?: 'package1' | 'package2'
	data: objectData
}
