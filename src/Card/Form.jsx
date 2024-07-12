import React from "react";
import { useForm } from "react-hook-form";

export default function Cards({handleformSubmitData}){
    const {register,handleSubmit,reset} = useForm();

    const handleFormSubmit = (data) => {
     handleformSubmitData(data);
     reset();
    //  console.log(data);
    }
    return (
        <div className="mt-10 flex gap-10 justify-center items-center ">
            
            <form className="flex gap-10 max-mm:gap-2 max-mm:flex max-mm:flex-col max-mm:sticky max-mm:top-0" onSubmit={handleSubmit(handleFormSubmit)}>
                <input {...register('name')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" 
                type="text" placeholder="Name" />

                <input {...register('email')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" 
                type="text" placeholder="Email" />

                <input {...register('image')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" 
                type="text" placeholder="Image URL" />

                <input className="px-5 py-1 rounded-md bg-blue-500 text-white font-semibold " type="submit"  />
            </form>
        </div>
    )
}