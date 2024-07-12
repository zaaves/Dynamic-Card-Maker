import React, { useState } from "react";
import Cards from "./Cards.jsx";
import Form from './Form.jsx'

export default function App1(){

    const [users,setUsers] = useState([])   //array

    const handleformSubmitData = (data)=>{
        setUsers([...users, data])
    }

    const handleRemove = (id) => {
        setUsers(()=>users.filter((item,index)=>index != id))
    }

    return (
        <div className="w-full h-screen bg-gray-400 flex items-center justify-center ">
            <div className="container mx-auto">
            <Cards 
                 
                handleRemove={handleRemove} 
                users={users}
            />
            <Form handleformSubmitData={handleformSubmitData}/>
            </div>

        </div>
    )
}