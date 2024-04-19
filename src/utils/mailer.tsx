import emailJS from '@emailjs/browser'
import { ConsultancyValues, EmailValues } from '../interfaces/mailerInterface'

export const sendMail = async ({
	name,
	phone,
	product,
	email
}: EmailValues) => {
	const templateParams = {
		name,
		product,
		phone,
		email
	}

	const result = await emailJS.send(
		'service_xsudotv',
		'template_i6wqj4c',
		templateParams,
		'nnwqs0ZnuwBy5W8fb'
	)

	return result
}

export const sendMailConsultancy = async ({
	name,
	email,
	phone
}: ConsultancyValues) => {
	const templateParams = {
		name,
		email,
		phone
	}

	const result = await emailJS.send(
		'service_xsudotv',
		'template_arwrd1h',
		templateParams,
		'nnwqs0ZnuwBy5W8fb'
	)
	return result
}
