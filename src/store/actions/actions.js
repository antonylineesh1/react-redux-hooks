import { CREATE_CONTACT } from './../types/actionTypes';
export const addContact = contact => {
    return {
        type: CREATE_CONTACT,
        payload: contact
    }
}