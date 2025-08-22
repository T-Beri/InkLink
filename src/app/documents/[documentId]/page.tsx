import React from 'react'
import Editor from './Editor';
import ToolBar from "./ToolBar";

function page() {
  return (
    <div className='min-h-screen bg-[#FAFBFD]'>
        <ToolBar></ToolBar>
        <Editor></Editor>
    </div>
   
  )
}

export default page;