import React, { useState } from 'react'
import { useRouter } from 'next/router'


export default function AddTopic() {
  const [title,setTitle] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter

  const handleSubmit= async(e) => {
    e.preventDefault()

    if(!title || !description) {
    alert("Il faut un titre et une description")
    return
    }

    try {
      const res = await fetch('http:localhost:3000/api/topics',{
        methods: "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify({title,description}),
      }) 

      if (res.ok) {
        router.push("/")
      } else {
        throw new Error("opération échouée")
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            className='border border-slate-500 px-8 py-2'
            type="text" 
            placeholder='titre topic'
         />

        <input 
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            className='border border-slate-500 px-8 py-2'
            type="text" 
            placeholder='titre description'
         />

        <button type='submit' className='bg-green-600 font-bold
        text-white py-3 px-6 w-fit'>
            Ajouter topic
        </button>
    </form>
  )
}
