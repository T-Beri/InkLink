"use client"
import {usePaginatedQuery} from "convex/react"
import Navbar from "./navbar"
import { TemplateGallery } from "./template-gallery"
import { DocumentsTable } from "./documentsTable"
import {api} from "../../../convex/_generated/api"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)

export default function Home() {
  const {results,status,loadMore} = usePaginatedQuery(api.documents.get,{},{initialNumItems:5})


  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 right-0 left-0 z-10 h-16 bg-white p-4">
        <Navbar></Navbar>
      </div>
      <div>
        <TemplateGallery/>
          <DocumentsTable documents={results} loadMore={loadMore} status={status}></DocumentsTable>
      </div>
    </div>
    
  )
}
