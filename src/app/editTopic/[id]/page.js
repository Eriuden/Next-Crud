import React from 'react'
import { EditTopicForm } from '../../components/EditTopicForm'

const getTopicById = async(id)=> {
  try{
    const res= await fetch(`http://localhost:3000/api/topics/${id}`,
    {cache:"no-store",
    })

  if(!res.ok){
    throw new Error("opération échouée")
  }
  } catch (err) {
    console.log(err)
  }
}

export default async function editTopic({params}) {
  const {id} = params
  const {topic} = await getTopicById(id)
  await getTopicById(id)
  const {title, description} = topic 
  return <EditTopicForm id={id} title={title} description= {description}/>
    
}
