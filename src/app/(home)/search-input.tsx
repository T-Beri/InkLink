"use client"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import {useRef, useState} from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useSearchParam } from "@/hooks/use-search-params"

export const SearchInput=()=>{

    const [search,setSearch] = useSearchParam("")

    const [value,setValue] = useState(search);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }

    const handleClear=()=>{
        setValue("");
        setSearch("");
        inputRef.current?.blur();
    }

    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setSearch(value);
        inputRef.current?.blur()
    }


    return(
        <div className="flex-1 flex items-center justify-center">
            <form className="relative max-w-[720px] w-full" onSubmit={handleSubmit}>
                <Input value={value} onChange={handleChange} placeholder="Search" className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] bg-[#F0F4F8] rounded-full h-[48px] focus-visible:ring-0 focus:bg-white"></Input>
                
                
                <Button type="submit" variant="ghost" size="icon" className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full">
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </Button>

                {value && (<Button type="submit" onClick={handleClear} variant="ghost" size="icon" className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full">
                                <FontAwesomeIcon icon ={faXmark}></FontAwesomeIcon>
                           </Button>)}
            </form>
        </div>
    )
}