export interface IImageAtom {
	url?: string
	alt: string
	onClick?: () => void
	className?: string
}

export interface ITextAtom {
	type: string
	text?: string
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
	title: string
	subtitle: string
	description: string
	value: number
	extraText?: string
	former: string
	formerStatus: string
}

export interface ICard {
	alt: string
	url: string
	$typeBorder?: 'package1'
	data: objectData
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
	link?: string
	resume: string
}

export interface IInputAtom {
	type: string
	onChange: (value: string) => void
	value: string
	typeMask?: string
	placeholder?: string
}

export interface IFormMolecule {
	handleClose: () => void
	product: string
}

export interface ISwiperOrganism {
	url: string
	thumb: string
}
