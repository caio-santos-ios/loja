import React from "react"

interface Iprops {
    children: React.ReactNode,
    isOpen: boolean
}

export const Modal = ({children, isOpen}: Iprops) => {
    return (
        <>
            {
                isOpen &&
                <div className="bg-transparent absolute z-10 w-full h-full">
                    {children}
                </div>
            }
        </>
    )
}