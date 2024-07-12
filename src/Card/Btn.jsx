

export default function Btn(){

    function handleRemove(id){
        console.log(id)
    }

    return (
        <button className="px-3 py-1 bg-red-500 text-xs rounded-md font-semibold text-white mt-4"
            onClick={()=> handleRemove(id)}
            >Remove It</button>
    )
}