import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/router'

export const RemoveButton = ({id}) => {

  /*
    J'ignorais l'existence de la fonction Confirm
    Comme son nom l'indique, elle propose de confirmer ou d'annuler
    Renvoyant donc un bon vieux booléen 
    Rappel qui sert toujours, il existe des tonnes de méthodes du genre en JS
    Gain de temps fou plutôt que les coder soi même
  */

    const router= useRouter()

  const remove = async()=> {
    const confirmed = confirm("Etes vous sur ?")

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method:"DELETE",
      })
      //ok, comme on peut le deviner, signifie "si c'est boolean true"
      if(res.ok) {
        router.push("/")
      }
    }
  }
  return (
    <button onClick={remove} className='text-red-400'>
        <HiOutlineTrash size={24}/>
    </button>
  )
}
