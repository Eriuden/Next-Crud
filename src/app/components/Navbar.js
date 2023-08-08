import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    /*J'ai pas testé sur React, mais dans le cas de Next, on peut cibler un dossier en routing
    Mais ca ne marche pas si sa page est un rafc, seulement les rfc */
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link className='text-white font-bold' href ={"/"}>Acceuil</Link>
        <Link className='bg-white p-2' href ={"/addTopic"}>Ajouter topic</Link>
    </nav>
  )
}
