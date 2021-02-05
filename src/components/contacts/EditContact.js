import React, { useState, useEffect } from 'react'
import { getContact, editContact } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EditContact() {

    let { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const contact = useSelector((state) => state.contact.contact);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        if (contact != null) {
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
        }
        dispatch(getContact(id))
    }, [contact, dispatch, id])


    const updateContact = (e) => {
        console.log('name', name);
        console.log('email', email);
        console.log('phone', phone);

        const updateContact = Object.assign(contact, { name: name, phone: phone, email: email })

        dispatch(editContact(updateContact));
        history.push("/");
    }
    return (
        <div class="card shadow border-0">
            <div class="card-header">
                Edit a contact
            </div>
            <div class="card-body">
                <form onSubmit={(e) => updateContact(e)}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter your name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter your phone" value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter your email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-danger" type="submit">Edit Contact</button>
                </form>
            </div>
        </div>
    )
}
