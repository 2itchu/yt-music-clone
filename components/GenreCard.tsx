import React from "react"
import {generateRandomHex} from "@/lib/utils";

const GenreCard = ({genre}) =>{
    const hex = generateRandomHex();
    return(
        <div className={"flex flex-row h-[40px] w-full cursor-pointer rounded-lg bg-neutral-800"}>
            <div className={"h-full w-2 rounded-l-lg"} style={{backgroundColor:hex}}></div>
            <div className={"px-4 flex justify-center items-center"}>{genre}</div>
        </div>
    )

}

export default GenreCard;