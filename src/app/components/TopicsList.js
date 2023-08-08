import Link from 'next/link'
import React from 'react'
import { RemoveButton } from './RemoveButton'
import { HiPencilAlt} from "react-icons/hi"

export const TopicsList = () => {
  return (
    <>
        <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5
        items-start'>
            <div>
                <h2 className='font-bold text-2xl'>Titre de topic</h2>
                <div>Description du topic</div>
            </div>

            <div className='flex gap-2'>
                <RemoveButton/>
                <Link href={"/editTopic/:id"}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
    </>
  )
}
