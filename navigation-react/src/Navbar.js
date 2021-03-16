import React from 'react'

export default function Navbar() {
    return (
        <div>
            <h1>Navbar component</h1>

            <div>
                <button><i class="fas fa-bars"></i></button>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact us</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}