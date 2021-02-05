import { CREATE_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACT } from './../types/actionTypes';

export const addContact = contact => {
    return {
        type: CREATE_CONTACT,
        payload: contact
    }
}

export const getContact = id => ({
    type: GET_CONTACT,
    payload: parseInt(id)
})

export const editContact = contact => ({
    type: EDIT_CONTACT,
    payload: contact
})

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id
})
