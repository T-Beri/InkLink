'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TableKit } from '@tiptap/extension-table'
import { BulletList, ListItem } from '@tiptap/extension-list'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import ImageResize from "tiptap-extension-resize-image"
import { useEditorStore } from '@/store/use-editor-store'
import { TextStyle, FontFamily } from '@tiptap/extension-text-style'


const Tiptap = () => {
  const {setEditor}  = useEditorStore();

  const editor = useEditor({
    onCreate({editor}){
      setEditor(editor)
    },
    onDestroy(){
      setEditor(null)
    },
   
    onTransaction({editor}) {
      setEditor(editor)
    },
    onFocus({editor}){
      setEditor(editor)
    },
    onBlur({editor}){
      setEditor(editor)
    },
    onContentError({editor}){
      setEditor(editor)
    },
    

    editorProps:{
      attributes:{
         style: "padding-left: 56px; padding-right:56px;",
         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
      }
    },

    extensions: [StarterKit,Image,ImageResize.configure({inline: true,}), TableKit.configure({table: { resizable: true }}), BulletList, ListItem, TaskList,TaskItem.configure({nested: true,}),Heading.configure({levels: [1, 2, 3],}),TextStyle, FontFamily],
    content:`
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
        <p><span style="font-family:Comic Sans MS, Comic Sans">Did you know that Inter is a really nice font for interfaces?</span></p>
      `,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })
  

  return (
    <div className="bg-[#F9FBFD] size-full overflow-x-auto px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>);
}

export default Tiptap