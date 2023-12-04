'use client'
import React from 'react'

const page = () => {
    return (
        <>
        <div className="bg-slate-950 flex justify-center items-center h-screen">
    <form className="bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="fileInput">
                Upload PCB Design
            </label>
            <input className="shadow appearance-none border rounded w-full py-7 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline file:h-11" id="fileInput" type="file"></input>
        </div>
        <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Design PCB
            </button>
        </div>
    </form>
</div>
        </>
    )
    
}

export default page
