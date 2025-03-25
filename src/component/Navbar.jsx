import React from 'react'

export default function Navbar() {
  return (
    <nav>
            <img src='src\assets\logo.png'/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Renting</a></li>
                <li><a href="/">Buying</a></li>
                <li><a href="/">Selling</a></li>
                <li><a href="/">Contact Us</a></li>
                <button class="btn1">Login</button>
                <button>Sign Up</button>
            </ul>
        </nav>
  )
}
