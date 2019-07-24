import { SUBMIT_FORM } from '../actions/form-actions';

export default function formReducer(state = '',
 { type, payload }) {
 	switch (type, payload) {
 		case SUBMIT_FORM:
 			return payload.form;
 		default: 
 			return state;
 	}
}