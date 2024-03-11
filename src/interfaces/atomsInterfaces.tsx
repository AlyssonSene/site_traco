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
