import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/education">Education</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/experience">Experience</NavLink>  
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
