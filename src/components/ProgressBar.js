import React from 'react'

export default function ProgressBar({ value, title }) {
    return (
        <div className='relative w-full h-full bg-blue-100 flex items-center'>
            <div className='absolute  h-full bg-blue-800 text-white  p-2 flex items-center' style={{ width: `${value}%` }}>{title}</div>
        </div>
    )
}
