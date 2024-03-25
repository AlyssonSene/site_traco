import emailJS from '@emailjs/browser'
import { values } from '../interfaces/mailerInterface'

const sendMail = async ({
	nome,
	email,
	assunto,
	mensagem,
	telefone
}: values) => {
	const templateParams = {
		nome,
		email,
		assunto,
		mensagem,
		telefone
	}

	const result = await emailJS.send(
		import.meta.env.VITE_EMAIL_SERVICE_ID,
		import.meta.env.VITE_EMAIL_TEMPLATE_ID,
		templateParams,
		import.meta.env.VITE_EMAIL_PUBLIC_KEY
	)

	return result
}

export default sendMail
