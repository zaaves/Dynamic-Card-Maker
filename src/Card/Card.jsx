import React from "react"

export default function Cards({user,handleRemove,id}){

    return (
         <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
                
        <div className=" image w-[3vw] h-[3vw] rounded-full bg-zinc-300 overflow-hidden">
            <img className="w-full h-full object-cover" src={user.image} alt="" />
        </div>

            <h1 className="mt-1 text-xl font-semibold text-center leading-none">{user.name}</h1>

            <h4 className="opacity-50 text-xs font-semibold">{user.email}</h4>

            <p className="mt-1 text-center text-xs font-semibold leading-1 tracking-tight">When life gives you random clicks, make a photo gallery. </p>

            <button className="px-3 py-1 bg-red-500 text-xs rounded-md font-semibold text-white mt-4"
            onClick={()=> handleRemove(id)}
            >Remove It</button>

        </div>
       
    )
}