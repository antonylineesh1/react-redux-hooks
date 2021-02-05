import { CLEAR_ALL_CONTACT, CREATE_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_CONTACT, SELECT_ALL_CONTACT, DELETE_ALL_CONTACT } from './../types/actionTypes';

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
    payload: id
})

export const selectAllContact = (selectedContacts) => ({
    type: SELECT_ALL_CONTACT,
    payload: selectedContacts
})

export const clearAllContacts = () => ({
    type: CLEAR_ALL_CONTACT
})

export const deleteAllContacts = () => ({
    type: DELETE_ALL_CONTACT
})

