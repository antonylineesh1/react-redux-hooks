import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/actions/actions';

export default function Contacts({ contact }) {
    const dispatch=useDispatch();

    return (
        <tr>
            <td><div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label" />
            </div></td>
            <td align="left"><Avatar className="mr-2" name={contact.name} size="40" round={true} /> {contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td><Link to={`/contacts/edit/${contact.id}`}><span className="material-icons">edit</span></Link></td>
            <td><Link onClick={()=>dispatch(deleteContact(contact.id))}><span class="material-icons">remove_circle</span></Link></td>
        </tr>
    )
}
