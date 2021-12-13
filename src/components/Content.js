import React from 'react'

export const Content = () => {
    return (
        <>
        <div className="menu-card">
            <img src="food.jfif" alt="food-pic" className="h-10/12 rounded mb-20 shadow  w-10/12" />
            <div className="content-menu">
                <h2 className="text-4xl mb-2 text-center ">
                    Egg Mufflins
                </h2>
                <p className="mb-2 font-mono text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minima explicabo omnis quas aliquid quos culpa quasi sapiente sunt et dolor nobis</p>
                <span className="text-2xl"><b>Rs 100 </b></span>
                
            </div>
        </div>
        <div className="menu-card">
            <img src="food3.jfif" alt="food-pic" className="h-10/12 rounded mb-20 shadow  w-10/12" />
            <div className="content-menu">
                <h2 className="text-4xl mb-2 text-center">
                    Egg Mufflins
                </h2>
                <p className="mb-2 font-mono text-2xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minima explicabo omnis quas aliquid quos culpa quasi sapiente sunt et dolor nobis</p>
                <span className="text-2xl"><b>Rs 100 </b></span>
                
            </div>
        </div>
        </>
    )
}
