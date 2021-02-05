import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Contact book</Link>
                    <div>
                        <Link to="/contacts/add" className="btn btn-light p-2 mx-2">Create Contact</Link>
                    </div>
                </div>

            </nav>
        </div>
    )
}
