"use client"
import {useQuery} from "convex/react"
import Navbar from "./navbar"
import { TemplateGallery } from "./template-gallery"
import {api} from "../../../convex/_generated/api"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)

export default function Home() {
  const documents = useQuery(api.documents.get)

  if(documents === undefined){
    return(
      <p>Loading...</p>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 right-0 left-0 z-10 h-16 bg-white p-4">
        <Navbar></Navbar>
      </div>
      <div>
        <TemplateGallery/>
          {documents?.map((document)=>(
            <span key={document._id}>{document.title}</span>
          ))}
        
      </div>
    </div>
    
  )
}
