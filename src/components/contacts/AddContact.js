import React, { useState } from 'react'
import { addContact } from '../../store';
import {useDispatch} from 'react-redux';
import shortid from 'shortid'
import { useHistory } from 'react-router-dom';

export default function AddContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const dispatch = useDispatch();
    let history=useHistory();

    const CreateContact = (e) => {
        e.preventDefault();
        console.log('name', name);
        console.log('email', email);
        console.log('phone', phone);

        dispatch(addContact({ id:shortid.generate(), name: name, email: email, phone: phone }));
        history.push("/");
    }
    return (
        <div class="card shadow border-0">
            <div class="card-header">
                Add a contact
            </div>
            <div class="card-body">
                <form onSubmit={(e) => CreateContact(e)}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter your phone"
                            onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}
