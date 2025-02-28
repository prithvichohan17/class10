
"use client" 
import { useState } from "react";
export default function Home(){

    const [counter, setCounter] = useState(0)
    
    //let counter =2
    
    const greeting =()=>{
        if(counter<10)
            setCounter(counter+1)
         
    }
    const handleDecraseCounter =()=>{
        if(counter>0)
            setCounter(counter-1)

    }
     
    return(
        <div className="flex flex-col gap-4 justify-center items-center border-2 bg-gray-800 h-screen relative">
        {/* <button className="bg-blue-900/80 text-white px-6 py-2 rounded-2xl font-bold text-2xl" onClick={handleClickEvent}>Click Me</button> */}
        <div className="text-yellow-600/70 text-3xl font-bold">Counter : {counter}</div>
        <div className="space-x-16">
        <button className="bg-blue-900/80 text-white px-6 py-2 rounded-2xl font-bold text-2xl" onClick={greeting}>Increase Counter</button>
        <button className="bg-blue-900/80 text-white px-6 py-2 rounded-2xl font-bold text-2xl" onClick={handleDecraseCounter}>Decrease Counter</button>
        </div>
        <div className={`bg-red-600/50 absolute top-0 mt-10 rounded-md p-2 text-yellow-200 font-bold text-lg ${counter>=10?"visible":"invisible"}`}>Counter has reached the maximum allowed limit</div>
        
    </div>
    )
}