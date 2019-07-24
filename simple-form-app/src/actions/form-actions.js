export const SUBMIT_FORM = 'submitForm'

export function submitForm(form) {
	return {
		type: SUBMIT_FORM,
		payload: {
			form: form
		}
	}
}
	
