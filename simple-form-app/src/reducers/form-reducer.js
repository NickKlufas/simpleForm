import { SUBMIT_FORM } from '../actions/form-actions';

export default function formReducer(state = '',
 { type, payload }) {
 	console.log(type);
 	console.log(payload);
 	switch (type, payload) {
 		case 'submitForm':
 			return payload;
 		default: 
 			return state;
 	}
}