import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Contact book</a>
                    <div>
                        <a className="btn btn-light p-2 mx-2">Create Contact</a>
                    </div>
                </div>

            </nav>
        </div>
    )
}
