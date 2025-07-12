import React from 'react'

const Card = (props) => {
    return (
        <div className='min-w-[250px] max-w-xs w-full h-50 outline-none flex flex-col rounded-lg m-10 flex-shrink-0 hover:scale-105 transition-all cursor-pointer gap-2'>
            <img src={props.src} className='rounded-lg w-full h-auto aspect-video'/>
            <h1 className='text-2xl font-bold'>{props.title}</h1>
            <p className='text-[#ad8c30]'>{props.description}</p>
        </div>
    )
}

export default Card

