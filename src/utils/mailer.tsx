import emailJS from '@emailjs/browser'
import { values } from '../interfaces/mailerInterface'

const sendMail = async ({ name, phone, product, email }: values) => {
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

export default sendMail
