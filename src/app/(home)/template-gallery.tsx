"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import {templates} from "@/constants/templates"
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";


export const TemplateGallery=()=>{
    
    const router =useRouter();
    const create = useMutation(api.documents.create)
    const [iscreating,setisCreating] = useState(false);

    const onTemplateClick = (title:string, initial_content:string)=>{
        setisCreating(true),
        create({title,initialContent:initial_content}).then((documentId)=>{
            router.push(`documents/${documentId}`)
        }).finally(()=>{
            setisCreating(false)
        })
    }

    return(
        <div className="bg-[#F1F3F4]">
            <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
                <h3>Start a new document</h3>
                <Carousel>
                    <CarouselContent className="-ml-4">
                        {templates.map((item)=>(
                            <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/5 2xl:basis-[14.285714%] pl-4">
                                <div className={cn("aspect-[3/4] flex flex-col gap-y-2.5", iscreating && "pointer-events-none opacity-50")}>
                                    <button disabled={iscreating} onClick={()=>onTemplateClick(item.label,"")} style={{backgroundImage:`url(${item.imageUrl})`,backgroundSize:"cover", backgroundPosition:"center",backgroundRepeat:"no-repeat"}} className="size-full hover:border-blue-500 rounded-sm border hover:bg-blue-50 transition flex flex-col items-center justify-center gap-y-4 bg-white">
                                        
                                    </button>
                                    <p className="text-sm font-medium truncate">
                                        {item.label}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious></CarouselPrevious>
                    <CarouselNext></CarouselNext>
                </Carousel>
            </div>

        </div>
    )
}