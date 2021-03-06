import React from 'react'
import { Link } from 'react-router-dom'

export const Dropdown = ({isopen,toggle}) => {
    return (
        <div className={isopen?
            "grid grid-rows-4 text-center items-center bg-yellow-300":"hidden"} onClick={toggle}>
            <Link className="p-4" to="/">Home</Link>
            <Link className="p-4" to="/menu">Menu</Link>
            <Link className="p-4" to="/about">About</Link>
            <Link className="p-4" to="/contact">Contact</Link>
        </div>
    )
}
