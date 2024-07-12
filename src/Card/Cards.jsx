import React from "react"
import Card from './Card.jsx'

export default function Cards({users,handleRemove,index}){

    function showcon(index){
        console.log(index)
    }
    return (
        <div className=" w-full max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap">
            {users.map((item,index)=>{
            return <Card 
                handleRemove={handleRemove} 
                key={index} 
                user={item} 
                id={index}
                showcon={showcon(index)}
                />
            })} 
            
        </div>
    )
}