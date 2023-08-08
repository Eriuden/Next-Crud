import React from 'react'

export const EditTopicForm = () => {
  return (
    <form className='flex flex-col gap-3'>
        <input 
            className='border border-slate-500 px-8 py-2'
            type="text" 
            placeholder='titre topic'
         />

        <input 
            className='border border-slate-500 px-8 py-2'
            type="text" 
            placeholder='titre description'
         />

        <button className='bg-green-600 font-bold
        text-white py-3 px-6 w-fit'>
            Editer topic
        </button>
    </form>
  )
}
