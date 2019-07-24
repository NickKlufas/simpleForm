export const SUBMIT_FORM = 'submitForm'

export const submitForm = form => ({
	type: SUBMIT_FORM,
	payload: { form }
});