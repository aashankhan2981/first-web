import React from 'react'
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <div>
            <div className="bg-white h-screen flex flex-col justify-center items-center">
                <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 animate-pulse">
                    EGCELLENT
                </h1>
                <Link className="py-6 px-10  bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300  flex items-center animate-bounce" to="/">
                Order now    <img src="cart.png" className="w-8 ml-3" alt="" />
                
                </Link>
            </div>
        </div>
    )
}
