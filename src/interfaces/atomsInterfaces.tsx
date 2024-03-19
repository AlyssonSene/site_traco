export interface IImageAtom {
	url: string
	alt: string
	onClick?: () => void
}

export interface ITextAtom {
	type: string
	text: string
	styles?: {}
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
	checkmark: string
	paymentType: string
}

export interface IHeaderOption {
	$isSelected?: boolean
}

export interface ICards {
	url: string
	title: string
	text: string
}

export interface IProduct {
	color: string
}

export interface ITraces {
	title: string
	text: string
	urlIcon: string
	onClick?: () => void
	selected: boolean
}

export interface ITraceCard {
	$isSelected: boolean
}

export interface IPlayer {
	icon: string
}

export interface IVideoModal {
	url: string
	thumb?: string
}

export interface IFeedbackCards {
	icon: string
	text: string
	url: string
	name: string
	post: string
}

export interface IContentCards {
	img: string
	text: string
	title: string
}
