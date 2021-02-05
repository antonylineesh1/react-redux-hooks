import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Contacts from './Contacts';
import { clearAllContacts, selectAllContact, deleteAllContacts } from './../../store/actions/actions';

export default function Contact() {
    const contacts = useSelector(state => state.contact.contacts)
    const [selectAll, setSelectAll] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map(contact => contact.id)));
        }
        else {
            dispatch(clearAllContacts());
        }

    }, [selectAll])

    return (
        <div>
            {selectAll && <button className="btn btn-danger m-2 mb-4" onClick={() => dispatch(deleteAllContacts())}>Delete All Contacts</button>}
            <table class="table shadow">
                <thead>
                    <tr>
                        <th scope="col"><div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" value={selectAll} onClick={() => setSelectAll(!selectAll)} />
                            <label className="custom-control-label" />
                        </div></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, i) =>
                        <Contacts key={i} contact={contact} selectAll={selectAll} />
                    )}

                </tbody>
            </table>
        </div>
    )
}
