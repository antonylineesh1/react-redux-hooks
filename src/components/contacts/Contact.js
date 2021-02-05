import React from 'react'
import { useSelector } from "react-redux";
import Contacts from './Contacts';

export default function Contact() {
    const contacts = useSelector(state => state.contacts)
    console.log('contacts', contacts);
    return (
        <div>
            <table class="table shadow">
                <thead>
                    <tr>
                        <th scope="col"><div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label" />
                        </div></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, i) =>
                        <Contacts key={i} contact={contact} />
                    )}

                </tbody>
            </table>
        </div>
    )
}
