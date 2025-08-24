import React from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import {SearchInput} from "./search-input"
import {UserButton} from "@clerk/nextjs"
const Navbar=()=> {
  return (
    <div className='flex items-center justify-between h-full w-full'>
        <div className='flex gap-3 items-center shrink-0 pr-6'>
            <Link href="/">
                <FontAwesomeIcon icon={faFileLines} className='size-10'></FontAwesomeIcon>
            </Link>
            <h3 className='text-xl'>InkLink</h3>
        </div>
      <SearchInput/>
      <UserButton/>
    </div>
  )
}
export default Navbar